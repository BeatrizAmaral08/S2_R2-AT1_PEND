const botao = document.getElementById("botao");
botao.addEventListener("click", function(){ // adiciona click no botão
const nome = document.getElementById("nome").value; // Pega o valor digitado no input "nome"
const mensagem = document.getElementById("mensagem"); 
mensagem.textContent = "Olá " + nome +"! Seja bem vindo(a)";  // Define o texto da mensagem com o nome digitado
});