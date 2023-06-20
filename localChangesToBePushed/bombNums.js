function bombNums(arrOfNums, arrDescribingTheBomb){
    let bombNum = Number(arrDescribingTheBomb[0]);
    let bombPower = Number(arrDescribingTheBomb[1]);

    arrOfNums.splice(bombPower, bombNum + 1)
    console.log(arrOfNums);
}
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3])