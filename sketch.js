const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

var foodX;
var foodY;

/* Sets the board up */
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    starsGenerate();
    makeBorg(canvasWidth/2, canvasHeight/2);
    foodX = 100;
    foodY = 100;
}

/**
 * Draws the game itself.
 */
function draw() { 

    frameRate(60);

    clear();
    background(000);
    starsDraw();

    let xdiff = abs(borgX - foodX);
    let ydiff = abs(borgY - foodY);
    if(xdiff < 20 && ydiff < 20) {
        placeFood(true);
        borgCubes.push([borgX, borgY]);
    }
    else placeFood(false);

    drawBorg();
}

function keyPressed() {
    changeDirectionBorg(keyCode);
}

/* Food placement! */
function placeFood(reset) {

    if(reset) {
        foodX = randomInt(0, canvasWidth);
        foodY = randomInt(0, canvasHeight);
    }

    stroke('red');
    fill('red');
    rect(foodX, foodY, 20, 20);

}