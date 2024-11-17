//Agustin Villalba Guillerat
//https://www.youtube.com/watch?v=sYgmqTSLEnE

let pantallas;
let sonido;

function preload() {
    sonido = loadSound("data/musica_fondo.mp3");
}

function setup() {
    createCanvas(640, 480);
    pantallas = new Pantallas();
}


function draw() {
   
    pantallas.dibujar();
}
