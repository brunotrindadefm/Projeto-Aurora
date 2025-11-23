import unidadeApi from "../api/unidadeApi.js"; // Crie este arquivo se não existir
import { preencherSelect } from "../app.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;

export function init() {
    carregarUnidades();

    preencherSelect(
        'universidade',
        'http://localhost:8080/api/universidade',
        'id',
        'nome'
    );

    document.getElementById("formUnidade")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarUnidade = editarUnidade;
    window.excluirUnidade = excluirUnidade;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarUnidade(id) {
    idEdicao = id;

    try {
        const u = await unidadeApi.getById(id);

        document.getElementById("nome").value = u.nome || "";
        document.getElementById("sigla").value = u.sigla || "";
        document.getElementById("endereco").value = u.endereco || "";
        document.getElementById("telefone").value = u.telefone || "";
        document.getElementById("url").value = u.url || "";

        document.getElementById("universidade").value = u.universidade?.id || u.universidade || "";

        document.getElementById("tipo").value = u.principal ? "MATRIZ" : "FILIAL";

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar Unidade";

        window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da Unidade.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const universidadeId = document.getElementById("universidade").value;
    const tipoSelecionado = document.getElementById("tipo").value;

    const isPrincipal = tipoSelecionado === "MATRIZ";

    const unidadeDTO = {
        id: idEdicao,
        nome: document.getElementById("nome").value,
        sigla: document.getElementById("sigla").value,
        endereco: document.getElementById("endereco").value,
        telefone: document.getElementById("telefone").value,
        url: document.getElementById("url").value,

        principal: isPrincipal,

        universidade: universidadeId ? { id: universidadeId } : null
    };

    try {
        if (idEdicao === null) {
            await unidadeApi.create(unidadeDTO);
            mostrarNotificacao("sucesso", "Unidade criada com sucesso!");
        } else {
            await unidadeApi.update(idEdicao, unidadeDTO);
            mostrarNotificacao("sucesso", "Unidade atualizada com sucesso!");
        }

        cancelarEdicao();
        carregarUnidades();

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar unidade.");
    }
}

function cancelarEdicao() {
    document.getElementById("formUnidade").reset();
    idEdicao = null;

    document.querySelector("h2").textContent = "Nova Unidade (Campus)";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirUnidade(id) {
    if (!confirm("Tem certeza que deseja excluir esta unidade?"))
        return;

    try {
        await unidadeApi.delete(id);
        mostrarNotificacao("sucesso", "Unidade excluída com sucesso!");
        carregarUnidades();
    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarUnidades() {
    try {
        const lista = await unidadeApi.getAll();
        const tbody = document.getElementById("listaUnidades");

        const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";

        document.querySelectorAll(".coluna-acao").forEach(th =>
            th.style.display = ehAluno ? "none" : ""
        );

        tbody.innerHTML = lista.map(u => {
            const nomeUniversidade = u.universidade ? u.universidade.nome : 'N/A';

            const tipoBadge = u.principal
                ? `<span class="badge bg-success">Matriz</span>`
                : `<span class="badge bg-secondary">Filial</span>`;

            return `
                <tr>
                    ${!ehAluno ? `
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="window.excluirUnidade('${u.id}')">
                                Excluir
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="window.editarUnidade('${u.id}')">
                                Editar
                            </button>
                        </td>
                    ` : ''}
                    
                    <td>${u.id}</td>
                    <td>${u.nome}</td>
                    <td>${u.sigla}</td>
                    <td>${nomeUniversidade}</td>
                    <td>${tipoBadge}</td> 
                    <td>${u.telefone || '-'}</td>
                </tr>
            `;
        }).join("");
    } catch (error) {
        console.error("Erro ao listar unidades:", error);
    }
}