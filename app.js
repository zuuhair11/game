// Will generate a random numbers of each object based on thier diceCount
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return Math.floor(Math.random() * 6) + 1;
    })
}

const characterData = {
    hero: {
        elementId: "hero", 
        name: "Wizard",
        avatar: "images/wizard.png",
        health: 60,
        diceCount: 3
    },
    monster: {
        elementId: "monster",
        name: "Orc",
        avatar: "images/orc.png",
        health: 10,
        diceCount: 1
    }
}

// This Func will inovoked the getDiceRollArray(), 
// So that can put each number in a div and return it
function Character(data) {
    // I made copy of my object 'data' to 'this', which is my current object
    Object.assign(this, data);

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(number) {
            return `<div class="dice">${number}</div>`;
        }).join('')
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

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.gitCharacterHtml();
    document.getElementById(orc.elementId).innerHTML = orc.gitCharacterHtml();
}
render();