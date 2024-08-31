// Agustin Villalba Guillerat
// Comision 1
// https://www.youtube.com/watch?v=U9YhWWjD6Zk



let referencia;

//dibujar el centro
let centrX=0;
let centrY=0;

let moveX=10;
let moveY=10;
//Variables paraRotar
let rot=50;

//variables para controlar el color
let r = 255;
let g =0;
let b = 0;

//variable para el tamaño
let tam=830;

function setup() {
  
   createCanvas(800, 400);
   
  referencia = loadImage("F_48.jpg");
  rectMode(CENTER);
  
}


function draw() {
  ilusion();
  teclado(10);
  image(referencia, 0, 0, 400, 400);
}


function ilusion () {
//Guarda el sistema de cordenadas anterior lo que permite cambiarlas sin afectar a lo que este fuera 
  push(); 
  
  
  translate(580, 190);
  rotate(radians(rot));

  //la cantidad de ejecuciones / cantidad de cuadrados que se genera en cada paso del for
  for (let i =0; i < 40; i++) {
    for (let a = 0; a<800; a+=15) {

      fill(r, g, b);
      rect(0, 0, tam-a, tam-a);

      //cuando la suma de las variable es par pinta todo de negro
      if ((i+a) % 2 == 0 ) {
        r=0;
        g=0;
        b=0;
      } else if ((i+a) >= 810) {//pinta el ultimo de rojo
        r=255;
        g=0;
        b=0;
      }//cuando la suma de las variable NO es par pinta todo de blanco
      else {
        r=255;
        g=255;
        b=255;
      }
    }
  }

 pop();
  //cierra el pushMatrix
}


//FUNCION QUE RETORNA VALOR 
function EstoyDentroDelBoton( x1 ,  x2 ,  y1,  y2){ 
  let BotonTrue = (mouseX> x1) && (mouseX < x2) && (mouseY > y1) && (mouseY <y2);
  
return BotonTrue;
}

//FUNCION QUE NO RETORNA VALOR
function teclado( velocidad){
  if (keyIsPressed && key == 'a' ||keyIsPressed && key == 'A') {
    rot=rot-velocidad;
  } else if (keyIsPressed &&key == 'd' || keyIsPressed && key == 'D') {
    rot=rot+velocidad;
  } else if (keyIsPressed &&key == 's' || keyIsPressed && key == 'S') {
    rot=random(0,1000);
  }
  
 

}

function mousePressed(){
 if(EstoyDentroDelBoton(560,600,170,200) ){
      rot=50;
  }

}
