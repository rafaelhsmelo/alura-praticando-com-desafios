function adicionar(params) {
    let item = document.getElementById('produto').value; //Encontra texto que descreve item e preço
    let preco = parseInt(item.substring((item.search('-') + 4))); //Separa o valor do item
    let nomeItem = item.substring(0, (item.search('-') - 1)); //Separa o nome do item
    let quantidade = document.getElementById('quantidade').value; //Encontra a quantidade 
    let carrinho = [];
    let total = document.getElementById('valor-total').innerText;

    alert(total+'  '+carrinho);

    // if (quantidade < 1 || isNaN(quantidade)) { //Checa se quantidade é valida
    //     return;
    // } else {
    // }
}

function limpar() {

}