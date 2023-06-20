function stringDecoding(input){
    let encryptedMessage = input.shift();
    for(let line of input){
        let tokens = line.split("|");
        let command = tokens.shift();
        switch(command){
            case "ChangeAll":
            let substr = tokens[0];
            let replacement = tokens[1];
                while(encryptedMessage.includes(substr)){
                    encryptedMessage = encryptedMessage.replace(substr, replacement);
                }
                break;
            case "Insert":
                let index = Number(tokens[0]);
                let value = tokens[1];
                let beforePart = encryptedMessage.substring(0, index);
                let afterPart = encryptedMessage.substring(index);
                encryptedMessage = beforePart + value + afterPart
                break;
            case "Move":
                let movings = Number(tokens[0]);
                let lettersToMove = encryptedMessage.substring(0, movings);
                encryptedMessage = encryptedMessage.replace(lettersToMove, "");
                encryptedMessage += lettersToMove;
                break;
            case "Decode":
                console.log(`The decrypted message is: ${encryptedMessage}`);
                return;
        }
    }
}
stringDecoding([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]  
  )