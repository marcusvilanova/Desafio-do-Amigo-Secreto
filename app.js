//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputField = document.getElementById("amigo");
    let nomeAmigo = inputField.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");
    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    
    inputField.value = ""; // Limpar o campo de entrada
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpar a lista antes de adicionar
    
    for (let amigo of amigos) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}