import turmaApi from "../api/turmaApi.js";
import { preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarTurmas();

    preencherSelect(
        'tipo',
        '/api/tipo-turma',
        'id',
        'descricao'
    );

    preencherSelect(
        'oferta',
        '/api/oferta',
        'id',
        'descricao'
    );

    document.getElementById("formTurma")
        ?.addEventListener("submit", salvarOuAtualizar);
    window.editarTurma = editarTurma;
    window.excluirTurma = excluirTurma;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarTurma(id) {
    idEdicao = id;

    try {
        const turma = await turmaApi.getById(id);

        document.getElementById("tipo").value = turma.tipo?.id || turma.tipo;

        document.getElementById("oferta").value = turma.oferta?.id || turma.oferta;

        document.querySelector("h2").textContent = "Editar Turma";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da turma.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const turmaDTO = {
        id: idEdicao,
        tipo: {
            id: document.getElementById("tipo").value
        },
        oferta: {
            id: document.getElementById("oferta").value
        }
    };

    try {
        if (idEdicao === null) {
            await turmaApi.create(turmaDTO);
            mostrarNotificacao("sucesso", "Turma criada com sucesso!");
        } else {
            await turmaApi.update(idEdicao, turmaDTO);
            mostrarNotificacao("sucesso", "Turma atualizada com sucesso!");
        }

        cancelarEdicao();
        carregarTurmas();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar turma.");
    }
}

function cancelarEdicao() {
    document.getElementById("formTurma").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Turma";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}


async function excluirTurma(id) {

    if (!confirm("Tem certeza que deseja excluir esta turma?"))
        return;

    try {
        await turmaApi.delete(id);

        mostrarNotificacao("sucesso", "Turma excluída com sucesso!");

        carregarTurmas();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarTurmas() {
    const lista = await turmaApi.getAll();
    const tbody = document.getElementById("listaTurmas");

    tbody.innerHTML = lista.map(t => {
        const descricaoTipo = t.tipo ? t.tipo.descricao : 'N/A';

        let infoOferta = 'N/A';
        if (t.oferta) {
            const disc = t.oferta.disciplina ? t.oferta.disciplina.nome : '?';
            const turno = t.oferta.turno ? t.oferta.turno.nome : '?';
            infoOferta = `${disc} (${turno})`;
        }

        return `
           <tr>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="window.excluirTurma(${t.id})" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="window.editarTurma(${t.id})" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${t.id}</td>
                <td>${descricaoTipo}</td>
                <td>${infoOferta}</td>
            </tr>
        `;
    }).join("");
}
