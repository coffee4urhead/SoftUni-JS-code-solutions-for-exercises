function heroesOfCode(arrInput) {
    function createHero(heroName, healthPoints, manaPoints) {
        let hero = {
            name: heroName,
            hp: healthPoints,
            mana: manaPoints,
            castSpell(mpNeeded, spellName) {
                if (this.mana - mpNeeded >= 0) {
                    this.mana -= mpNeeded;
                    console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mana} MP!`);
                } else {
                    console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
                }
            },
            takeDamage(damage, attacker) {
                if (this.hp - damage > 0) {
                    this.hp -= damage;
                    console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
                } else {
                    console.log(`${this.name} has been killed by ${attacker}!`);
                    heroParty.delete(this.name);
                }
            },
            recharge(amount) {
                let maximumVal = 200;
                let rechAmount = Math.min(amount, maximumVal - this.mana);
                this.mana += rechAmount;
                console.log(`${this.name} recharged for ${rechAmount} MP!`);
            },
            heal(amountToHeal) {
                let maximumHealthVal = 100;
                let her = Math.min(maximumHealthVal - this.hp, amountToHeal);
                this.hp += her
                console.log(`${this.name} healed for ${her} HP!`);
            },
            toString(){
                console.log(`${this.name}\n  HP: ${this.hp}\n  MP: ${this.mana}`);
            }
        }
        return hero;
    }
    let numOfHeroes = Number(arrInput.shift());
    let heroParty = new Map();
    for (let i = 0; i < numOfHeroes; i++) {
        let currentHeroStats = arrInput.shift().split(" ");
        let name = currentHeroStats[0];
        let hp = Number(currentHeroStats[1]);
        let mana = Number(currentHeroStats[2]);
        let hero = createHero(name, hp, mana);
        heroParty.set(name, hero);
    }
    let command = arrInput.shift();

    while (command !== "End") {
        let tokens = command.split(" - ");
        let action = tokens.shift();
        let heroName = tokens.shift();

        switch (action) {
            case "CastSpell":
                let heroToCast = heroParty.get(heroName);
                let mpNeeded = Number(tokens.shift());
                let spellName = tokens.shift();
                heroToCast.castSpell(mpNeeded, spellName);
                command = arrInput.shift();
                break;
            case "TakeDamage":
                let heroToTakeDamage = heroParty.get(heroName);
                let damage = Number(tokens.shift());
                let crook = tokens.shift();
                heroToTakeDamage.takeDamage(damage, crook);
                command = arrInput.shift();
                break;
            case "Recharge":
                let heroToRecharge = heroParty.get(heroName);
                let amount = Number(tokens.shift());
                heroToRecharge.recharge(amount);
                command = arrInput.shift();
                break;
            case "Heal":
                let heroToHeal = heroParty.get(heroName);
                let amountToHeal = Number(tokens.shift());
                heroToHeal.heal(amountToHeal);
                command = arrInput.shift();
                break;
        }
    }
    for(let value of heroParty.values()){
        value.toString();
    }
}
heroesOfCode([
    "4",
"Adela 90 150",
"SirMullich 70 40",
"Ivor 1 111",
"Tyris 94 61",
"Heal - SirMullich - 50",
"Recharge - Adela - 100",
"CastSpell - Tyris - 1000 - Fireball",
"TakeDamage - Tyris - 99 - Fireball",
"TakeDamage - Ivor - 3 - Mosquito",
"End"
]
)