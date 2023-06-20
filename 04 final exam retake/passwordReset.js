function resetPassword(input) {
    let password = input.shift();
    let commandsToFollow = input.shift();

    while (commandsToFollow !== "Done") {
        let tokens = commandsToFollow.split(" ");
        let action = tokens.shift();

        switch (action) {
            case "TakeOdd":
                let arrFromPassword = Array.from(password);
                let oddCharacters = arrFromPassword.filter((val, index) => index % 2 !== 0);
                password = oddCharacters.join("");
                console.log(password);
                break;
            case "Cut":
                let index = Number(tokens.shift());
                let length = Number(tokens.shift());
                let strToCut = password.substring(index, length + index);
                password = password.replace(strToCut, "");
                console.log(password);
                break;
            case "Substitute":
                let substr = tokens.shift();
                let substitute = tokens.shift();
                if(password.includes(substr)){
                    while(password.includes(substr)){
                        password = password.replace(substr, substitute);
                    }
                    console.log(password);
                }else{
                    console.log("Nothing to replace!");
                }
                break;
        }
        commandsToFollow = input.shift();
    }
    console.log(`Your password is: ${password}`);
    // Special regards and thank to SoftUni for providing efficient problems
}
resetPassword(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

