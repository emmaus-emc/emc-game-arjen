/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 100; // x-positie van de vijand
var vijandY = 200; // y-positie van de vijand



var spelerHealth = 75; //  health speler
var punten = 0;



var KEY_LEFT = 37; // linker pijltje
var KEY_RIGHT = 39; // rechter pijltje
var KEY_UP = 38; // pijltje omhoog
var KEY_DOWN = 40; // pijltje omlaag


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 1

  if (vijandY > 721) {
    vijandY = 0;
  }

 

  // kogel

  // speler
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 20;
  }
  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 20;
  }
  if (keyIsDown(KEY_UP)) {
    spelerY = spelerY - 20;
  }
  if (keyIsDown(KEY_DOWN)) {
    spelerY = spelerY + 20;
  }
  if (spelerX < 0) {
    spelerX = 0;
  }
  if (spelerX > 1280) {
    spelerX = 1280;
  }
  if (spelerY > 720) {
    spelerY = 720;
  }
  if (spelerY < 0) {
    spelerY = 0;
  }



};


/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

for (let i = 0; i < 8; i++)
  if (
    (vijandX + i * 200 - spelerX) < 50 &&
    (vijandX + i * 200 - spelerX) > -50 &&
    (vijandY - spelerY) < 50 &&
    (vijandY - spelerY) > -50
  ) {
    console.log("botsing");
    spelerHealth = spelerHealth - 1;
  }




  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  fill("black");
  rect(0, 0, 1280, 720)
  // achtergrond

  // vijand
  for (var i = 0; i < 8; i = i + 1) {
    fill("yellow");
    rect(vijandX + i * 150 - 25, vijandY - 25, 50, 50);
    fill("black");
    ellipse(vijandX, vijandY, 10, 10);
  }

  // kogel

  // speler
  fill("");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
  fill("white");
  textSize(35);
  text("HP = " + spelerHealth, 100, 100);

  fill("white");
  textSize(35);
  text("punten = " + punten, 1000, 100);


};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerHealth < 1) {
    return true;
  } else {
    punten = punten + 1;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('darkblue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    fill("Orange");
    textSize(30);
    text("Game over reload de browser om opnieuw te starten", 300, 200);
  }
}























