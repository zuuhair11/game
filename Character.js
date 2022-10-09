import {getDiceRollArray, getDicePlaceholerHtml} from './utils.js';


function Character(data) {
    // I made copy of my object 'data' to 'this', which is my current object
    Object.assign(this, data);

    // This one gonna return <div class="placeholder-dice"></div>
    this.diceArray = getDicePlaceholerHtml(this.diceCount);

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(function(num) {
            return `<div class="dice">${num}</div>`;
        }).join('');
    }

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce(function(total, currentNumber) {
            return total + currentNumber;
        });

        this.health -= totalAttackScore;
        
        if(this.health <= 0) {
            this.health = 0;
            this.dead = true;
        }
    }

    this.gitCharacterHtml = function() {
        const {elementId, name, avatar, health, diceCount} = this;

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health}</b></p>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`;
    }
}

export default Character;