let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.querySelector("#btnAdicionar");
let listaTarefas = document.querySelector("#listaTarefas");
let mensagem = document.querySelector("#mensagem");

btnAdicionar.addEventListener("click", () => { // Adiciona um clique no botão

let texto = inputTarefa.value; // Verifica se o campo está vazio
if(texto === ""){

    // Define o texto do item como a tarefa digitada
mensagem.innerText = "Tarefa vazia!";
mensagem.className = "text-danger fw-bold";

return;
}

let li = document.createElement("li");

li.innerText = texto;
li.className = "list-group-item";
listaTarefas.appendChild(li);
inputTarefa.value = "";
mensagem.innerText = "Tarefa adicionada!";
mensagem.className = "text-success fw-bold";
})