const btnAddTarefa = document.querySelector(".app__button--add-task");
const btnCancelar = document.querySelector(".app__form-footer__button--cancel");
const formAddTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const listaTarefas = document.querySelector(".app__section-task-list");

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function criarElementoTarefa(tarefa) {
    const li = document.createElement("li");
    li.classList.add("app__section-task-list-item");

    const svg = document.createElement("svg");
    svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path></svg>`;

    const p = document.createElement("p");
    p.textContent = tarefa.descricao;
    p.classList.add("app__section-task-list-item-description");

    const button = document.createElement("button");
    button.classList.add("app_button-edit");

    const img = document.createElement("img");
    img.setAttribute("src", "/imagens/edit.png");

    button.appendChild(img);

    li.appendChild(svg);
    li.appendChild(p);
    li.appendChild(button);

    return li;
}

btnAddTarefa.addEventListener("click", () => {
    formAddTarefa.classList.toggle("hidden");
});

formAddTarefa.addEventListener("submit", (e) => {
    e.preventDefault();
    const tarefa = {
        descricao: textArea.value,
    };
    tarefas.push(tarefa);
    const elementoTarefa = criarElementoTarefa(tarefa);
    listaTarefas.append(elementoTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    textArea.value = "";
});

tarefas.forEach((tarefa) => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    listaTarefas.append(elementoTarefa);
});

function cancelar() {
    textArea.value = "";
    formAddTarefa.classList.add("hidden");
}

btnCancelar.addEventListener("click", cancelar);
