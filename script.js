const html = document.querySelector("html");
const img = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const btnTocarMusica = document.querySelector("#alternar-musica");
const btnComecar = document.querySelector("#start-pause");
const temporizador = document.querySelector("#timer");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
musica.loop = true;
const audioPlay = new Audio("/sons/play.wav");
const audioPause = new Audio("/sons/pause.mp3");
const contagRegressiva5 = new Audio("/sons/beep.mp3");

let tempoDecorridoSeg = 1500;
let intervaloID = null;

// botoes
const botoes = document.querySelectorAll(".app__card-button");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");

btnFoco.addEventListener("click", () => {
    tempoDecorridoSeg = 1500;
    mudarContexto("foco");
    btnFoco.classList.add("active");
});
btnCurto.addEventListener("click", () => {
    tempoDecorridoSeg = 300;
    mudarContexto("descanso-curto");
    btnCurto.classList.add("active");
});
btnLongo.addEventListener("click", () => {
    tempoDecorridoSeg = 900;
    mudarContexto("descanso-longo");
    btnLongo.classList.add("active");
});

function mudarContexto(contexto) {
    mostrarTempo();
    botoes.forEach((btn) => btn.classList.remove("active"));

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

btnTocarMusica.addEventListener("change", () =>
    musica.paused ? musica.play() : musica.pause()
);

const contagemRegressiva = () => {
    if (tempoDecorridoSeg <= 0) {
        contagRegressiva5.play();
        zerar();
        return;
    }
    tempoDecorridoSeg -= 1;
    mostrarTempo();
};

btnComecar.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloID) {
        zerar();
        return;
    }
    audioPlay.play();
    intervaloID = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    audioPause.play();
    clearInterval(intervaloID);
    intervaloID = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoSeg * 1000);
    const tempoFormatado = tempo.toLocaleTimeString("pt-br", {
        minute: "2-digit",
        second: "2-digit",
    });
    temporizador.innerHTML = tempoFormatado;
}

mostrarTempo();
