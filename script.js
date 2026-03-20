const botao = document.getElementById("btnAdicionar");

botao.addEventListener("click", function(){

let tarefa = document.getElementById("inputTarefa").value;

let li = document.createElement("li");

li.className = "list-group-item d-flex justify-content-between align-items-center";

 // Cria uma div para agrupar checkbox + texto
let divEsquerda = document.createElement("div");

 // Cria o checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "form-check-input me-2";

 // Cria o texto da tarefa
let span = document.createElement("span");
span.textContent = tarefa;

checkbox.addEventListener("change", function(){ //marcar/desmarcar o checkbox

    // Se estiver marcado, risca o texto, ou se desmarcar, remove o risco
if(checkbox.checked){
span.style.textDecoration = "line-through";
}else{
span.style.textDecoration = "none";
}

});

divEsquerda.appendChild(checkbox);
divEsquerda.appendChild(span);

// botão remover
let botaoRemover = document.createElement("button");
botaoRemover.textContent = "Remover";
botaoRemover.className = "btn btn-danger btn-sm";

botaoRemover.addEventListener("click", function(){

li.remove();

});

 // Adiciona botão remover
li.appendChild(divEsquerda);
li.appendChild(botaoRemover);

document.getElementById("listaTarefas").appendChild(li);

});