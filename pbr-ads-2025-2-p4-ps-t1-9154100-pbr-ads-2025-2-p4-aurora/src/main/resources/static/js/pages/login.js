import { mostrarNotificacao } from "../util/notificacao.js";

async function loginUsuario(e) {
    e.preventDefault();

    const form = {
        matricula: document.querySelector("#matricula").value,
        senha: document.querySelector("#senha").value,
        tipoAcesso: document.querySelector("#tipoAcesso").value
    };

    try {
        const resp = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        const data = await resp.json();

        if (!resp.ok) {
            mostrarNotificacao("erro", data.mensagem || "Erro ao fazer login!");
            return;
        }

        mostrarNotificacao("sucesso", "Login realizado!");

        sessionStorage.setItem("tipoAcesso", data.tipoAcesso);
        sessionStorage.setItem("nomeUsuario", data.nome);

        window.location.href = "app.html#/home";
    } catch (e) {
        mostrarNotificacao("erro", "Servidor não respondeu.");
        console.error(e);
    }
}

document.getElementById("formLogin")
    .addEventListener("submit", loginUsuario);
