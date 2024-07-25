
//Sorteia os números quando clica no botão
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numInicial = parseInt(document.getElementById('de').value);
    let numFinal = parseInt(document.getElementById('ate').value);

    //Checa se os números do trecho estão em ordem válida
    if (numInicial>numFinal) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return; 
    }

    //Checa se há números únicos suficientes no trecho dado
    if (quantidade > (numFinal - numInicial + 1)) {
        alert (`Não há ${quantidade} números entre ${numInicial} e ${numFinal}`)
        return;
    }

    let sorteados = [];
    let numero;

    //Loop para gerar quantidade de números pedida
    for (let i = 0; i < quantidade; i++) {
        numero = gerardorDeNumAleatorio(numInicial,numFinal);

        //Loop para garantir que não haja repetição
        while (sorteados.includes(numero)) {
            numero = gerardorDeNumAleatorio(numInicial,numFinal);
        }

        sorteados.push(numero);
    }

    //Organiza crescentemente os números sorteados
    sorteados.sort(function(a, b){return a-b});

    //Separa o último item da lista para listar como "X, Y '1' Z"
    let sorteadosSeparados = sorteados.slice(0, -1);

    //Lista os resultados
    let resultado = document.getElementById('resultado');
    if(quantidade>1){
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteadosSeparados} e ${sorteados[sorteados.length-1]}</label></div>`;
    } else{
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label></div>`;
    }

    alterarStatusDoBotao();
}

function gerardorDeNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar (){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').value = 'Números sorteados:  nenhum até agora';
    alterarStatusDoBotao();
}

