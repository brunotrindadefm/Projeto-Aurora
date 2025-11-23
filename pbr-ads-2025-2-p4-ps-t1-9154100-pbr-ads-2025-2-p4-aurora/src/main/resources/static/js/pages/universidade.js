import universidadeApi from "../api/universidadeApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarUniversidades();
    document.getElementById("formUniversidade")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarUniversidade = editarUniversidade;
    window.excluirUniversidade = excluirUniversidade;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarUniversidade(id) {
    idEdicao = id;

    try {
        const u = await universidadeApi.getById(id);

        document.getElementById("nome").value = u.nome || "";
        document.getElementById("cnpj").value = u.cnpj || "";
        document.getElementById("sigla").value = u.sigla || "";
        document.getElementById("endereco").value = u.endereco || "";
        document.getElementById("telefone").value = u.telefone || "";
        document.getElementById("url").value = u.url || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");
        document.querySelector("h2").textContent = "Editar Universidade";

        document.getElementById("btnCancelar").classList.remove("d-none");

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da universidade.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const universidadeDTO = {
        id: idEdicao,
        cnpj: document.getElementById("cnpj").value,
        nome: document.getElementById("nome").value,
        sigla: document.getElementById("sigla").value,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        url: document.getElementById("url").value
    };

    try {
        if (idEdicao === null) {
            await universidadeApi.create(universidadeDTO);
            mostrarNotificacao("sucesso", "Universidade criada com sucesso!");
        } else {
            await universidadeApi.update(idEdicao, universidadeDTO);
            mostrarNotificacao("sucesso", "Universidade atualizada com sucesso!");
        }

        cancelarEdicao();
        carregarUniversidades();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar Universidade.");
    }
}

function cancelarEdicao() {
    document.getElementById("formUniversidade").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Universidade";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirUniversidade(id) {

    if (!confirm("Tem certeza que deseja excluir esta universidade?"))
        return;

    try {
        await universidadeApi.delete(id);

        mostrarNotificacao("sucesso", "Universidade excluída com sucesso!");

        carregarUniversidades();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarUniversidades() {
    const lista = await universidadeApi.getAll();
    const tbody = document.getElementById("listaUniversidades");

    tbody.innerHTML = lista.map(u => `
        <tr>
            <td>
                <button class="btn btn-danger btn-sm" onclick="excluirUniversidade('${u.id}')" title="Excluir">
                    Excluir
                </button>
            </td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="editarUniversidade('${u.id}')" title="Editar">
                    Editar
                </button>
            </td>
            <td>${u.id}</td>
            <td>${u.nome}</td>
            <td>${u.cnpj}</td>
            <td>${u.sigla}</td>
            <td>${u.endereco}</td>
            <td>${u.telefone}</td>
            <td>${u.url}</td>
        </tr>
    `).join("");
}
