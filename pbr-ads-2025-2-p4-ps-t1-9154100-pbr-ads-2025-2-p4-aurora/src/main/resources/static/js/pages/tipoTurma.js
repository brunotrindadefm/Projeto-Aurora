import tipoTurmaApi from "../api/tipoTurmaApi.js"; // Crie este arquivo (veja abaixo)
import { mostrarNotificacao } from "../util/notificacao.js";

let idEdicao = null;

export function init() {
    carregarTipos();

    document.getElementById("formTipoTurma")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarTipo = editarTipo;
    window.excluirTipo = excluirTipo;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarTipo(id) {
    idEdicao = id;

    try {
        const t = await tipoTurmaApi.getById(id);

        document.getElementById("descricao").value = t.descricao || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Tipo de Turma";

        window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const tipoDTO = {
        id: idEdicao,
        descricao: document.getElementById("descricao").value
    };

    try {
        if (idEdicao === null) {
            await tipoTurmaApi.create(tipoDTO);
            mostrarNotificacao("sucesso", "Tipo criado com sucesso!");
        } else {
            await tipoTurmaApi.update(idEdicao, tipoDTO);
            mostrarNotificacao("sucesso", "Tipo atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarTipos();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar.");
    }
}

function cancelarEdicao() {
    document.getElementById("formTipoTurma").reset();
    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Tipo de Turma";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirTipo(id) {
    if (!confirm("Tem certeza que deseja excluir este tipo?"))
        return;

    try {
        await tipoTurmaApi.delete(id);
        mostrarNotificacao("sucesso", "Tipo excluído com sucesso!");
        carregarTipos();
    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarTipos() {
    try {
        const lista = await tipoTurmaApi.getAll();
        const tbody = document.getElementById("listaTipos");

        const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";
        document.querySelectorAll(".coluna-acao").forEach(th => th.style.display = ehAluno ? "none" : "");

        tbody.innerHTML = lista.map(t => `
            <tr>
                ${!ehAluno ? `
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="window.excluirTipo('${t.id}')">
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="window.editarTipo('${t.id}')">
                            Editar
                        </button>
                    </td>
                ` : ''}
                <td>${t.id}</td>
                <td>${t.descricao}</td>
            </tr>
        `).join("");
    } catch (error) {
        console.error("Erro ao listar tipos:", error);
    }
}