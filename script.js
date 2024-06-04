const nomeMusica = document.getElementById("nome-musica");
const nomeAutor = document.getElementById("nome-autor");
const song = document.getElementById("audio01");
const capa = document.getElementById("capa");
const play = document.getElementById("playMusica");
const anterior = document.getElementById("voltar");
const proximo = document.getElementById("avanca");

const retrospective = {
    nomeMusica : "Retrospective",
    nomeAutor : "DVRST",
    file : "primeiro"
};
const seaOfFeelings = {
    nomeMusica : "Sea Of Feelings",
    nomeAutor : "Lowx",
    file : "segundo"
};
const closeFeeling = {
    nomeMusica : "Close Feeling",
    nomeAutor : "DVRST e my!lane",
    file : "terceiro"
};
let estatocando = false;
const playlist = [retrospective, seaOfFeelings, closeFeeling];
let index = 0;

function playmusica() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    estatocando = true;
}

function pausemusica() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    estatocando = false;
}

function comportamentoBotao(){
    if(estatocando === true){
        pausemusica();
    }
    else {
        playmusica();
    }
}

function iniciarmusica(){
    capa.src = `capas/${playlist[index].file}.jpg`;
    song.src = `audios/${playlist[index].file}.mp3`
    nomeMusica.innerText = playlist[index].nomeMusica;
    nomeAutor.innerText = playlist[index].nomeAutor;
}

function voltarMusica(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else {
        index -= 1;
    }
    iniciarmusica();
    playmusica();
}

function avancarMusica(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else {
        index += 1;
    }
    iniciarmusica();
    playmusica();
}

iniciarmusica();

play.addEventListener("click", comportamentoBotao);
anterior.addEventListener("click", voltarMusica);
proximo.addEventListener("click", avancarMusica);