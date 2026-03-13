const botao = document.getElementById("btnAdicionar");
botao.addEventListener("click", function(){

let tarefa = document.getElementById("inputTarefa").value;
let li = document.createElement("li");
li.className = "list-group-item";

// checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "form-check-input me-2";

// texto
let span = document.createElement("span");
span.textContent = tarefa;

// botão remover
let botaoRemover = document.createElement("button");
botaoRemover.textContent = "Remover";
botaoRemover.className = "btn btn-danger btn-sm ms-3";

// riscar tarefa
checkbox.addEventListener("change", function(){

if(checkbox.checked){
span.style.textDecoration = "line-through";

}else{
span.style.textDecoration = "none";
}

});
// remover tarefa
botaoRemover.addEventListener("click", function(){
li.remove();

});
li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(botaoRemover);
document.getElementById("listaTarefas").appendChild(li);

});