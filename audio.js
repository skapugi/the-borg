/* Plays the First Contact theme while playing the game */
const audioTheme = new Audio('audio/theme/firstContact.mp3');
audioTheme.oncanplay = function() {
    audioTheme.volume = 0.2;
    audioTheme.loop = true;
    audioTheme.play();
};

/* Plays some audio effect when the Borg assimilates a ship */
const audioAsim = new Audio();
audioAsim.volume = 0.2;
function playBorgSound() {
    let num = floor(random() * 4);
    console.log(num);
    switch(num) {
        case 0:
            audioAsim.src = 'audio/borg/phaser.mp3';
            break;
        case 1:
            audioAsim.src = 'audio/borg/cut.mp3';
            break;
        case 2:
            audioAsim.src = 'audio/enemy/quantumOne.mp3';
            break;
        case 3:
            audioAsim.src = 'audio/enemy/quantumTwo.mp3';
            break;
    }
    audioAsim.play();
}