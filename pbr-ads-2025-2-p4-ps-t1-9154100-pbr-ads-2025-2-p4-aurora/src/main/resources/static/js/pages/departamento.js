import departamentoApi from "../api/departamentoApi.js";
import { preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarDepartamentos();

    preencherSelect(
        'chefe',
        'http://localhost:8080/api/professor/disponivel-chefia',
        'matricula',
        'nome'
    );

    document.getElementById("formDepartamento")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarDepartamento = editarDepartamento;
    window.excluirDepartamento = excluirDepartamento;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarDepartamento(id) {
    idEdicao = id;

    try {
        const d = await departamentoApi.getById(id);

        document.getElementById("nome").value = d.nome || "";
        document.getElementById("sigla").value = d.sigla || "";
        document.getElementById("telefoneContato").value = d.telefoneContato || "";
        document.getElementById("urlSite").value = d.urlSite || "";

        const selectChefe = document.getElementById("chefe");
        const chefeMatricula = d.chefe?.matricula || d.chefe;
        const chefeNome = d.chefe?.nome || "Chefe Atual";

        if (chefeMatricula) {
            selectChefe.value = chefeMatricula;

            if (selectChefe.value !== String(chefeMatricula)) {

                const option = document.createElement("option");
                option.value = chefeMatricula;
                option.text = chefeNome + " (Atual)";
                option.selected = true;

                selectChefe.appendChild(option);
            }
        } else {
            selectChefe.value = "";
        }

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Departamento";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados do departamento.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();
    const chefeId = document.getElementById("chefe").value;

    const departamentoDTO = {
        id: idEdicao,
        nome: document.getElementById("nome").value,
        sigla: document.getElementById("sigla").value,
        telefoneContato: document.getElementById("telefoneContato").value,
        urlSite: document.getElementById("urlSite").value,
        chefe: chefeId ? { matricula: chefeId } : null
    };

    try {
        if (idEdicao === null) {
            await departamentoApi.create(departamentoDTO);
            mostrarNotificacao("sucesso", "Departamento criado com sucesso!");
        } else {
            await departamentoApi.update(idEdicao, departamentoDTO);
            mostrarNotificacao("sucesso", "Departamento atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarDepartamentos();
        preencherSelect(
            'chefe',
            'http://localhost:8080/api/professor/disponivel-chefia',
            'matricula',
            'nome'
        );

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar turma.");
    }
}

function cancelarEdicao() {
    document.getElementById("formDepartamento").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Departamento";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirDepartamento(id) {

    if (!confirm("Tem certeza que deseja excluir este departamento?"))
        return;

    try {
        await departamentoApi.delete(id);

        mostrarNotificacao("sucesso", "Departamento excluído com sucesso!");

        carregarDepartamentos();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarDepartamentos() {
    const lista = await departamentoApi.getAll();
    const tbody = document.getElementById("listaDepartamentos");


    tbody.innerHTML = lista.map(d => {

        const nomeChefe = d.chefe ? d.chefe.nome : 'Sem chefe';

        return `
            <tr>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="excluirDepartamento('${d.id}')" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="editarDepartamento('${d.id}')" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${d.id}</td>
                <td>${d.nome}</td>
                <td>${d.sigla}</td>
                <td>${d.telefoneContato}</td>
                <td>${d.urlSite}</td>
                <td>${nomeChefe}</td>
            </tr>
        `;
    }).join("");
}