import { renderHome } from "./app.js";

export async function navigate() {
    let route = location.hash.replace("#/", "");

    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        if (route === "login" || route === "cadastro") {
            sidebar.style.display = "none";
            document.body.classList.add("login-mode");
        } else {
            sidebar.style.display = "block";
            document.body.classList.remove("login-mode");
        }
    }

    const pageHtml = await fetch(`./${route}.html`)
        .then(res => res.text())
        .catch(err => {
            document.getElementById("app").innerHTML = "<h2>Página não encontrada</h2>";
            return;
        });

    document.getElementById("app").innerHTML = pageHtml;

    import(`./pages/${route}.js`)
        .then(module => module.init && module.init())
        .catch(() => console.warn(`Página ${route} não possui JS`));

    if(route == 'home')
        renderHome()
}

export function startRouter() {
    window.addEventListener("hashchange", navigate);
    navigate();
}
