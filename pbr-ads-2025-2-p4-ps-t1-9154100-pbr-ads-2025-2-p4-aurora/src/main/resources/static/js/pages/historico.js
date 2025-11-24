import historicoApi from "../api/historicoApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;
import { preencherSelect } from "../app.js";

export function init() {
    carregarHistoricos();

    preencherSelect(
        'aluno',
        '/api/aluno',
        'matricula',
        'nome'
    );

    preencherSelect(
        'disciplina',
        '/api/disciplina',
        'id',
        'nome'
    );

    document.getElementById("formHistorico")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarHistorico = editarHistorico;
    window.excluirHistorico = excluirHistorico;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarHistorico(id) {
    idEdicao = id;
    try {
        const h = await historicoApi.getById(id);

        document.getElementById("aluno").value = h.aluno?.matricula || h.aluno || "";
        document.getElementById("disciplina").value = h.disciplina?.id || h.disciplina || "";
        document.getElementById("nota").value = h.nota || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Histórico Acadêmico";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados do Histórico Acadêmico.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const alunoMatricula = document.getElementById("aluno").value;
    const disciplinaId = document.getElementById("disciplina").value;
    const notaValor = document.getElementById("nota").value;

    const historicoDTO = {
        id: idEdicao,
        aluno: alunoMatricula ? { matricula: alunoMatricula } : null,
        disciplina: disciplinaId ? { id: disciplinaId } : null,
        nota: notaValor ? parseFloat(notaValor) : null
    };

    try {
        if (idEdicao === null) {
            await historicoApi.create(historicoDTO);
            mostrarNotificacao("sucesso", "Histórico Acadêmico criado com sucesso!");
        } else {
            await historicoApi.update(idEdicao, historicoDTO);
            mostrarNotificacao("sucesso", "Histórico Acadêmico atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarHistoricos();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar Histórico Acadêmico.");
    }
}

function cancelarEdicao() {
    document.getElementById("formHistorico").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Histórico Acadêmico";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirHistorico(id) {

    if (!confirm("Tem certeza que deseja excluir este Historico Acadêmico?"))
        return;

    try {
        await historicoApi.delete(id);

        mostrarNotificacao("sucesso", "Historico Acadêmico excluído com sucesso!");

        carregarHistoricos();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarHistoricos() {
    const lista = await historicoApi.getAll();
    const tbody = document.getElementById("listaHistoricos");
    const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";

    tbody.innerHTML = lista.map(h => {
        const nomeAluno = h.aluno ? h.aluno.nome : 'Sem Aluno';
        const nomeDisciplina = h.disciplina ? h.disciplina.nome : 'Sem Disciplina';

        return `
            <tr>
                ${!ehAluno ? `
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="excluirHistorico('${h.id}')" title="Excluir">
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editarHistorico('${h.id}')" title="Editar">
                            Editar
                        </button>
                    </td>
                ` : ''}
                <td>${h.id}</td>
                <td>${nomeAluno}</td>
                <td>${nomeDisciplina}</td>
                <td>${h.nota || '-'}</td>
            </tr>
        `;
    }).join("");
}

async function salvarHistorico(e) {
    e.preventDefault();

    const alunoMatricula = document.getElementById("aluno").value;
    const disciplinaId = document.getElementById("disciplina").value;
    const notaValor = document.getElementById("nota").value;

    const historico = {
        aluno: alunoMatricula ? { matricula: alunoMatricula } : null,
        disciplina: disciplinaId ? { id: disciplinaId } : null,
        nota: notaValor ? parseFloat(notaValor) : null
    };

    try {
        await historicoApi.create(historico);
        mostrarNotificacao("sucesso", "Histórico criado!");
        document.getElementById("formHistorico").reset();

    } catch (error) {
        console.error("Erro ao salvar historico:", error);
        mostrarNotificacao("error", error.message);

    }

    carregarHistoricos();
}
