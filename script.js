let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let criaMosquitoTempo = 1500;
// Níveis de dificuldade
let nivel = window.location.search
nivel = nivel.replace('?', '');

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

let cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000)

function posicaoRandomica() {
  // Remover o mosquito anterior (caso exista)
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if(vidas > 3) {
        window.location.href = 'fim_de_jogo.html';
    } else {
        document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png";
    vidas++
    }

  }

  // Criando posições randômicas
  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  // Criando o elemento html
  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosquito.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";

    case 1:
      return "mosquito2";

    case 2:
      return "mosquito3";

    case 3:
      return "mosquito4";
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";

    case 1:
      return "ladoB";
  }
}

// função da tela inicial do game - Seleção de nível do jogo
function iniciarJogo() {
    let nivel = document.getElementById('nivel').value;

    if(nivel === '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = 'app_game.html?' + nivel
}
