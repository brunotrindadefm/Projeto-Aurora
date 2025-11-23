export function init() {
    const nome = sessionStorage.getItem("nomeUsuario");
    const tipo = sessionStorage.getItem("tipoAcesso");

    const elementoNome = document.getElementById("nome");
    const elementoCargo = document.getElementById("cargoUsuario");

    if (elementoNome)
        elementoNome.textContent = nome || "Usuário";

    if (elementoCargo)
        elementoCargo.textContent = tipo || "";
}