const botao = document.getElementById("botao");
botao.addEventListener("click", function(){ // adiciona click no botão
    let texto= document.getElementById("texto");
    texto.textContent = "texto alterado com javaScript" // Altera o conteúdo de texto do elemento
})