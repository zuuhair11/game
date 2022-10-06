import {getDiceRollArray} from './utils.js';

// This Func will inovoked the getDiceRollArray(), 
// So that can put each number in a div and return it
function Character(data) {
    // I made copy of my object 'data' to 'this', which is my current object
    Object.assign(this, data);

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(number) {
            return `<div class="dice">${number}</div>`;
        }).join('');
    }
    this.gitCharacterHtml = function() {
        const {elementId, name, avatar, health, diceCount} = this;

        // Invoking the getDiceHtml() passing to it the diceCount of the target obj
        const diceHtml = this.getDiceHtml(diceCount);
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health}</b></p>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
    }
}

export default Character;