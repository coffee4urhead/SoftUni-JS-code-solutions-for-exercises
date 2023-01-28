function dungeonAdventures(input) {
    let health = 100;
    let coins = 0;
    let rooms = input[0].split("|");
    /*
    This command basically splits our input string declared at input[0]
    so the expected output will be an array, constructed by all rooms and points they take or add
    */
    let roomsCounter = 0;
    /*
    the rooms counter will be in great help in order to measure if we succeeded in our adventure quest
     */
    let isOver = false;
    /*this flag boolean is specifically used to break the for of loop when we lose all of ou health points
     */
    for (let room of rooms) {
        roomsCounter++;
        let command = room.split(" ");
        /* the command variable helps us split the "room points" all in string into
        array with differed elements room and value of health/coins it will add/take
         */
        let adventure = command[0];
        /*
        The "adventure" variable is mainly called in order to know what type of room we will be going
        through
         */
        let valueOfAdventure = Number(command[1]);
        /*
        The same goes for the "valueOfAdventure" variable that signifies the total points 
        it will take/add into our in-game progress
         */
        switch (adventure) {
            /*There are potentially 3 possible cases : potion/heals player/; chest/gives certain amount of in-game coins/
            and monster case in which the player must fight with a boss that will eventually take all/part of his health
             */
            case "potion":
                if (valueOfAdventure + health > 100) {
                    valueOfAdventure = valueOfAdventure - (valueOfAdventure + health - 100);
                }
                health += valueOfAdventure;
                console.log(`You healed for ${valueOfAdventure} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += valueOfAdventure;
                console.log(`You found ${valueOfAdventure} coins.`);
                break;
            default:
                health -= valueOfAdventure;
                if (health > 0) {
                    console.log(`You slayed ${adventure}.`);
                } else {
                    console.log(`You died! Killed by ${adventure}.`);
                    console.log(`Best room: ${roomsCounter}`);
                    isOver = true;
                }
                break;
        }
        if (isOver) {
            break;
        }
    }
    if (!isOver) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonAdventures(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])