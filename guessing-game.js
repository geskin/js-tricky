/** returns a function that allows you to guess a random whole number between 0 and 99
 * every time a new game is created it selects a new random number and keeps it secret from the player
*/

function guessingGame() {
    let randNum = Math.floor(Math.random() * 100);
    let guessCount = 0;
    let foundNum = false;
    return function guess(num) {
        while (foundNum === false) {
            if (num < randNum) {
                guessCount++;
                return `${num} is too low!`;
            } else if (num > randNum) {
                guessCount++;
                return `${num} is too high!`;
            } else {
                foundNum = true;
                guessCount++;
                return `You win! You found ${randNum} in ${guessCount} guesses.`;
            }
        }

        return "The game is over, you already won!";

    }

}

module.exports = { guessingGame };
