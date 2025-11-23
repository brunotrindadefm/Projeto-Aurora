import professorApi from "../api/professorApi.js";
import { preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarProfessores();

    preencherSelect(
        'titulacao',
        'http://localhost:8080/api/titulacao',
        'id',
        'nome'
    );
    preencherSelect(
        'categoria',
        'http://localhost:8080/api/categoria',
        'id',
        'nome'
    );
    preencherSelect(
        'regime-trabalho',
        'http://localhost:8080/api/regime-trabalho',
        'id',
        'nome'
    );

    document.getElementById("formProfessor")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarProfessor = editarProfessor;
    window.excluirProfessor = excluirProfessor;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarProfessor(id) {
    idEdicao = id;

    try {
        const p = await professorApi.getById(id);

        document.getElementById("matricula").value = p.matricula || "";
        document.getElementById("nome").value = p.nome || "";
        document.getElementById("cpf").value = p.cpf || "";
        document.getElementById("identidade").value = p.identidade || "";
        document.getElementById("dataNascimento").value = p.dataNascimento || "";
        document.getElementById("nacionalidade").value = p.nacionalidade || "";
        document.getElementById("naturalidade").value = p.naturalidade || "";
        document.getElementById("sexo").value = p.sexo || "";
        document.getElementById("reservista").value = p.reservista || "";
        document.getElementById("endereco").value = p.endereco || "";
        document.getElementById("telefone").value = p.telefone || "";
        document.getElementById("email").value = p.email || "";

        document.getElementById("titulacao").value = p.titulacao?.id || p.titulacao || "";

        document.getElementById("categoria").value = p.categoria?.id || p.categoria || "";

        document.getElementById("regime-trabalho").value = p.regime?.id || p.regime || "";

        document.getElementById("matricula").setAttribute("readonly", true);

        document.querySelector("h2").textContent = "Editar Professor";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados do Professor.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const titulacaoId = document.getElementById("titulacao").value;
    const categoriaId = document.getElementById("categoria").value;
    const regimeId = document.getElementById("regime-trabalho").value;
    const valorSexo = document.getElementById("sexo").value;
    const valorReservista = document.getElementById("reservista").value;

    const professorDTO = {
        matricula: idEdicao || document.getElementById("matricula").value,
        cpf: document.getElementById("cpf").value,
        identidade: document.getElementById("identidade").value,
        nome: document.getElementById("nome").value,
        dataNascimento: document.getElementById("dataNascimento").value,
        nacionalidade: document.getElementById("nacionalidade").value,
        naturalidade: document.getElementById("naturalidade").value,
        sexo: valorSexo ? valorSexo : null,
        reservista: valorReservista ? valorReservista : null,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        titulacao: titulacaoId ? { id: titulacaoId } : null,
        categoria: categoriaId ? { id: categoriaId } : null,
        regime: regimeId ? { id: regimeId } : null
    };

    try {
        if (idEdicao === null) {
            await professorApi.create(professorDTO);
            mostrarNotificacao("sucesso", "Professor criado com sucesso!");
        } else {
            await professorApi.update(idEdicao, professorDTO);
            mostrarNotificacao("sucesso", "Professor atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarProfessores();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar Professor.");
    }
}

function cancelarEdicao() {
    document.getElementById("formProfessor").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Professor";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
    document.getElementById("matricula").removeAttribute("readonly");
}

async function excluirProfessor(id) {

    if (!confirm("Tem certeza que deseja excluir este Professor?"))
        return;

    try {
        await professorApi.delete(id);

        mostrarNotificacao("sucesso", "Professor excluído com sucesso!");

        carregarProfessores();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarProfessores() {
    const lista = await professorApi.getAll();
    const tbody = document.getElementById("listaProfessores");
    tbody.innerHTML = lista.map(p => {

        const nomeTitulacao = p.titulacao ? p.titulacao.nome : 'Sem Titulação';

        return `
                <td>
                    <button class="btn btn-danger btn-sm" onclick="excluirProfessor('${p.matricula}')" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="editarProfessor('${p.matricula}')" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${p.matricula}</td>
                <td>${p.nome}</td>
                <td>${p.cpf}</td>
                <td>${p.email || ''}</td>
                <td>${nomeTitulacao}</td>
            </tr>
        `;
    }).join("");
}