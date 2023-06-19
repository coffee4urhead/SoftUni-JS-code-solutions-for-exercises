function worldTour(input) {
    function isIndexValid(i, str){
        if(i >= 0 && i < str.length - 1){
            return true;
        }else{
            return false;
        }
    }
    let stops = input.shift();
    let commandString = input.shift();

    while (commandString !== "Travel") {
        let tokens = commandString.split(":");
        let action = tokens.shift();

        switch (action) {
            case "Add Stop":
            let index = Number(tokens.shift());
            let string = tokens.shift();
            if(!isIndexValid(index, stops)){
                break;
            }else{
                let firstHalf = stops.substring(0, index);
                let secondHalf = stops.substring(index);
                stops = firstHalf + string + secondHalf;
            }
            console.log(stops);
                break;
            case "Remove Stop":
                let start = Number(tokens.shift());
                let end = Number(tokens.shift());
                if(isIndexValid(start, stops) && isIndexValid(end, stops)){
                    let removedPart = stops.substring(start, end + 1);
                    stops = stops.replace(removedPart, "");
                }else{
                    break;
                }
                console.log(stops);
                break;
            case "Switch":
                let oldStr = tokens.shift();
                let newStr = tokens.shift();
                    while(stops.includes(oldStr)){
                        stops = stops.replace(oldStr, newStr);
                    }
                console.log(stops);
                break;
        }
        commandString = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to contribute to this problem!
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])

