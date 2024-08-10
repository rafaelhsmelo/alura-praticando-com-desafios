//Receber tipo de ingresso
//Receber quantidade
//Checar disponibilidade 
let qntPista = parseInt(document.getElementById('qtd-pista').value);
let qntSuperior = parseInt(document.getElementById('qtd-superior').value);
let qntInferior = parseInt(document.getElementById('qtd-inferior').value);

function comprar() {
    let qntDeIngresso = parseInt(document.getElementById('qtd').value);
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;

    if (qntDeIngresso < 1 || isNaN(qntDeIngresso)) {
        alert('Quantidade inválida');
    }

    

}