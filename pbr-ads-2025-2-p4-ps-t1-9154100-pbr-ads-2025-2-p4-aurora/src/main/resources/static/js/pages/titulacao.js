import titulacaoApi from "../api/titulacaoApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarTitulacao();

    document.getElementById("formTitulacao")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarTitulacao = editarTitulacao;
    window.excluirTitulacao = excluirTitulacao;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarTitulacao(id) {
    idEdicao = id;

    try {
        const t = await titulacaoApi.getById(id);

        document.getElementById("nomeTitulacao").value = t.nome || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Titulacao";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados do Titulacao.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const titulacaoDTO = {
        id: idEdicao,
        nome: document.getElementById("nomeTitulacao").value,
    };

    try {
        if (idEdicao === null) {
            await titulacaoApi.create(titulacaoDTO);
            mostrarNotificacao("sucesso", "Titulacao criado com sucesso!");
        } else {
            await titulacaoApi.update(idEdicao, titulacaoDTO);
            mostrarNotificacao("sucesso", "Titulacao atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarTitulacao();
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar titulação.");
    }
}

function cancelarEdicao() {
    document.getElementById("formTitulacao").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Titulação";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirTitulacao(id) {

    if (!confirm("Tem certeza que deseja excluir esta titulação?"))
        return;

    try {
        await titulacaoApi.delete(id);

        mostrarNotificacao("sucesso", "Titulação excluída com sucesso!");

        carregarTitulacao();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarTitulacao() {
    const lista = await titulacaoApi.getAll();
    const tbody = document.getElementById("listaTitulacao");
    tbody.innerHTML = lista.map(t => {

        return `
          <tr>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="excluirTitulacao('${t.id}')" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="editarTitulacao('${t.id}')" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${t.id}</td>
                <td>${t.nome}</td>
            </tr>
        `;
    }).join("");
}