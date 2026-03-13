const botao = document.getElementById("btnAdicionar");
botao.addEventListener("click", function(){

let tarefa = document.getElementById("inputTarefa").value;
let li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between";

let span = document.createElement("span");
span.textContent = tarefa;

let botaoRemover = document.createElement("button");
botaoRemover.textContent = "Remover";
botaoRemover.className = "btn btn-danger btn-sm";
botaoRemover.addEventListener("click", function(){
li.remove();

});

li.appendChild(span);

li.appendChild(botaoRemover);

document.getElementById("listaTarefas").appendChild(li);

});