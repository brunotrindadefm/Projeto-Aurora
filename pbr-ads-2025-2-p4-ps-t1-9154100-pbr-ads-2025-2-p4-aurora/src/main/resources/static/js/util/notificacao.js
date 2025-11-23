export function mostrarNotificacao(tipo, mensagem) {
    let background;

    if (tipo === 'sucesso') {
      background = "linear-gradient(to right, #00b09b, #96c93d)";
    } else if (tipo === 'erro') {
        background = "linear-gradient(to right, #ef473a, #cb2d3e)";
    } else {
        background = "#333";
    }

    Toastify({
        text: mensagem,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: background,
        },
        onClick: function () { }
    }).showToast();
}