function arrManipulations(input) {
    let arr = input[0].split(" ").map(Number);
    let commands = input.slice(1);
    for(let i =0; i < commands.length; i++){
        let tokens = commands[i].split(" ");
        let command = tokens[0];
        let parameters = tokens.slice(1).map(Number);
        arr = executeCommand(command, parameters, arr);
    }
    return arr
    function executeCommand(command, parameters, arr){
        switch(command){
            case "Add": arr.push(parameters[0]); return arr;
                case "Remove": arr = arr.filter(x => x !== parameters[0]); return arr;
                    case "RemoveAt": arr.splice(parameters[0],1); return arr;
                        case "Insert": arr.splice(parameters[1], 0, parameters[0]); return arr.join(" ");
        }
        return arr.join("");
    }
}
console.log(arrManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']))