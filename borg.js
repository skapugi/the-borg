const squareSize = 40;
const boardSizeWidth = 20;
const boardSizeHeight = 20;

const colourBorg = "#054907";
const colourEnemy = "gray";

var defeated = false;

var borgAsim = [];
var borgX;
var borgY;
var borgVelX;
var borgVelY;

var enemyX;
var enemyY;

/* Creates (and resets) the canvas and all variables */
function setup() {
    createCanvas(boardSizeWidth * squareSize, boardSizeHeight * squareSize);
    defeated = false;
    borgX = 12 * squareSize;
    borgY = 12 * squareSize;
    borgAsim = [];
    borgVelX = 0;
    borgVelY = 0;
    placeEnemy();
    starsGenerate(boardSizeWidth * squareSize, boardSizeHeight * squareSize);
}

/*
Draws Borg and enemy vessel on the canvas.
Defeat conditions, assimilation and reset are handled within this function.
*/
function draw() {

    frameRate(10);
    clear();
    background(000);
    starsDraw();

    /* Draw Borg */
    stroke('gray');
    fill(colourBorg);
    for(let i = 0; i < borgAsim.length; i++) {
        rect(borgAsim[i][0], borgAsim[i][1], squareSize, squareSize);
    }
    rect(borgX, borgY, squareSize, squareSize);

    /* Cause the Borg to move */
    moveBorg();

    /* Defeated condition: Borg collides with itself */
    for(let i = 0; i < borgAsim.length; i++) {
        if(borgX == borgAsim[i][0] && borgY == borgAsim[i][1]) defeated = true;
    }

    /* Defeated condition: Borg hits edge of canvas */
    if(borgX > (boardSizeWidth * squareSize) - squareSize || borgX < 0) defeated = true;
    if(borgY > (boardSizeHeight * squareSize) - squareSize || borgY < 0) defeated = true;

    /* Draw enemy vessel */
    stroke(colourEnemy);
    fill(colourEnemy);
    rect(enemyX, enemyY, squareSize, squareSize);

    /* Assimilate some ship (snake 'eats') when the Borg head collides with it */
    if(borgX == enemyX && borgY == enemyY) {
        borgAsim.push([enemyX, enemyY]);
        placeEnemy();
        playBorgSound();
    }

    /*
    Reset the board if the user is 'defeated'
    Framerate is set to '1', to avoid constant pop-ups.
    Alert and restart delayed in order to allow Borg to be drawn as colliding with itself.
    */
    if(defeated) {
        frameRate(1);
        setTimeout(()=> {
            alert("The Borg have been defeated! Assimilated Ships: " + borgAsim.length);
            setup();
        },100);
    }

}

/* Move the Borg head and all assimilated ships */
function moveBorg() {

    for(let i = borgAsim.length-1; i > 0; i--) borgAsim[i] = borgAsim[i-1];
    if(borgAsim.length) borgAsim[0] = [borgX, borgY];
    borgX += squareSize * borgVelX;
    borgY += squareSize * borgVelY;

}

/* Randomly place an enemy ship */
function placeEnemy() {

    enemyX = Math.floor(Math.random() * boardSizeWidth) * squareSize;
    enemyY = Math.floor(Math.random() * boardSizeHeight) * squareSize;

}

/* Changes the borg's direction dependent on which arrow key the user uses */
function keyPressed() {

    switch(keyCode) {

        case LEFT_ARROW:
            if(borgVelX === 1) return;
            borgVelX = -1;
            borgVelY = 0;
            break;

        case RIGHT_ARROW:
            if(borgVelX === -1) return;
            borgVelX = 1;
            borgVelY = 0;
            break;

        case UP_ARROW:
            if(borgVelY === 1) return;
            borgVelX = 0;
            borgVelY = -1;
            break;

        case DOWN_ARROW:
            if(borgVelY === -1) return;
            borgVelX = 0;
            borgVelY = 1;
            break;

    }

}