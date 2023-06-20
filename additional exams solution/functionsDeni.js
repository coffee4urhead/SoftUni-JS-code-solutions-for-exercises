function palindromes(pass) {
    let totalChars = 0;
    let currentChar = 0;
    let totalNumbers = 0;
    let nzVeche = 0;
    let flag = true;
    let passArr = pass.split("");
    for (let i = 0; i < passArr.length; i++) {
        currentChar = passArr[i];
        let isThereANum = /[0-9]/.test(currentChar);
        let isThereAChar = currentChar.match(/^[A-Za-z0-9]*$/) !== null
        if (isThereANum === true) {
            totalNumbers += 1;
        }
        if (isThereAChar === false) {
            flag = false;
        }

    }
    totalChars = passArr.length;
     if(totalChars < 6 || totalChars > 10) {
        console.log("Password must be between 6 and 10 characters");
        nzVeche++;
    }

    if (flag === false) {
        console.log("Password must consist only of letters and digits");
        nzVeche++;
    }

    if (totalNumbers < 2) {
        console.log("Password must have at least 2 digits");
        nzVeche++;
    }
    if(nzVeche === 0){
        console.log("Password is valid");
    }
    


} palindromes('qjmi$')