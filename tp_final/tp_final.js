let img = [];
let estados = 0;

function setup() {


  createCanvas(640, 480);
  rectMode(CENTER);
}

function preload() {

  img [0] = loadImage('/imgs/Pantalla_de_inicio.jfif');
  img [1] = loadImage('/imgs/Pantalla_1.jfif');
  img [2] = loadImage('/imgs/Pantalla_2.jfif');
  img [3] = loadImage('/imgs/Pantalla_3-_Primera_interaccion.jfif');
  img [4] = loadImage('/imgs/Pantalla_4.jfif');
  img [5] = loadImage('/imgs/Pantalla_5.jfif');
  img [6] = loadImage('/imgs/Pantalla_6.jfif');
  img [7] = loadImage('/imgs/Pantalla_7_-_Segunda_interaccion.jfif');
}


function draw() {

  Estados();

  console.log(mouseX, mouseY);
}

function Estados() {

  if (estados === 0) {
    image(img[0], 0, 0, 640, 480);
    Boton("Empezar", 35, 330, 420, 1 )
  }


  if (estados === 1) {
    image(img[1], 0, 0, 640, 480);


    rect(480, 210, 300, 100);
    text("Te encuentras viajando hacia París cuando de repente notas un gran embotellamiento, avanzas ya que no hay otra opción y quedas atorado en estagran masa de autos", 475, 175, 250);

    Boton("Continuar", 35, 500, 420, 2 )
  }


  if (estados === 2) {
    image(img[2], 0, 0, 640, 480);

    rect(480, 150, 300, 100);
    text("Al pasar las horas y ver que no te has movido ni un poco, comienzas a inquietarte y la duda de cuando terminara empieza a ponerte incómodo", 475, 120, 250);

    Boton("Continuar", 35, 500, 420, 3 )
  }
  if (estados === 3) {
    image(img[3], 0, 0, 640, 480);

    rect(480, 140, 300, 70);
    text("Las horas pasan y ya no aguantas la situación, debes calmas tu mente o buscar la salida del embotellamiento", 475, 120, 250);

    Boton("Bajar del auto", 20, 500, 420, 4 )

      Boton("No bajar", 20, 130, 420, 8 )
  }

  if (estados === 4) {
    image(img[4], 0, 0, 640, 480);

    rect(480, 350, 300, 100);
    text("Al bajar del auto notas más gente en tu situación y decides ponerte a charlar con la muchacha del auto vecino y otros conductores de tu zona, logras calmar esos pensamientos pero la inquietud sigue presente", 475, 310, 250);
    Boton("Continuar", 35, 500, 440, 5 )
  }

  if (estados === 5) {
    image(img[5], 0, 0, 640, 480);

    rect(480, 350, 300, 100);
    text(" Empiezas a abrirte más con esas personas y entiendes que no eres el unico que pasa por esa situación, esta noche te tocara pasarla en la autopista ya el embotellamiento no ha avanzado nada", 475, 310, 250);
    Boton("Continuar", 35, 500, 440, 6 )
  }

  if (estados === 6) {
    image(img[6], 0, 0, 640, 480);

    rect(480, 340, 300, 140);
    text(" Al levantarte el calor es insoportable y calienta las chapas de los autos transformandolas en hornos, además la falta de agua y comida en el primer día comienza a afectar física y mentalmente. Al dia siguiente ya no tienes agua, ya que lo poco que quedaba lo bebiste en un intento desesperado de calmar el calor", 475, 280, 250);
    Boton("Continuar", 35, 500, 450, 7 )
  }

  if (estados === 7) {
    image(img[7], 0, 0, 640, 480);
    rect(480, 300, 300, 70);
    text("El calor no cede y estas agotado.La desesperación por no tener agua y comida te llevan a querer escapar a toda costa", 475, 280, 250);

    Boton("Intentar escape", 20, 500, 420, 8 )

      Boton("Quedarse", 20, 130, 420, 9 )
  }
  if (estados === 8) {
    background(0);
    //image(img[8], 0, 0, 640, 480);
  }
  if (estados === 9) {
    background(0);
    //image(img[9], 0, 0, 640, 480);
  }
  if (estados === 10) {
    background(0);
    //image(img[10], 0, 0, 640, 480);
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
  }
}
