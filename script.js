const botao = document.getElementById("btnAdicionar");
botao.addEventListener("click", function(){
    let texto= document.getElementById("inputItem").value;
    let li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("lista").appendChild(li);
    
})