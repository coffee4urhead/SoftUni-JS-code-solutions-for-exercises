function imitationGame(input) {
    let secretMessage = input.shift();
    let commands = input.shift();

    while (commands !== "Decode") {
        let tokens = commands.split("|");
        let action = tokens.shift();

        switch (action) {
            case "Move":
                let numberOfLetters = Number(tokens.shift());
                let firstSplit = secretMessage.substring(0, numberOfLetters);
                let secondSplit = secretMessage.substring(numberOfLetters);
                secretMessage = secondSplit + firstSplit;
                break;
            case "Insert":
                let index = Number(tokens.shift());
                let val = tokens.shift();
                let insertion = secretMessage.substring(0, index);
                let secondInsertion = secretMessage.substring(index);
                secretMessage = insertion + val + secondInsertion;
                break;
            case "ChangeAll":
                let substr = tokens.shift();
                let replacement = tokens.shift();
                while(secretMessage.includes(substr)){
                    secretMessage = secretMessage.replace(substr, replacement);
                }
                break;
        }
        commands = input.shift();
    }
    console.log(`The decrypted message is: ${secretMessage}`);
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to contribute to this problem!
}
imitationGame(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode',
      ]
      
)