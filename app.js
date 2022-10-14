import Character from './Character.js';
import characterData from './data.js';

let monstersArray = ["orc", "demon", "goblin"];

// When it's wait is true, I cannot click the button attack
let isWaiting = false;

function getNewMonster() {
    // Each time I take a new monster I deleted from my monsters array
    const nextMonsterData = characterData[monstersArray.shift()];
    // If there are no more monsters in the array
    // getNewMonster should return an empty object {}.
    // Otherwise returns a new instance of Character.
    return nextMonsterData ? new Character(nextMonsterData) : {};
}

function attack() {
    if(!isWaiting) {
        wizard.setDiceHtml();
        monster.setDiceHtml();

        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);

        render();

        if(wizard.dead) {
            endGame();
        }
        else if(monster.dead) {
            isWaiting = true;
            if(monstersArray.length > 0) {
                setTimeout(() => {
                    monster = getNewMonster();
                    render();
                    isWaiting = false;
                }, 1500);
            }
            else {
                endGame();
            }
        }
    }
}

function endGame() {
    isWaiting = true;
    const endMessage = wizard.health === 0 && monster.health === 0 ? 'No victors - all creatures are dead'
        : wizard.health > 0 ? 'The Wizard Wins'
        : 'The monsters is Victorious';

    const endEmoji = wizard.health > 0 ? '🔮' : '☠️';

    setTimeout(() => {
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>
        `;
    }, 1500);
}

function render() {
    document.getElementById('hero').innerHTML = wizard.gitCharacterHtml();
    document.getElementById('monster').innerHTML = monster.gitCharacterHtml();
}

document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();