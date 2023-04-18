const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

var foodX;
var foodY;

var defeated = false;

/* Sets the board up */
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    starsGenerate();
    makeBorg(canvasWidth/2, canvasHeight/2);
    foodX = 100;
    foodY = 100;
    defeated = false;
}

/**
 * Draws the game itself.
 */
function draw() { 

    /* Reset the game if the player loses */
    if(defeated) {
        window.alert("Game Over! Score: " + borgCubes.length);
        setup();
    }    

    frameRate(15);

    clear();
    background(000);
    starsDraw();

    if( rangeOf(borgX, foodX, 20) && rangeOf(borgY, foodY, 20) ) {
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