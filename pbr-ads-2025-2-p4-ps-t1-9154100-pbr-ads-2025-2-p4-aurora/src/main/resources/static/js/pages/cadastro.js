import { mostrarNotificacao } from "../util/notificacao.js";

async function cadastrarUsuario(e) {
    e.preventDefault();

    const formData = {
        matricula: document.querySelector("#matricula").value,
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value,
        confirmarSenha: document.querySelector("#confirmarSenha").value,
        tipoAcesso: document.querySelector("#tipoAcesso").value
    };

    try {
        const resp = await fetch("http://localhost:8080/api/auth/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await resp.json();

        if (!resp.ok) {
            mostrarNotificacao("erro", data.mensagem || "Erro ao fazer cadastro!");
            return;
        }

        mostrarNotificacao("sucesso", "Cadastro realizado com sucesso!");
        document.getElementById("formCadastro").reset();

    } catch (erro) {
        mostrarNotificacao("erro", erro.message);
        console.error(erro);
    }
}

document.getElementById("formCadastro").addEventListener("submit", cadastrarUsuario);