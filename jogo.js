var altura = 0
var largura = 0
var vidas = 1
var tempo = 3

//função para capturar o tamanho da tela do usuário no momento
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

//cronômetro decrescendo a cada 1 segundo ou 1000 milissegundo
var cronometro = setInterval(function() {
	tempo -= 1
	if (tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('tempo').innerHTML = tempo 
	}
}, 1000)

//função para a criação e remoção dos mosquitos na tela
function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
		//diminuindo pontos de vida caso o elemento não seja clicado
		if (vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criar elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	//removendo o elemento caso ele seja clicado
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)
}

//função para aparecer diferentes tamanhos de mosquitos
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

//função para os mosquitos aparecerem com o rosto para à direita ou esquerda 
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}