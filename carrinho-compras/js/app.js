let totalCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('calor-total').textContent = `R$ 0`;

function adicionar(params) {
    
    let item = document.getElementById('produto').value; 
    let itemNome = item.split('-')[0];
    let itemValor = item.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value; 
    let subTotal = quantidade * itemValor;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${itemNome} <span class="texto-azul">${subTotal}</span>
        </section>`;

    totalCarrinho += subTotal;
    let totalExibido = document.getElementById('valor-total');
    totalExibido.textContent = `R$ ${totalCarrinho}`;

    document.getElementById('quantidade').value = 0;

    // if (quantidade < 1 || isNaN(quantidade)) { //Checa se quantidade é valida
    //     return;
    // } else {
    // }



}

function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('calor-total').textContent = `R$ 0`;
}