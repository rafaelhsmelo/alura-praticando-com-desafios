// Inicia a lista vazia
let listaAmigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    
    // Checa se o nome está vazio ou repetido
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    } else if (listaAmigos.includes(nomeAmigo)) {
        alert('Esse nome já foi adicionado.');
        return;
    }

    listaAmigos.push(nomeAmigo);
}

function sortear(){ 
    
}

function reiniciar(){

}