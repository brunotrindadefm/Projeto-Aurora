import ofertaApi from "../api/ofertaApi.js";
import { preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarOfertas();

    preencherSelect(
        'unidade',
        'http://localhost:8080/api/unidade',
        'id',
        'nome'
    );

    preencherSelect(
        'disciplina',
        'http://localhost:8080/api/disciplina',
        'id',
        'nome'
    );

    preencherSelect(
        'professor',
        'http://localhost:8080/api/professor',
        'matricula',
        'nome'
    );

    preencherSelect(
        'turno',
        'http://localhost:8080/api/turno',
        'id',
        'nome'
    );

    document.getElementById("formOferta")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarOferta = editarOferta;
    window.excluirOferta = excluirOferta;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarOferta(id) {
    idEdicao = id;
    try {
       const o = await ofertaApi.getById(id);

        document.getElementById("unidade").value = o.unidade?.id || o.unidade || "";
        document.getElementById("disciplina").value = o.disciplina?.id || o.disciplina || "";
        document.getElementById("turno").value = o.turno?.id || o.turno || "";
        document.getElementById("professor").value = o.professor?.matricula || o.professor || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Oferta";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da Oferta.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const unidadeId = document.getElementById("unidade").value;
    const disciplinaId = document.getElementById("disciplina").value;
    const professorId = document.getElementById("professor").value;
    const turnoId = document.getElementById("turno").value;

    const ofertaDTO = {
        id: idEdicao,
        unidade: unidadeId ? { id: unidadeId } : null,
        disciplina: disciplinaId ? { id: disciplinaId } : null,
        professor: professorId ? { matricula: professorId } : null,
        turno: turnoId ? { id: turnoId } : null
    };

    try {
        if (idEdicao === null) {
            await ofertaApi.create(ofertaDTO);
            mostrarNotificacao("sucesso", "Oferta criada com sucesso!");
        } else {
            await ofertaApi.update(idEdicao, ofertaDTO);
            mostrarNotificacao("sucesso", "Oferta atualizada com sucesso!");
        }

        cancelarEdicao();
        carregarOfertas();
        
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar turma.");
    }
}

function cancelarEdicao() {
    document.getElementById("formOferta").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Oferta";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirOferta(id) {

    if (!confirm("Tem certeza que deseja excluir esta oferta?"))
        return;

    try {
        await ofertaApi.delete(id);

        mostrarNotificacao("sucesso", "Oferta excluída com sucesso!");

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarOfertas() {
    const lista = await ofertaApi.getAll();
    const tbody = document.getElementById("listaOfertas");

    tbody.innerHTML = lista.map(o => {
        const nomeUnidade = o.unidade ? o.unidade.nome : 'N/A';
        const nomeDisciplina = o.disciplina ? o.disciplina.nome : 'N/A';
        const nomeProfessor = o.professor ? o.professor.nome : 'Sem Professor';
        const nomeTurno = o.turno ? o.turno.nome : 'N/A';

        return `
            <tr>
                 <td>
                    <button class="btn btn-danger btn-sm" onclick="window.excluirOferta(${o.id})" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="window.editarOferta(${o.id})" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${o.id}</td>
                <td>${nomeUnidade}</td>
                <td>${nomeDisciplina}</td>
                <td>${nomeProfessor}</td>
                <td>${nomeTurno}</td>
            </tr>
        `;
    }).join("");
}