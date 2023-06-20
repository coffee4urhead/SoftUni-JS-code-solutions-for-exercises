function factorialDevisionBetweenTwoNums(num1,num2){
    let factorialCalcForFirstNum = 1;
    let factorialCalcForSecondNum = 1;
    for(let i = 1; i <= num1; i++){
        factorialCalcForFirstNum *= i;
    }
    for(let j = 1; j <= num2; j++){
        factorialCalcForSecondNum *= j;
    }
    let chastno = factorialCalcForFirstNum / factorialCalcForSecondNum;
    console.log(chastno.toFixed(2));
}
factorialDevisionBetweenTwoNums(5,2)