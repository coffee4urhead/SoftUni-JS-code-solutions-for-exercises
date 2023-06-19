function pirates(input) {
    function makeTarget(inpTown, inpPopulation, inpGold) {
        let targetToMake = {
            town: inpTown,
            population: inpPopulation,
            gold: inpGold,

            plunder(city, peopleToMurder, goldToSteal) {
                this.population -= peopleToMurder;
                this.gold -= goldToSteal;
                console.log(`${city} plundered! ${goldToSteal} gold stolen, ${peopleToMurder} citizens killed.`);
                if (this.gold <= 0 || this.population <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    targetsList.delete(this.town);
                }
            },
            prosper(cityToProsper, goldAmount) {
                if (goldAmount <= 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    this.gold += goldAmount;
                    console.log(`${goldAmount} gold added to the city treasury. ${cityToProsper} now has ${this.gold} gold.`);
                }
            },
            toString(){
                console.log(`${this.town} -> Population: ${this.population} citizens, Gold: ${this.gold} kg`);
            }
        }
        return targetToMake;
    }
    let comamndStr = input.shift();
    let targetsList = new Map();

    while (comamndStr !== "Sail") {
        let tokens = comamndStr.split("||");
        let town = tokens.shift();
        let population = Number(tokens.shift());
        let gold = Number(tokens.shift());
        let target = makeTarget(town, population, gold);

        if (targetsList.has(town)) {

            let obj = targetsList.get(town);
            let currentPopulation = Number(obj.population);
            let currentGoldAmount = Number(obj.gold);
            currentPopulation += population;
            currentGoldAmount += gold;
            obj.population = currentPopulation;
            obj.gold = currentGoldAmount
            targetsList.set(town, obj);

        } else {
            targetsList.set(town, target);
        }

        comamndStr = input.shift();
    }
    let commandsToFollow = input.shift();

    while (commandsToFollow !== "End") {
        let info = commandsToFollow.split("=>");
        let action = info.shift();
        let townToBeInAction = info.shift();

        switch (action) {
            case "Plunder":
                let peopleToKill = Number(info.shift());
                let goldAmountToSteal = Number(info.shift());
                let objToPlunder = targetsList.get(townToBeInAction);
                objToPlunder.plunder(townToBeInAction, peopleToKill, goldAmountToSteal);
                break;
            case "Prosper":
                let goldGrowth = Number(info.shift());
                let townToProsper = targetsList.get(townToBeInAction);
                townToProsper.prosper(townToBeInAction, goldGrowth);
                break;
        }
        commandsToFollow = input.shift();
    }
    console.log(`Ahoy, Captain! There are ${targetsList.size} wealthy settlements to go to:`);
    for(let valObj of targetsList.values()){
        valObj.toString();
    }   
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to provide this problem!
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

