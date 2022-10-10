// Will generate a random numbers of each object based on thier diceCount
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return Math.floor(Math.random() * 6) + 1;
    })
}

function getDicePlaceholerHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return `<div class="placeholder-dice"></div>`;
    }).join('')
}

const getPercentage = ( remainingHealth, maximumHealth ) => (remainingHealth / maximumHealth) * 100;

export {getDiceRollArray, getDicePlaceholerHtml, getPercentage};