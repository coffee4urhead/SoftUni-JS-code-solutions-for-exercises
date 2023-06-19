function plantDiscovery(input) {
    function makePlant(plName, plRarity) {
        let plant = {
            plantName: plName,
            plantRarity: plRarity,
            rating: [],

            rate(plant, rating) {
                this.rating.push(rating);
            },
            updateRarity(plant, rarity) {
                this.plantRarity = rarity;
            },
            reset(plantToReset) {
                this.rating = [];
            },
            formAverageRating(){
                let average = 0;
                for(let j = 0; j < this.rating.length; j++){
                    let el = Number(this.rating[j]);
                    average += el;
                }
                average /= this.rating.length;
                return average;
            },
            toString(averageRating){
                if(averageRating > 0){
                    console.log(`- ${this.plantName}; Rarity: ${this.plantRarity}; Rating: ${averageRating.toFixed(2)}`);
                }else if(averageRating === 0){
                    console.log(`- ${this.plantName}; Rarity: ${this.plantRarity}; Rating: ${averageRating.toFixed(2)}`);
                }
            }
        }
        return plant;
    }
    let plantsToRegister = Number(input.shift());
    let plantsRegister = new Map();

    for (let i = 0; i < plantsToRegister; i++) {
        let command = input.shift();
        let info = command.split("<->");
        let plantName = info.shift();
        let rarity = Number(info.shift());
        let plantSpecies = makePlant(plantName, rarity);
        if(plantsRegister.has(plantName)){
            let currentRarity = plantsRegister.get(plantName);
            plantsRegister.set(plantName, plantSpecies.updateRarity(plantName, currentRarity + rarity));
        }else{
            plantsRegister.set(plantName, plantSpecies);
        }
    }
    let commandsToFollow = input.shift();

    while (commandsToFollow !== "Exhibition") {
        let tokens = commandsToFollow.split(": ");
        let action = tokens.shift();

        switch (action) {
            case "Rate":
                let infoForPlant = tokens.shift().split(" - ");
                let plant = infoForPlant.shift();
                if(!plantsRegister.has(plant)){
                    console.log("error");
                    break;
                }
                let rating = Number(infoForPlant.shift());
                let plantToUse = plantsRegister.get(plant);
                plantToUse.rate(plant, rating);
                break;
                case "Update":
                    let characteristics = tokens.shift().split(" - ");
                    let pl = characteristics.shift();
                    if(!plantsRegister.has(pl)){
                        console.log("error");
                        break;
                    }
                    let newRarity = Number(characteristics.shift());
                    let plantToUpdate = plantsRegister.get(pl);
                    plantToUpdate.updateRarity(pl, newRarity);
                    break;
                    case "Reset":
                    let plantToReset = tokens.shift();
                    if(!plantsRegister.has(plantToReset)){
                        console.log("error");
                        break;
                    }
                    let theExactPlantToBeReset = plantsRegister.get(plantToReset);
                    theExactPlantToBeReset.reset(plantToReset);
                    break;
        }
        commandsToFollow = input.shift();
    }
    console.log("Plants for the exhibition:");
    for(let valObjectPlant of plantsRegister.values()){
        let averageForCurrentPlant;
        if(valObjectPlant.rating == 0){
            averageForCurrentPlant = 0.00;
            valObjectPlant.toString(averageForCurrentPlant);
        }else{
            averageForCurrentPlant = valObjectPlant.formAverageRating();
            let parsedToSecondDecimalPlace = Number(averageForCurrentPlant.toFixed(2));
            valObjectPlant.toString(parsedToSecondDecimalPlace);
        }
    }
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to contribute to this problem!
}
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])

