import cursoApi from "../api/cursoApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
import { preencherSelect } from "../app.js";
let idEdicao = null;

export function init() {
    carregarCursos();

    preencherSelect(
        'departamento',
        '/api/departamento',
        'id',
        'nome'
    );

    document.getElementById("formCursos")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarCurso = editarCurso;
    window.excluirCurso = excluirCurso;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarCurso(id) {
    idEdicao = id;

    try {
        const c = await cursoApi.getById(id);

        document.getElementById("nome").value = c.nome || "";
        document.getElementById("sigla").value = c.sigla || "";
        document.getElementById("telefoneContato").value = c.telefoneContato || "";
        document.getElementById("urlSite").value = c.urlSite || "";
        document.getElementById("coordenador").value = c.coordenador || "";
        document.getElementById("descricao").value = c.descricao || "";

        const selectDepto = document.getElementById("departamento");
        if (selectDepto)
            selectDepto.value = c.departamento?.id || c.departamento || "";

        document.querySelector("h2").textContent = "Editar Curso";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados do curso.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const departamentoId = document.getElementById("departamento").value;

    const cursoDTO = {
        id: idEdicao,
        nome: document.getElementById("nome").value,
        sigla: document.getElementById("sigla").value,
        descricao: document.getElementById("descricao").value,
        coordenador: document.getElementById("coordenador").value,
        telefoneContato: document.getElementById("telefoneContato").value,
        urlSite: document.getElementById("urlSite").value,
        departamento: departamentoId ? { id: departamentoId } : null
    };

    try {
        if (idEdicao === null) {
            await cursoApi.create(cursoDTO);
            mostrarNotificacao("sucesso", "Curso criado com sucesso!");
        } else {
            await cursoApi.update(idEdicao, cursoDTO);
            mostrarNotificacao("sucesso", "Curso atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarCursos();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar curso.");
    }
}

function cancelarEdicao() {
    document.getElementById("formCursos").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Curso";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirCurso(id) {

    if (!confirm("Tem certeza que deseja excluir este curso?"))
        return;

    try {
        await cursoApi.delete(id);

        mostrarNotificacao("sucesso", "Curso excluído com sucesso!");

        carregarCursos();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarCursos() {
    const lista = await cursoApi.getAll();
    const tbody = document.getElementById("listaCursos");

    const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";

    tbody.innerHTML = lista.map(c => {
        const nomeDepartamento = c.departamento ? c.departamento.nome : 'Sem Depto.';
        return `
          <tr>
               ${!ehAluno ? `
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="excluirCurso('${c.id}')" title="Excluir">
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editarCurso('${c.id}')" title="Editar">
                            Editar
                        </button>
                    </td>
                ` : ''}
                <td>${c.id}</td>
                <td>${c.nome}</td>
                <td>${c.sigla || ''}</td>
                <td>${c.coordenador || ''}</td>
                <td>${nomeDepartamento}</td>
                <td>${c.telefoneContato || ''}</td>
            </tr>
        `;
    }).join("");
}