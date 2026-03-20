const botao = document.getElementById("btnAdicionar");
botao.addEventListener("click", function(){ // adiciona click ao botão
    let texto= document.getElementById("inputItem").value;
    let li = document.createElement("li"); // cria um novo item na lista
    li.textContent = texto;
    document.getElementById("lista").appendChild(li);
    
})