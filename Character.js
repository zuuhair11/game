import {getDiceRollArray, getDicePlaceholerHtml} from './utils.js';

const getPercentage = ( remainingHealth, maximumHealth ) => (remainingHealth / maximumHealth) * 100;

function Character(data) {
    // I made copy of my object 'data' to 'this', which is my current object
    Object.assign(this, data);

    // This one gonna return <div class="placeholder-dice"></div>
    this.diceArray = getDicePlaceholerHtml(this.diceCount);

    // Setting the max health when the game started
    this.maxHealth = this.health;

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map( num =>
            `<div class="dice">${num}</div>`).join('');
    }

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce(( total, currentNumber ) => total + currentNumber);

        this.health -= totalAttackScore;
        
        if(this.health <= 0) {
            this.health = 0;
            this.dead = true;
        }
    }

    this.getHealthBarHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth);
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent <= 25 ? 'danger' : ''}"
                    style="width: ${percent}%;">
                </div>
            </div>
        `;
    }

    this.gitCharacterHtml = function() {
        const {elementId, name, avatar, health, diceCount} = this;
        const healthBar = this.getHealthBarHtml();

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health}</b></p>
                ${healthBar}
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`;
    }
}

export default Character;