import disciplinaApi from "../api/disciplinaApi.js";
import { esconderCamposAluno, preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    esconderCamposAluno()
    carregarDisciplinas();

    preencherSelect(
        'curso',
        '/api/curso',
        'id',
        'nome'
    );

    document.getElementById("formDisciplina")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarDisciplina = editarDisciplina;
    window.excluirDisciplina = excluirDisciplina;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarDisciplina(id) {
    idEdicao = id;

    try {
        const d = await disciplinaApi.getById(id);

        document.getElementById("nome").value = d.nome || "";
        document.getElementById("sigla").value = d.sigla || "";
        document.getElementById("descricao").value = d.descricao || "";
        document.getElementById("cargaHoraria").value = d.cargaHoraria || "";
        document.getElementById("curso").value = d.curso?.id || d.curso || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Disciplina";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da Disciplina.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const cursoId = document.getElementById("curso").value;

    const disciplinaDTO = {
        id: idEdicao,
        nome: document.getElementById("nome").value,
        sigla: document.getElementById("sigla").value,
        descricao: document.getElementById("descricao").value,
        cargaHoraria: document.getElementById("cargaHoraria").value || null,
        curso: cursoId ? { id: cursoId } : null
    };

    try {
        if (idEdicao === null) {
            await disciplinaApi.create(disciplinaDTO);
            mostrarNotificacao("sucesso", "Disciplina criada com sucesso!");
        } else {
            await disciplinaApi.update(idEdicao, disciplinaDTO);
            mostrarNotificacao("sucesso", "Disciplina atualizada com sucesso!");
        }

        cancelarEdicao();
        carregarDisciplinas();
        preencherSelect(
            'curso',
            '/api/curso',
            'id',
            'nome'
        );

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar Disciplina.");
    }
}

function cancelarEdicao() {
    document.getElementById("formDisciplina").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Disciplina";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirDisciplina(id) {

    if (!confirm("Tem certeza que deseja excluir esta disciplina?"))
        return;

    try {
        await disciplinaApi.delete(id);

        mostrarNotificacao("sucesso", "Disciplina Acadêmicos excluído com sucesso!");

        carregarDisciplinas();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarDisciplinas() {
    const lista = await disciplinaApi.getAll();
    const tbody = document.getElementById("listaDisciplinas");
    const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";

    tbody.innerHTML = lista.map(d => {
        const nomeCurso = d.curso ? d.curso.nome : 'Sem Curso';

        return `
            <tr>
               ${!ehAluno ? `
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="excluirDisciplina('${d.id}')" title="Excluir">
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editarDisciplina('${d.id}')" title="Editar">
                            Editar
                        </button>
                    </td>
                ` : ''}
                <td>${d.id}</td>
                <td>${d.nome}</td>
                <td>${d.sigla || ''}</td>
                <td>${d.descricao || ''}</td>
                <td>${d.cargaHoraria || ''}</td>
                <td>${nomeCurso}</td>
            </tr>
        `;
    }).join("");
}

async function salvarDisciplina(e) {
    e.preventDefault();

    const cursoId = document.getElementById("curso").value;

    const disciplina = {
        nome: document.getElementById("nome").value,
        sigla: document.getElementById("sigla").value,
        descricao: document.getElementById("descricao").value,
        cargaHoraria: document.getElementById("cargaHoraria").value || null,
        curso: cursoId ? { id: cursoId } : null
    };

    try {
        await disciplinaApi.create(disciplina);
        mostrarNotificacao("sucesso", "Disciplina criada!");

        document.getElementById("formDisciplina").reset();

    } catch (error) {
        console.error("Erro ao salvar disciplina:", error);
        mostrarNotificacao("error", error.message);
    }

    carregarDisciplinas();
}
