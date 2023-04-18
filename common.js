/**
 * Returns a random number between 'min' (inclusive) and 'max' (exclusive).
 */
function randomFloat(min, max) {
    return random() * (max - min) + min;
}

/**
 * Returns a random integer between 'min' (inclusive) and 'max' (exclusive).
 * Floating-point number is initially generated, which is then floored.
 */
function randomInt(min, max) {
    return floor(random() * (max - min) + min)
}

/**
 * Determines if one number is within range of another, given a tolerance
 * @param {*} alpha (number 1)
 * @param {*} beta  (number 2)
 * @param {*} tolerance
 * @returns boolean
 */
function rangeOf(alpha, beta, tolerance) {
    let difference = abs(alpha - beta);
    return difference < tolerance;
}