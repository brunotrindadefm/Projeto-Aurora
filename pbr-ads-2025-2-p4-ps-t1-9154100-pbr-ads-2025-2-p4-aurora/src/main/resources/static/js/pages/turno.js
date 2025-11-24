import turnoApi from "../api/turnoApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarTurno();

    document.getElementById("formTurno")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarTurno = editarTurno;
    window.excluirTurno = excluirTurno;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarTurno(id) {
    idEdicao = id;

    try {
        const t = await turnoApi.getById(id);

        document.getElementById("nome").value = t.nome || "";
        document.getElementById("horaInicio").value = t.horaInicio || "";
        document.getElementById("horaTermino").value =  t.horaTermino || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Turno";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados do Turno.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const turnoDTO = {
        id: idEdicao,
        nome: document.getElementById("nome").value,
        horaInicio: document.getElementById("horaInicio").value,
        horaTermino: document.getElementById("horaTermino").value,
    };

    try {
        if (idEdicao === null) {
            await turnoApi.create(turnoDTO);
            mostrarNotificacao("sucesso", "Turno criado com sucesso!");
        } else {
            await turnoApi.update(idEdicao, turnoDTO);
            mostrarNotificacao("sucesso", "Turno atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarTurno();
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar turno.");
    }
}

function cancelarEdicao() {
    document.getElementById("formTurno").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Novo Turno";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirTurno(id) {

    if (!confirm("Tem certeza que deseja excluir este turno?"))
        return;

    try {
        await turnoApi.delete(id);

        mostrarNotificacao("sucesso", "Turno excluído com sucesso!");

        carregarTurno();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarTurno() {
    const lista = await turnoApi.getAll();
    const tbody = document.getElementById("listaTurnos");
    const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";

    tbody.innerHTML = lista.map(t => {
        return `
            <tr>
                ${!ehAluno ? `
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="excluirTurno('${t.id}')" title="Excluir">
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editarTurno('${t.id}')" title="Editar">
                            Editar
                        </button>
                    </td>
                ` : ''}
                <td>${t.id}</td>
                <td>${t.nome}</td>
                <td>${t.horaInicio}</td>
                <td>${t.horaTermino}</td>
            </tr>
        `;
    }).join("");
}

async function salvarTurno(e) {
    e.preventDefault();

    const turno = {
        nome: document.getElementById("nome").value,
        horaInicio: document.getElementById("horaInicio").value,
        horaTermino: document.getElementById("horaTermino").value,
    };

    try {
        await turnoApi.create(turno);
        mostrarNotificacao("sucesso", "Turno criado!");

        document.getElementById("formTurno").reset();

        carregarTurno();

    } catch (error) {
        console.error("Erro ao salvar turno:", error);
        mostrarNotificacao("error", error.message);
    }
}