function adicionar(params) {
    let itemTexto = document.getElementById('produto').value; //Encontra texto que descreve item e preço
    let preco = parseInt(itemTexto.substring((itemTexto.search('-')+4))); //Separa o valor do preço
    alert(preco);
}

function limpar(){

}