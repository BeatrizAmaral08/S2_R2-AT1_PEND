const botao = document.getElementById("btnAdicionar");
botao.addEventListener("click", function(){ // adiciona um click no botão

let tarefa = document.getElementById("inputTarefa").value;
let li = document.createElement("li"); // cria um novo item na lista
li.className = "list-group-item d-flex justify-content-between";

let span = document.createElement("span"); // armazena o texto da tarefa digitada
span.textContent = tarefa;

let botaoRemover = document.createElement("button"); //cria o botão remover
botaoRemover.textContent = "Remover";
botaoRemover.className = "btn btn-danger btn-sm";
botaoRemover.addEventListener("click", function(){
li.remove();

});

li.appendChild(span);

li.appendChild(botaoRemover);

document.getElementById("listaTarefas").appendChild(li);

});