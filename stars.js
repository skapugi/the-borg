var stars = [];

/**
 * Generates the positions of the 'stars', stored in stars[].
 */
function starsGenerate(width, height) {
    
    for(let i = 0; i < 512; i++) {
        let x = floor(random() * width)
        let y = floor(random() * height)
        stars.push([x, y]);
    }

}

/**
 * Draws the 'stars', reading values from stars[].
 */
function starsDraw() {
    stroke('white');
    for(let i = 0; i < 512; i++) point(stars[i][0], stars[i][1])
}