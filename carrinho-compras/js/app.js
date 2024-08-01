//Inicia a página com carrinho e total vazios
let totalCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = `R$ 0`;


//Função para adicionar ao carrinho
function adicionar(params) {

    //Declara e encontra os dados das opções de produto
    let item = document.getElementById('produto').value;
    let itemNome = item.split('-')[0];
    let itemValor = item.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = quantidade * itemValor;

    //Checa se quantidade é um valor válido
    if (quantidade < 1 || isNaN(quantidade)) {
        return;
    } else {
        //Adiciona o item e a quantidade informados à lista do carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}</span> ${itemNome} <span class="texto-azul">${subTotal}</span>
            </section>`;

        //Soma o subtotal do selecionado ao total do carrinho
        totalCarrinho += subTotal;
        let totalExibido = document.getElementById('valor-total');
        totalExibido.textContent = `R$ ${totalCarrinho}`;

        //Zera a quantidade
        document.getElementById('quantidade').value = 0;
    }
}

//Função que limpa o carrinho e todos seus valores
function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('calor-total').textContent = `R$ 0`;
}