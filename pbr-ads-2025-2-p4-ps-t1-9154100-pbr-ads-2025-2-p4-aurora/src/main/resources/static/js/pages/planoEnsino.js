import planoEnsinoApi from "../api/planoEnsinoApi.js";
import { mostrarNotificacao } from "../util/notificacao.js";
let idEdicao = null;
import { preencherSelect } from "../app.js";

export function init() {
    carregarPlanosEnsino();

    preencherSelect(
        'disciplina',
        '/api/plano-ensino/disciplinas-sem-plano',
        'id',
        'nome'
    );

    document.getElementById("formPlanoEnsino")
        ?.addEventListener("submit", salvarOuAtualizar);

    window.editarPlanoEnsino = editarPlanoEnsino;
    window.excluirPlanoEnsino = excluirPlanoEnsino;
    window.cancelarEdicao = cancelarEdicao;
}

async function editarPlanoEnsino(id) {
    idEdicao = id;

    try {
        const p = await planoEnsinoApi.getById(id);

        document.getElementById("ementa").value = p.ementa || "";
        document.getElementById("objetivo").value = p.objetivo || "";
        document.getElementById("conteudo").value = p.conteudo || "";

        document.getElementById("referencia_basica_1").value = p.referenciaBasica1 || "";
        document.getElementById("referencia_basica_2").value = p.referenciaBasica2 || "";
        document.getElementById("referencia_basica_3").value = p.referenciaBasica3 || "";
        document.getElementById("referencia_basica_4").value = p.referenciaBasica4 || "";
        document.getElementById("referencia_basica_5").value = p.referenciaBasica5 || "";

        for (let i = 1; i <= 10; i++) {
            const valor = p[`referenciaComplementar${i}`] || "";
            const input = document.getElementById(`referencia_complementar_${i}`);
            if (input) input.value = valor;
        }

        const selectDisc = document.getElementById("disciplina");
        const discId = p.disciplina?.id || p.disciplina;
        const discNome = p.disciplina?.nome || "Disciplina Atual";

        if (discId) {
            selectDisc.value = discId;

            if (selectDisc.value !== String(discId)) {
                const option = document.createElement("option");
                option.value = discId;
                option.text = discNome + " (Atual)";
                option.selected = true;
                selectDisc.appendChild(option);
            }
        }

        const btnSalvar = document.getElementById("btnSalvar");
        btnSalvar.textContent = "Atualizar";
        btnSalvar.classList.replace("btn-primary", "btn-warning");

        document.getElementById("btnCancelar").classList.remove("d-none");
        document.querySelector("h2").textContent = "Editar planoEnsino";

        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", "Erro ao carregar dados da planoEnsino.");
        cancelarEdicao();
    }
}

async function salvarOuAtualizar(e) {
    e.preventDefault();

    const disciplinaId = document.getElementById("disciplina").value;

    const planoEnsinoDTO = {
        id: idEdicao,
        ementa: document.getElementById("ementa").value,
        objetivo: document.getElementById("objetivo").value,
        conteudo: document.getElementById("conteudo").value,

        referenciaBasica1: document.getElementById("referencia_basica_1").value,
        referenciaBasica2: document.getElementById("referencia_basica_2").value,
        referenciaBasica3: document.getElementById("referencia_basica_3").value,
        referenciaBasica4: document.getElementById("referencia_basica_4").value,
        referenciaBasica5: document.getElementById("referencia_basica_5").value,

        referenciaComplementar1: document.getElementById("referencia_complementar_1").value,
        referenciaComplementar2: document.getElementById("referencia_complementar_2").value,
        referenciaComplementar3: document.getElementById("referencia_complementar_3").value,
        referenciaComplementar4: document.getElementById("referencia_complementar_4").value,
        referenciaComplementar5: document.getElementById("referencia_complementar_5").value,
        referenciaComplementar6: document.getElementById("referencia_complementar_6").value,
        referenciaComplementar7: document.getElementById("referencia_complementar_7").value,
        referenciaComplementar8: document.getElementById("referencia_complementar_8").value,
        referenciaComplementar9: document.getElementById("referencia_complementar_9").value,
        referenciaComplementar10: document.getElementById("referencia_complementar_10").value,

        disciplina: disciplinaId ? { id: disciplinaId } : null
    };

    try {
        if (idEdicao === null) {
            await planoEnsinoApi.create(planoEnsinoDTO);
            mostrarNotificacao("sucesso", "Plano de Ensino criado com sucesso!");
        } else {
            await planoEnsinoApi.update(idEdicao, planoEnsinoDTO);
            mostrarNotificacao("sucesso", "Plano de Ensino atualizado com sucesso!");
        }

        cancelarEdicao();
        carregarPlanosEnsino();

        preencherSelect(
            'disciplina',
            '/api/plano-ensino/disciplinas-sem-plano',
            'id',
            'nome'
        );

    } catch (erro) {
        console.error(erro);
        mostrarNotificacao("erro", erro.message || "Erro ao salvar Plano de Ensino.");
    }
}

function cancelarEdicao() {
    document.getElementById("formPlanoEnsino").reset();

    idEdicao = null;

    document.querySelector("h2").textContent = "Nova PlanoEnsino";

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.textContent = "Salvar";
    btnSalvar.classList.replace("btn-warning", "btn-primary");

    document.getElementById("btnCancelar").classList.add("d-none");
}

async function excluirPlanoEnsino(id) {

    if (!confirm("Tem certeza que deseja excluir este Plano de Ensino?"))
        return;

    try {
        await planoEnsinoApi.delete(id);

        mostrarNotificacao("sucesso", "Plano de Ensino excluído com sucesso!");

        carregarPlanosEnsino();

    } catch (error) {
        console.error(error);
        mostrarNotificacao("erro", error.message);
    }
}

async function carregarPlanosEnsino() {
    const lista = await planoEnsinoApi.getAll();
    const tbody = document.getElementById("listaPlanosEnsino");

    const ehAluno = sessionStorage.getItem("tipoAcesso") === "ALUNO";

    tbody.innerHTML = lista.map(p => {
        const nomeDisciplina = p.disciplina ? p.disciplina.nome : 'Sem Disciplina';

        return `
            <tr>
               ${!ehAluno ? `
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="excluirPlanoEnsino('${p.id}')" title="Excluir">
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="editarPlanoEnsino('${p.id}')" title="Editar">
                            Editar
                        </button>
                    </td>
                ` : ''}
                <td>${p.id}</td>
                <td>${nomeDisciplina}</td>
                <td>${p.ementa ? p.ementa.substring(0, 25) + '...' : ''}</td>
                <td>${p.objetivo ? p.objetivo.substring(0, 25) + '...' : ''}</td>
            </tr>
        `;
    }).join("");
}
