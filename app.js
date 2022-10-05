// The Hero Object
const hero = {
    elementId: "hero", 
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

// The Monster Object
const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}

// Will generate a random numbers of each object based on thier diceCount
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function() {
        return Math.floor(Math.random() * 6) + 1;
    })
}

// This Func will inovoked the getDiceRollArray(), 
// So that can put each number in a div and return it

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(number) {
        return `<div class="dice">${number}</div>`;
    }).join('');
}


function Character(data) {
    Object.assign(this, data);

    this.gitCharacterHtml = function() {
        const {elementId, name, avatar, health, diceCount} = this;

        // Invoking the getDiceHtml() passing to it the diceCount of the target obj
        const diceHtml = getDiceHtml(diceCount);

        document.getElementById(elementId).innerHTML = 
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health}</b></p>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`;
    }
}

const wizard = new Character(hero);
wizard.gitCharacterHtml();

const orc = new Character(monster);
orc.gitCharacterHtml();