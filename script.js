const botao = document.getElementById("botao");
botao.addEventListener("click", function(){
const nome = document.getElementById("nome").value;
const mensagem = document.getElementById("mensagem");
mensagem.textContent = "Olá " + nome +"! Seja bem vindo(a)";
});