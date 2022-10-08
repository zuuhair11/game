import Character from './Character.js';
import characterData from './data.js';

function attack() {
    wizard.getDiceHtml();
    orc.getDiceHtml();
    render();
}


function render() {
    document.getElementById('hero').innerHTML = wizard.gitCharacterHtml();
    document.getElementById('monster').innerHTML = orc.gitCharacterHtml();
}

document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();