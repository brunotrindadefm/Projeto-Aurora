import categoriaApi from "../api/categoriaApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarCategorias();

    document.getElementById("formCategoria")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarCategoria = editarCategoria;
    window.excluirCategoria = excluirCategoria;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarCategoria(id) {
    idEdicao = id;

    try {
        const t = await categoriaApi.getById(id);

        document.getElementById("nomeCategoria").value = t.nome || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Categoria";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da Categoria.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const categoriaDTO = {
        id: idEdicao,
        nome: document.getElementById("nomeCategoria").value
    };

    try {
        if (idEdicao === null) {
            await categoriaApi.create(categoriaDTO);
            mostrarNotificacao("sucesso", "Categoria criada com sucesso!");
        } else {
            await categoriaApi.update(idEdicao, categoriaDTO);
            mostrarNotificacao("sucesso", "Categoria atualizada com sucesso!");
        }

        cancelarEdicao();
        carregarCategorias();
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar categoria.");
    }
}

function cancelarEdicao() {
    document.getElementById("formCategoria").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Categoria";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirCategoria(id) {

    if (!confirm("Tem certeza que deseja excluir esta categoria?"))
        return;

    try {
        await categoriaApi.delete(id);

        mostrarNotificacao("sucesso", "Categoria excluída com sucesso!");

        carregarCategorias();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarCategorias() {
    const lista = await categoriaApi.getAll();
    const tbody = document.getElementById("listaCategorias");

    tbody.innerHTML = lista.map(rt => {
        return `
            <tr>
               <td>
                    <button class="btn btn-danger btn-sm" onclick="window.excluirCategoria(${rt.id})" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="window.editarCategoria(${rt.id})" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${rt.id}</td>
                <td>${rt.nome}</td>
            </tr>
        `;
    }).join("");
}