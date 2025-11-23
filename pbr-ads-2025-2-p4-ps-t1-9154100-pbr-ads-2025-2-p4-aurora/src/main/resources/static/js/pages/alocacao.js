import alocacaoApi from "../api/alocacaoApi.js";
import { preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarAlocacoes();

    preencherSelect(
        'professor',
        'http://localhost:8080/api/professor',
        'matricula',
        'nome'
    );

    preencherSelect(
        'turma',
        'http://localhost:8080/api/turma',
        'id',
        'nome'
    );

    document.getElementById("formAlocacao")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarAlocacao = editarAlocacao;
    window.excluirAlocacao = excluirAlocacao;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarAlocacao(id) {
    idEdicao = id;
    try {
        const a = await alocacaoApi.getById(id);

        document.getElementById("professor").value = a.professor?.matricula || a.professor || "";
        document.getElementById("turma").value = a.turma?.id || a.turma || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Alocação";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da Alocação.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const professorMatricula = document.getElementById("professor").value;
    const turmaId = document.getElementById("turma").value;

    const alocacaoDTO = {
        id: idEdicao,
        professor: professorMatricula ? { matricula: professorMatricula } : null,
        turma: turmaId ? { id: turmaId } : null
    };

    try {
        if (idEdicao === null) {
            await alocacaoApi.create(alocacaoDTO);
            mostrarNotificacao("sucesso", "Alocação criada com sucesso!");
        } else {
            await alocacaoApi.update(idEdicao, alocacaoDTO);
            mostrarNotificacao("sucesso", "Alocação atualizada com sucesso!");
        }

        cancelarEdicao();
        carregarAlocacoes();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar turma.");
    }
}

function cancelarEdicao() {
    document.getElementById("formAlocacao").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Alocação";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirAlocacao(id) {

    if (!confirm("Tem certeza que deseja excluir esta alocação?"))
        return;

    try {
        await alocacaoApi.delete(id);

        mostrarNotificacao("sucesso", "Alocação excluída com sucesso!");

        carregarAlocacoes();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarAlocacoes() {
    const lista = await alocacaoApi.getAll();
    const tbody = document.getElementById("listaAlocacoes");

    tbody.innerHTML = lista.map(a => {
        const nomeProfessor = a.professor ? a.professor.nome : 'Sem Professor';

        let infoTurma = 'Sem Turma';
        if (a.turma) {
            const tipo = a.turma.tipo ? a.turma.tipo.descricao : '';
            const disc = a.turma.oferta?.disciplina ? a.turma.oferta.disciplina.nome : '';
            infoTurma = `${tipo} - ${disc}`;
        }

        return `
            <tr>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="window.excluirAlocacao(${a.id})" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="window.editarAlocacao(${a.id})" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${a.id}</td>
                <td>${nomeProfessor}</td>
                <td>${infoTurma}</td>
            </tr>
        `;
    }).join("");
}

async function salvarAlocacao(e) {
    e.preventDefault();

    const professorMatricula = document.getElementById("professor").value;
    const turmaId = document.getElementById("turma").value;

    const alocacao = {
        professor: professorMatricula ? { matricula: professorMatricula } : null,
        turma: turmaId ? { id: turmaId } : null
    };

    try {
        await alocacaoApi.create(alocacao);
        mostrarNotificacao("sucesso", "Alocação criada!");

        document.getElementById("formAlocacao").reset();

    } catch (error) {
        console.error("Erro ao salvar alocacao:", error);
        mostrarNotificacao("erro", error.message);
    }

    carregarAlocacoes();
}
