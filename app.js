import Character from './Character.js';
import characterData from './data.js';

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
    document.getElementById('hero').innerHTML = wizard.gitCharacterHtml();
    document.getElementById('monster').innerHTML = orc.gitCharacterHtml();
}
render();