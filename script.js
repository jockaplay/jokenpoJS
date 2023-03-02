const player = document.getElementById("p")
const pc = document.getElementById("pc")
const resultado = document.getElementById("result")
const lista = ["pedra", "papel", "tesoura"]

function addPlayer (jogada) {
	const pcChoose = Math.floor(Math.random() * (3-0))
	player.innerText = jogada
	pc.innerText = lista[pcChoose]
	jogar(jogada, lista[pcChoose])
}

function jogar (playerGame, pcGame) {
	if (playerGame == pcGame){
		resultado.innerText = "Empatou!";
	} else if (playerGame == "pedra"){
		if (pcGame == "papel"){
			resultado.innerText = "Computador Ganhou!";
		} else {
			resultado.innerText = "Player Ganhou!";
		}
	} else if (playerGame == "papel"){
		if (pcGame == "tesoura"){
			resultado.innerText = "Computador Ganhou!";
		} else {
			resultado.innerText = "Player Ganhou!";
		}
	}else if (playerGame == "tesoura"){
		if (pcGame == "pedra"){
			resultado.innerText = "Computador Ganhou!";
		} else {
			resultado.innerText = "Player Ganhou!";
		}
	}
}
