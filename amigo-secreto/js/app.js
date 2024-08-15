// Inicia a lista vazia
let arrayAmigos = [];
let listaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    // Checa se o nome está vazio ou repetido
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    } else if (arrayAmigos.includes(nomeAmigo)) {
        alert('Esse nome já foi adicionado.');
        return;
    }

    // Adiciona e lista o nome informado
    arrayAmigos.push(nomeAmigo);
    arrayAmigos.sort();
    listaAmigos.textContent = arrayAmigos.join(', ');
}

function sortear() {
    
    // Cria um array com os nomes adicionados em ordem aleatória
    let arraySorteados = [];
    for (let i = 0; i < arrayAmigos.length; i++) {
        let sorteado = arrayAmigos[Math.round(Math.random() * (arrayAmigos.length - 1))];

        // Loop para não repetir nome nem sortear a si mesmo
        while (arraySorteados.includes(sorteado) || sorteado == arrayAmigos[i]) {
            sorteado = arrayAmigos[Math.round(Math.random() * (arrayAmigos.length - 1))];
        }
        arraySorteados.push(sorteado);
    }

    // Cria a lista de sorteados combinando os dois array
    let listaSorteados = '';
    arrayAmigos.forEach((item,index) => {
        listaSorteados += `${item} -> ${arraySorteados[index]}\n`;
    });

    listaSorteio.innerText = listaSorteados;
}

function reiniciar() {
    arrayAmigos = [];
    listaAmigos.innerText = '';
    listaSorteio.innerText = '';
}