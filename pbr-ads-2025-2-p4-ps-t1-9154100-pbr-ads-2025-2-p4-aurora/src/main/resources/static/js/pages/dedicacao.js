import dedicacaoApi from "../api/dedicacaoApi.js";
import { preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarDedicacao();

    preencherSelect(
        'alocacao',
        '/api/alocacao',
        'id',
        'nome'
    );

    preencherSelect(
        'oferta',
        '/api/oferta',
        'id',
        'nome'
    );

    document.getElementById("formDedicacao")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarDedicacao = editarDedicacao;
    window.excluirDedicacao = excluirDedicacao;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarDedicacao(id) {
    idEdicao = id;
    try {
        const d = await dedicacaoApi.getById(id);

        document.getElementById("alocacao").value = d.alocacao?.id || d.alocacao || "";
        document.getElementById("oferta").value = d.oferta?.id || d.oferta || "";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Dedicacao";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da Dedicacao.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const alocacaoId = document.getElementById("alocacao").value;
    const ofertaId = document.getElementById("oferta").value;

    const dedicacaoDTO = {
        id: idEdicao,
        alocacao: alocacaoId ? { id: alocacaoId } : null,
        oferta: ofertaId ? { id: ofertaId } : null
    };

    try {
        if (idEdicao === null) {
            await dedicacaoApi.create(dedicacaoDTO);
            mostrarNotificacao("sucesso", "Dedicacao criado com sucesso!");
        } else {
            await dedicacaoApi.update(idEdicao, dedicacaoDTO);
            mostrarNotificacao("sucesso", "Dedicacao atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarDedicacao();
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar turma.");
    }
}

function cancelarEdicao() {
    document.getElementById("formDedicacao").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Dedicação";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirDedicacao(id) {

    if (!confirm("Tem certeza que deseja excluir este dedicação?"))
        return;

    try {
        await dedicacaoApi.delete(id);

        mostrarNotificacao("sucesso", "Dedicação excluída com sucesso!");

        carregarDedicacao();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarDedicacao() {
    const lista = await dedicacaoApi.getAll();
    const tbody = document.getElementById("listaDedicacao");

    tbody.innerHTML = lista.map(d => {
        const profNome = d.alocacao?.professor?.nome || 'N/A';
        const discNome = d.oferta?.disciplina?.nome || 'N/A';

        return `
            <tr>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="window.excluirDedicacao(${d.id})" title="Excluir">
                        Excluir
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="window.editarDedicacao(${d.id})" title="Editar">
                        Editar
                    </button>
                </td>
                <td>${d.id}</td>
                <td>${profNome}</td>
                <td>${discNome}</td>
            </tr>
        `;
    }).join("");
}