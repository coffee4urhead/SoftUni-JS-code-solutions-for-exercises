function arrays(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let pirateShipStatus = 0;
    let warShipStatus = 0;
    let flag = false;


    let maximumHealth = input.shift();
    let coersion = Number(maximumHealth)
    let command = input.shift();
    
    while(command !== "Retire"){
        let tokens = command.split(" ");
        let action = tokens.shift();
        
        switch(action){
            case "Fire":
                let index = Number(tokens[0]);
                let section = Number(tokens[1]);
                if(index < 0 || index > warship.length){
                    command = input.shift();
                    continue;
                }
                warship[index] -= section;
                if(warship[index] <= 0){
                    command = "Retire";
                    flag = true;
                    console.log("You won! The enemy ship has sunken.");
                    break;
                }
                break;
                case "Defend":
                    let startIndex = Number(tokens[0]);
                    let endIndex = Number(tokens[1]);
                    let damage = Number(tokens[2]);
                    if(startIndex < 0 || startIndex > pirateShip.length){
                            command = input.shift();
                        continue;
                        
                    }
                    if(endIndex < 0 || endIndex > pirateShip.length){
                        command = input.shift();
                        continue;
                    }
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage
                        if(pirateShip[i] <= 0){
                            command = "Retire";
                            flag = true;
                            console.log("You lost! The pirate ship has sunken.");
                            break;
                        }
                    }
                    break;
                    case "Repair":
                        let i = Number(tokens[0]);
                        let health = Number(tokens[1]);
                        if(i < 0 || i > pirateShip.length){
                            command = input.shift();
                            continue;
                        }
                        let maxHealth = coersion - pirateShip[i];
                        pirateShip[i] += Math.min(maxHealth, health);
                        break;
                        case "Status":
                            let repCount = 0;
                            for (let el of pirateShip) {
                                if(el < coersion * 0.2){
                                    repCount++;
                                }
                            }
                            console.log(`${repCount} sections need repair.`);
                            break;
        }
        if(flag !== true){
            command = input.shift();
        }
    }
    if(command === "Retire" && flag === false){
        for (let el of pirateShip) {
            pirateShipStatus += el;
        }
        console.log(`Pirate ship status: ${pirateShipStatus}`);
        for (let el of warship) {
            warShipStatus += el;
        }
        console.log(`Warship status: ${warShipStatus}`);
    }
}arrays(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 100",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

