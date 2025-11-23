import alunoApi from "../api/alunoApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
import { esconderCamposAluno } from "../app.js";
let idEdicao = null;

export function init() {
    esconderCamposAluno()

    carregarAlunos();

    document.getElementById("formAluno")
        ?.addEventListener("submit", salvarOuAtualizar);
    window.editarAluno = editarAluno;
    window.excluirAluno = excluirAluno;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarAluno(id) {
    idEdicao = id;

    try {
        const a = await alunoApi.getById(id);

        document.getElementById("matricula").value = a.matricula || "";
        document.getElementById("nome").value = a.nome || "";

        document.getElementById("cpf").value = a.cpf || "";

        document.getElementById("identidade").value = a.identidade || "";
        document.getElementById("dataNascimento").value = a.dataNascimento || "";
        document.getElementById("nacionalidade").value = a.nacionalidade || "";
        document.getElementById("naturalidade").value = a.naturalidade || "";

        document.getElementById("sexo").value = a.sexo || "";
        document.getElementById("reservista").value = a.reservista || "";

        document.getElementById("endereco").value = a.endereco || "";
        document.getElementById("telefone").value = a.telefone || "";
        document.getElementById("email").value = a.email || "";

        document.getElementById("matricula").setAttribute("readonly", true);

        document.querySelector("h2").textContent = "Editar Aluno";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados do Aluno.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const valorSexo = document.getElementById("sexo").value;
    const valorReservista = document.getElementById("reservista").value;
    const dataNasc = document.getElementById("dataNascimento").value;

    const alunoDTO = {
        matricula: idEdicao || document.getElementById("matricula").value,
        cpf: document.getElementById("cpf").value,
        identidade: document.getElementById("identidade").value,
        nome: document.getElementById("nome").value,
        dataNascimento: dataNasc ? dataNasc : null,
        nacionalidade: document.getElementById("nacionalidade").value,
        naturalidade: document.getElementById("naturalidade").value,
        sexo: valorSexo ? valorSexo : null,
        reservista: valorReservista ? valorReservista : null,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value
    };

    try {
        if (idEdicao === null) {
            await alunoApi.create(alunoDTO);
            mostrarNotificacao("sucesso", "Aluno criado com sucesso!");
        } else {
            await alunoApi.update(idEdicao, alunoDTO);
            mostrarNotificacao("sucesso", "Aluno atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarAlunos();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar Aluno.");
    }
}

function cancelarEdicao() {
    document.getElementById("formAluno").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Aluno";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
    document.getElementById("matricula").removeAttribute("readonly");
}

async function excluirAluno(id) {

    if (!confirm("Tem certeza que deseja excluir este aluno?"))
        return;

    try {
        await alunoApi.delete(id);

        mostrarNotificacao("sucesso", "Aluno excluído com sucesso!");

        carregarAlunos();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarAlunos() {
    const lista = await alunoApi.getAll();
    const tbody = document.getElementById("listaAlunos");

    const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";

    tbody.innerHTML = lista.map(a => {
        return `
            <tr>
                ${!ehAluno ? `
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="excluirAluno('${a.matricula}')" title="Excluir">
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editarAluno('${a.matricula}')" title="Editar">
                            Editar
                        </button>
                    </td>
                ` : ''}
                <td>${a.matricula}</td>
                <td>${a.nome}</td>
                <td>${a.cpf}</td>
                <td>${a.email || ''}</td>
                <td>${a.telefone || ''}</td>
            </tr>
        `;
    }).join("");
}

async function salvarAluno(e) {
    e.preventDefault();

    const aluno = {
        matricula: document.getElementById("matricula").value,
        cpf: document.getElementById("cpf").value,
        identidade: document.getElementById("identidade").value,
        nome: document.getElementById("nome").value,
        dataNascimento: document.getElementById("dataNascimento").value || null,
        nacionalidade: document.getElementById("nacionalidade").value,
        naturalidade: document.getElementById("naturalidade").value,
        sexo: document.getElementById("sexo").value,
        reservista: document.getElementById("reservista").value,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
    };

    try {
        await alunoApi.create(aluno);
        mostrarNotificacao("sucesso", "Aluno criado!");

        document.getElementById("formAluno").reset();

    } catch (error) {
        console.error("Erro ao salvar aluno:", error);
        mostrarNotificacao("Erro", error.message)
    }

    carregarAlunos();
}

