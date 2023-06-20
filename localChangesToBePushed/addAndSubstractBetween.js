function diffBetweenAdditionAndSubtraction(int1, int2, int3){
    let sum = 0;
    let summing = (int1, int2) => {
        sum = int1 + int2;
        return sum;
    }
    summing(int1, int2)
    let substraction = (sum, int3) => {
        return sum - int3;
    }
    console.log(substraction(sum, int3))
}
diffBetweenAdditionAndSubtraction(23,6,10)

