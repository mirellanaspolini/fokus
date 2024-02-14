const html = document.querySelector("html");
const img = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

// botoes
const botoes = document.querySelectorAll("app__card-button");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");

btnFoco.addEventListener("click", () => {
    mudarContexto("foco");
    btnFoco.classList.add("active");
});
btnCurto.addEventListener("click", () => {
    mudarContexto("descanso-curto");
    btnCurto.classList.add("active");
});
btnLongo.addEventListener("click", () => {
    mudarContexto("descanso-longo");
    btnLongo.classList.add("active");
});

function mudarContexto(contexto) {
    // botoes.forEach

    html.dataset.contexto = `${contexto}`;
    img.src = `/imagens/${contexto}.png`;

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade, <br> <strong class="app__title-strong">mergulhe no que importa.<strong/>`;
            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!<strong/>`;

            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <br> <strong class="app__title-strong">Faça uma pausa longa.<strong/>`;

            break;

        default:
            break;
    }
}
