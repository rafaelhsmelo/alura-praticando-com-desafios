function comprar() {
    let qntDeIngresso = parseInt(document.getElementById('qtd').value);
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;

    //Valida a quantidade digitada
    if (qntDeIngresso < 1 || isNaN(qntDeIngresso)) {
        alert('Quantidade inválida');
    } else {

        //Recebe o tipo e chama a função de checarCompra()
        switch (tipoDeIngresso) {
            case 'inferior':
                checarCompra(qntDeIngresso,'qtd-inferior');
                break;

            case 'superior':
                checarCompra(qntDeIngresso,'qtd-superior');
                break;

            case 'pista':
                checarCompra(qntDeIngresso,'qtd-pista');
                break;

            default:
                alert('Ocorreu um erro, tente novamente.')
                break;
        }
    }
}

//Subrai o valor comprado do total e atualiza o texto
function checarCompra(qntDeIngresso,id) {
    let tipoDeIngresso = parseInt(document.getElementById(id).textContent);

    if (qntDeIngresso > tipoDeIngresso) {
        alert('Não há ingressos suficientes. Tente novamente');
    } else {
        tipoDeIngresso -= qntDeIngresso;
        document.getElementById(id).textContent = tipoDeIngresso;
        alert ('Compra efetuada com sucesso');
    }
}