import regimeTrabalhoApi from "../api/regimeTrabalhoApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarRegimesTrabalho();

    document.getElementById("formRegimeTrabalho")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarRegimeTrabalho = editarRegimeTrabalho;
    window.excluirRegimeTrabalho = excluirRegimeTrabalho;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarRegimeTrabalho(id) {
    idEdicao = id;

    try {
        const rt = await regimeTrabalhoApi.getById(id);

        document.getElementById("nomeRegime").value = rt.nome || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Regime de Trabalho";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados de Regime de Trabalho.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const regimeTrabalhoDTO = {
        id: idEdicao,
        nome: document.getElementById("nomeRegime").value,
    };

    try {
        if (idEdicao === null) {
            await regimeTrabalhoApi.create(regimeTrabalhoDTO);
            mostrarNotificacao("sucesso", "Regime de Trabalho criado com sucesso!");
        } else {
            await regimeTrabalhoApi.update(idEdicao, regimeTrabalhoDTO);
            mostrarNotificacao("sucesso", "Regime de Trabalho atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarRegimesTrabalho();
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar turma.");
    }
}

function cancelarEdicao() {
    document.getElementById("formRegimeTrabalho").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Regime de Ttrabalho";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirRegimeTrabalho(id) {

    if (!confirm("Tem certeza que deseja excluir este Regime de Trabalho?"))
        return;

    try {
        await regimeTrabalhoApi.delete(id);

        mostrarNotificacao("sucesso", "Regime de Trabalho excluído com sucesso!");

        carregarRegimesTrabalho();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarRegimesTrabalho() {
    const lista = await regimeTrabalhoApi.getAll();
    const tbody = document.getElementById("listaRegimeTrabalho");

    tbody.innerHTML = lista.map(rt => {
        return `
            <tr>
               <td>
                    <button class="btn btn-danger btn-sm" onclick="window.excluirRegimeTrabalho(${rt.id})" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="window.editarRegimeTrabalho(${rt.id})" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${rt.id}</td>
                <td>${rt.nome}</td>
            </tr>
        `;
    }).join("");
}