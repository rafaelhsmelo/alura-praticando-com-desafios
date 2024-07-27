function alterarStatus(n) { //Ao clicar o botão
    let item = document.getElementById('game-' + n); //Define o item pelo ID
    let imagem = item.querySelector('.dashboard__item__img'); //Encontra a classe da imagem do item
    let botao = item.querySelector('.dashboard__item__button'); //Encontra a classe do botão do item
    let nomeJogo = item.querySelector('.dashboard__item__name'); //Encontra o nome do jogo do item

    if (imagem.classList.contains('dashboard__item__img--rented')) { //SE a imagem do item possuir a classe "alugado"
        if (confirm(`Você tem centerza que deseja devolver o jogo ${nomeJogo.textContent}?`)) { //Confirma devolução com o usuário
            imagem.classList.remove('dashboard__item__img--rented'); //Remove da imagem a classe "alugada"
            botao.classList.remove('dashboard__item__button--return'); //Remove do botão a classe "alugada"
            botao.innerText = 'Alugar'; //Muda o texto no botão
        }

    } else {
        if (confirm(`Você tem centerza que deseja alugar o jogo ${nomeJogo.textContent}?`)) { 
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.innerText = 'Devolver'; 
    }}
}
