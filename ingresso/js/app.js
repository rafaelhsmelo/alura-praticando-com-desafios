//Receber tipo de ingresso
//Receber quantidade
//Checar disponibilidade 
let qntPista = document.getElementById('qtd-pista');
let qntSuperior = document.getElementById('qtd-superior');
let qntInferior = document.getElementById('qtd-inferior');

function comprar() {
    let qntDeIngresso = parseInt(document.getElementById('qtd').value);
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;

    if (qntDeIngresso < 1 || isNaN(qntDeIngresso)) {
        alert('Quantidade inválida');
    } else {
        switch (tipoDeIngresso) {
            case 'inferior':
                qntInferior.innerText -= qntDeIngresso;
                break;

            case 'superior':
                qntSuperior.innerText -= qntDeIngresso;
                break;

            case 'pista':
                qntPista.innerText -= qntDeIngresso;
                break;

            default:
                alert('Ocorreu um erro, tente novamente.')
                break;
        }


    }



}