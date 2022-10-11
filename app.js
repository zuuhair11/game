import Character from './Character.js';
import characterData from './data.js';

let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()];
    // If there are no more monsters in the array
    // getNewMonster should return an empty object {}.
    // Otherwise returns a new instance of Character.
    return nextMonsterData ? new Character(nextMonsterData) : {};
}

function attack() {
    wizard.getDiceHtml();
    monster.getDiceHtml();

    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);

    render();

    if(wizard.dead || monster.dead) {
        endGame();
    }
}

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ? 'No victors - all creatures are dead'
        : wizard.health > 0 ? 'The Wizard Wins'
        : 'The Orc is Victorious';

    const endEmoji = wizard.health > 0 ? '🔮' : '☠️';

    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
    `;
}

function render() {
    document.getElementById('hero').innerHTML = wizard.gitCharacterHtml();
    document.getElementById('monster').innerHTML = monster.gitCharacterHtml();
}

document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
