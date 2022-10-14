import {getDiceRollArray, getDicePlaceholerHtml, getPercentage} from './utils.js';

class Character {
    constructor(data) {
        // I made copy of my object 'data' to 'this', which is my current object
        Object.assign(this, data);
        // This one gonna return <div class="placeholder-dice"></div>
        this.diceHtml = getDicePlaceholerHtml(this.diceCount);

        // Setting the max health when the game started
        this.maxHealth = this.health;
    }    

    setDiceHtml () {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceHtml = this.currentDiceScore.map( num =>
            `<div class="dice">${num}</div>`).join('');
    }

    takeDamage (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce(( total, currentNumber ) => total + currentNumber);

        this.health -= totalAttackScore;
        
        if(this.health <= 0) {
            this.health = 0;
            this.dead = true;
        }
    }

    getHealthBarHtml () {
        const percent = getPercentage(this.health, this.maxHealth);
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent <= 25 ? 'danger' : ''}"
                    style="width: ${percent}%;">
                </div>
            </div>
        `;
    }

    gitCharacterHtml () {
        const {elementId, name, avatar, health, diceCount, diceHtml} = this;
        const healthBar = this.getHealthBarHtml();

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health}</b></p>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
    }
}

export default Character;