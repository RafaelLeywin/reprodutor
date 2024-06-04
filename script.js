const nomeMusica = document.getElementById("nome-musica");
const song = document.getElementById("audio01");
const play = document.getElementById("playMusica");

nomeMusica.innerText = "Retrospective";

function playmusica() {
    song.play()
}

play.addEventListener("click", playmusica);