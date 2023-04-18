var borgX;
var borgY;
var borgCubes = [];

var borgSpeed = 30;
var borgVelX;
var borgVelY;

function makeBorg(xInput, yInput) {
    borgX = xInput;
    borgY = yInput;
    borgVelX = 0;
    borgVelY = 0;
    borgCubes.length = 0;
}

/**
 * Draws The Borg cubes
 */
function drawBorg() {
    stroke('green');
    fill('green');

    /* Moves position of each borg cube part up by 1 index */
    for(let i = borgCubes.length - 1; i > 0; i--) {
        // borgCubes[i-1][0] -= (25 * borgVelX);
        // borgCubes[i-1][1] -= (25 * borgVelY);
        borgCubes[i] = borgCubes[i-1];
        //if( rangeOf(borgX, borgCubes[i][0], 20) && rangeOf(borgY, borgCubes[i][1], 20)) defeated = true;
    }
    borgCubes[0] = [borgX, borgY];

    /* Moves borg cube head */
    borgX += (borgSpeed * borgVelX);
    borgY += (borgSpeed * borgVelY);

    /* Ends the game if the player hits the edge of the screen */
    if( (borgX > canvasWidth) || (borgX < 0) || (borgY > canvasHeight) || (borgY < 0) ) defeated = true;

    /* Draws borg cube head and body */
    rect(borgX, borgY, 25, 25);
    for(let i = 1; i < borgCubes.length; i++) {
        rect(borgCubes[i][0], borgCubes[i][1], 25, 25);
    }

}

/**
 * Changes the velocity of the borg, i.e., the direction the borg is moving.
 * Player is prevented from moving the Borg in the opposite direction; e.g., can not move 'left' if already moving 'right'.
 * @param {*} keyInput 
 */
function changeDirectionBorg(keyInput) {

    switch(keyInput) {

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
            borgVelY = -1;
            borgVelX = 0;
            break;
        
        case DOWN_ARROW:
            if(borgVelY === -1) return;
            borgVelY = 1;
            borgVelX = 0;
            break;

    }

}