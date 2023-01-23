function pyramid(input) {
    let num = input[0];
    let currentDigit = 0
    for(let i = 0; i < num.length; i++){
         currentDigit = Number(num.charAt(num.length - 1))
        }
        switch(currentDigit) {
            case 1:
                console.log("one");
                break;
            case 2:
                console.log("two");
                break;
            case 3:
                console.log("three");
                break;
            case 4:
                console.log("four");
                break;
            case 5:
                console.log("five");
                break;
            case 6:
                console.log("six");
                break;
            case 7:
                console.log("seven");
                break;
            case 8:
                console.log("eight");
                break;
            case 9:
                console.log("nine");
                break;
            case 0:
                console.log("zero");
                break;
        }
        }
pyramid(["512"])