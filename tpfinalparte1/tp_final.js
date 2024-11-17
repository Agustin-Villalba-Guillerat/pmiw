//Agustin Villalba Guillerat
//https://www.youtube.com/watch?v=Q_IkVrnTcYU

let img = [];
let textos = [];
let estados = 0;

let sonido;
let sonido_boton;

function preload() {

    textos = loadStrings("data/textos.txt");
  
  for (let i=0; i<22; i++) {
    img[i] = loadImage("imgs/Pantalla"+i+".jfif");
  }

  sonido = loadSound("sonidos/Musica_de_Suspenso_para_leer_relajarte_novelas_comics_manga.mp3");
  sonido_boton = loadSound("sonidos/boton.mp3");
}

function setup() {
  createCanvas(640, 480);
  rectMode(CENTER);
  sonido.play();
}

function draw() {
  Estados();
}

function Estados() {

  if (estados === 0) {

    image(img[1], 0, 0, width, height);

    push();
    fill(255, 255, 0)
      textSize(35);
    text(textos[0], width/2-210, height-330);
    pop();

    Boton("Empezar", 35, width-310, height-60, 1 )
  }


  if (estados === 1) {
    image(img[2], 0, 0, width, height);


    rect(width-160, height-270, 300, 100);
    text(textos[1], width-165, height-300, 250);

    Boton("Continuar", 35, width-140, height-60, 2 )
  }


  if (estados === 2) {
    image(img[3], 0, 0, width, height);

    rect(width-160, height-330, 300, 100);
    text(textos[2], width-165, height-360, 250);

    Boton("Continuar", 35, width-140, height-60, 3 )
  }
  if (estados === 3) {
    image(img[4], 0, 0, width, height);

    rect(width-160, height-330, 300, 70);
    text(textos[3], width-165, height-355, 250);

    Boton("Bajar del auto", 20, width-140, height-60, 4 )

      Boton("No bajar", 20, width-510, height-60, 30 )
  }

  if (estados === 4) {
    image(img[5], 0, 0, width, height);

    rect(width-160, height-130, 300, 100);
    text(textos[4], width-165, height-170, 250);
    Boton("Continuar", 35, width-140, height-40, 5 )
  }

  if (estados === 5) {
    image(img[6], 0, 0, width, height);

    rect(width-160, height-130, 300, 100);
    text(textos[5], width-165, height-170, 250);
    Boton("Continuar", 35,width-140, height-40, 6 )
  }

  if (estados === 6) {
    image(img[7], 0, 0, width, height);

    rect(width-160, height-140, 300, 140);
    text(textos[6], width-165, 280, 250);
    Boton("Continuar", 35, width-140, height-30, 7 )
  }

  if (estados === 7) {
    image(img[8], 0, 0, width, height);
    rect(width-160, height-180, 300, 70);
    text(textos[7], width-165, 280, 250);

    Boton("Intentar escape", 20, width-140, height-60, 8 )

      Boton("Quedarse", 20, width-510, height-60, 9 )
  }
  if (estados === 8) {
    image(img[9], 0, 0, width, height);
    rect(width-160, height-185, 300, 50);
    text(textos[8], width-165, 280, 250);

    Boton("REINICIAR", 20,width-140, height-60, 0 )

      Boton("VOLVER", 20, width-510, height-60, 7 )
  }


  if (estados === 30) {
    image(img[9], 0, 0, width, height);
    rect(width-160, height-185, 300, 50);
    text(textos[8], width-165, 280, 250);

    Boton("REINICIAR", 20, width-140, height-60, 0 )

      Boton("VOLVER", 20,  width-510, height-60, 3 )
  }


  if (estados === 9) {
    image(img[11], 0, 0, width, height);
    rect(width-160, height-175 , 300, 70);
    text(textos[9], width-165, 280, 250);

    Boton("Continuar", 35,width-140, height-30, 10 )
  }
  if (estados === 10) {
    image(img[12], 0, 0, width, height);
    rect(width-160, height-250, 300, 70);
    text(textos[10], width-165, 200, 250);

    rect(width-160, height-185, 300, 50);
    text(textos[11], width-165, 280, 250);

    Boton("Unirte", 20, width-140, height-60, 11 )

      Boton("Rechazar", 20, width-510, height-60, 19 )
  }
  if (estados === 11) {
    image(img[13], 0, 0, width, height);
    rect(width-160, height-155, 300, 120);
    text(textos[12], width-165, 275, 250);

    Boton("Continuar", 35,width-140, height-30, 12 )
  }
  if (estados === 12) {
    image(img[14], 0, 0, width, height);
    rect(width-160, height-165, 300, 100);
    text(textos[13], width-165, 275, 250);

    Boton("Negociar ", 20,width-140, height-60, 13 )

      Boton("No arriesgar", 20,   width-510, height-60, 15 )
  }
  if (estados === 13) {
    image(img[15], 0, 0, width, height);
    rect(width-160, height-185, 300, 70);
    text(textos[14], width-165, 275, 250);

    Boton("Continuar", 35,width-140, height-30, 14 )
  }
  if (estados === 14) {
    image(img[16], 0, 0, width, height);
    rect(width-160, height-185, 300, 70);
    text(textos[15], width-165, 275, 250);


    Boton("REINICIAR", 20, width-140, height-60, 0 )

      Boton("VOLVER", 20,   width-510, height-60, 12 )
  }
  if (estados === 15) {
    image(img[17], 0, 0, width, height);
    rect(width-160, height-185, 300, 70);
    text(textos[16], width-165, 275, 250);

    Boton("Continuar", 35,width-140, height-30, 16 )
  }
  if (estados === 16) {
    image(img[18], 0, 0, width, height);
    rect(width-160, height-190, 300, 50);
    text(textos[17], width-165, 275, 250);

    Boton("Continuar", 35, width-140, height-30, 17 )
  }
  if (estados === 17) {



    background(0);

    /*
    Boton("Futuro juego", 35, width/2-50, height/2, 50 )
      Boton("Continuar", 35, 500, 450, 18 )
    */










  }
  if (estados === 18) {
    image(img[19], 0, 0, width, height);
    rect(width-160, height-170, 300, 100);
    text(textos[18], width-165, 275, 250);

    Boton("Continuar", 35, width-140, height-30, 19 )
  }
  if (estados === 19) {
    image(img[20], 0, 0, width, height);
    rect(width-160, height-170, 300, 100);
    text(textos[19], width-165, 275, 250);

    Boton("Continuar", 35, width-140, height-30, 20 )
  }
  if (estados === 20) {
    image(img[21], 0, 0, width, height);
    rect(width-160, height-170, 300, 100);
    text(textos[20], width-165, 275, 250);

    Boton("Continuar", 35,width-140, height-30, 21 )
  }
  if (estados === 21) {
    image(img[0], 0, 0, width, height);

    push();
    fill(0,0,0,80);
    rect(width-305 , height-300, 330 , 320 );
    pop();
    push();
    textSize(30);
    fill(255, 255, 0);
    text("Creditos", width/2+50, height-430, 250);


    text("Autor: Julio Cortázar", width/2-120, height-330);



    text("Alumnos:", width/2-120, height-280);
    text("Agustin Villalba", width/2-120, height-230);
    text("Maximo Martinez", width/2-120, height-180);


    pop();

    Boton("   REINICIAR", 20, width/2, height-60, 0 )
  }
}


//FUNCION QUE RETORNA VALOR
function EstoyDentroDelBoton( x1, x2, y1, y2) {
  let BotonTrue = (mouseX> x1) && (mouseX < x2) && (mouseY > y1) && (mouseY <y2);

  return BotonTrue;
}

//FUNCION QUE DIBUJA EL BOTON Y TIENE LA LOGICA DE PASAR AL PANTALLA
function Boton(texto, tamText, x_, y_, PantallaSig) {
  push();

  push();
  fill(0);
  rect( x_, y_, 200, 50);
  pop();

  fill(255);
  textSize(tamText);
  text(texto, x_-70, y_+10);
  pop();


  if (EstoyDentroDelBoton(x_-100, x_+100, y_-20, y_+30) && mouseIsPressed === true ) {
    estados = PantallaSig;
    mouseIsPressed= false;
    sonido_boton.play();
  }
}
