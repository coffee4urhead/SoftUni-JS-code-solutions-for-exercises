function needForSpeed(input) {
    function makeCars(inpModel, inpMileage, inpFuel) {
        let carToMake = {
            car: inpModel,
            mileage: inpMileage,
            fuel: inpFuel,

            drive(carToDrive, distance, fuelToDrive) {
                if (this.fuel < fuelToDrive) {
                    console.log("Not enough fuel to make that ride");
                } else {
                    this.mileage += distance;
                    this.fuel -= fuelToDrive;
                    console.log(`${carToDrive} driven for ${distance} kilometers. ${fuelToDrive} liters of fuel consumed.`);
                }
                if(this.mileage >= 100_000){
                    console.log(`Time to sell the ${carToDrive}!`);
                    carList.delete(this.car);
                }
            },
            refuel(carToRefuel, fuelToAdd) {
                let amountToActFill = Math.min(fuelToAdd, 75 - this.fuel);
                this.fuel += amountToActFill;
                console.log(`${carToRefuel} refueled with ${amountToActFill} liters`);
            },
            revert(carToRevert, kilometers) {
                if(this.mileage - kilometers >= 10_000){
                    this.mileage -= kilometers;
                    console.log(`${carToRevert} mileage decreased by ${kilometers} kilometers`);
                }else{
                    this.mileage = 10_000;
                }
            },
            toString(){
                console.log(`${this.car} -> Mileage: ${this.mileage} kms, Fuel in the tank: ${this.fuel} lt.`);
            }
        }
        return carToMake;
    }
    let numberOfCarsToRegister = Number(input.shift());
    let carList = new Map();

    for (let i = 0; i < numberOfCarsToRegister; i++) {
        let carsInfo = input.shift().split("|");
        let carModel = carsInfo.shift();
        let mileage = Number(carsInfo.shift());
        let carFuel = Number(carsInfo.shift());
        let car = makeCars(carModel, mileage, carFuel);
        carList.set(carModel, car);
    }
    let commandsToFollow = input.shift();

    while (commandsToFollow !== "Stop") {
        let tokens = commandsToFollow.split(" : ");
        let action = tokens.shift();
        let carToBeInAction = tokens.shift();

        switch (action) {
            case "Drive":
                let distanceToDrive = Number(tokens.shift());
                let fuelToBurn = Number(tokens.shift());
                let carToDrive = carList.get(carToBeInAction);
                carToDrive.drive(carToBeInAction, distanceToDrive, fuelToBurn);
                break;
            case "Refuel":
                let fuelAmountToRefill = Number(tokens.shift());
                let carToRefill = carList.get(carToBeInAction);
                carToRefill.refuel(carToBeInAction, fuelAmountToRefill);
                break;
            case "Revert":
                let kilometersToRevert = Number(tokens.shift());
                let carToRevert = carList.get(carToBeInAction);
                carToRevert.revert(carToBeInAction, kilometersToRevert);
                break;
        }
        commandsToFollow = input.shift();
    }
    for(let carValues of carList.values()){
        carValues.toString();
    }
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to provide this problem!
}
needForSpeed(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
      ]      
)