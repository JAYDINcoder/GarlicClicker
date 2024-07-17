let yes = document.querySelector('.cost')
let cost1 = document.querySelector('.cost1')
let par = parseFloat(yes.innerHTML)
let parcost = parseFloat(cost1.innerHTML)
let lev = document.querySelector('.lev')

let stop = document.querySelector('.upgrade2')

var gar = new Audio("Recording-_2_.wav"); 

var snd = new Audio("Stop.wav"); 

var music = new Audio("Music.mp3"); 

var lucas = document.querySelector('.Lucas')

let gpc = 1;

lucas.style.display = 'none';

function addgarlic () {
    const newAudio = gar.cloneNode()
    newAudio.play()
    par += gpc
    yes.innerHTML = par
}

function buy() {
    if (par >= parcost) {
        par -= parcost
        yes.innerHTML = par

        lev.innerHTML ++

        gpc += 1
    }
}

function Die() {
    snd.play();
    stop.style.animation="bye 2s Linear"
    setTimeout(function(){
        stop.style.display = 'none';
    }, 1900)
}

function hi() {
    music.play();
    lucas.style.display = 'block'
    lucas.style.animation = 'hi 4s linear'
}