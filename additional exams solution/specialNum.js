function solveNumbers(Num) {
    let sum = 0;
    for (let currentNum = 1; currentNum <= Num; currentNum++) {
        sum++;
        switch (sum) {
            case 5:
                console.log(`${currentNum} -> True`);
                break;
            case 7:
                console.log(`${currentNum} -> True`);
                break;
            case 11:
                console.log(`${currentNum} -> True`);
                break;



            default:
                console.log(`${currentNum} -> False`);
                continue;
        }


    }
}