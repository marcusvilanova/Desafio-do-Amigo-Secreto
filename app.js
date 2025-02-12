//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function addAmigos () {
    let inputField = document.getElementById("amigoInput");
    let nomeAmigo = inputField.value.trim();

    if(nomeAmigo ==="") {
        alert("Por favor, insira um nome válido");
        return;
    }

    amigos.push(nomeAmigo);
    let friendItem = document.createElement("li");
    friendItem.textContent = friendName;
    friendsContainer.appendChild(friendItem);
    
    inputField.value = ""; // Limpar o campo de entrada
} 

