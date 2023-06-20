function arrayProblem(arr){
let sumOfEven = 0;
let sumOfOdds = 0;
    for (let index = 0; index < arr.length; index++) {
        arr[index] = Number(arr[index]);
        if(Number(arr[index]) % 2 === 0){
            sumOfEven += Number(arr[index]);
        }else{
            sumOfOdds += Number(arr[index]);
        }
    }
    console.log(sumOfEven - sumOfOdds);
}
arrayProblem([1,2,3,4,5,6])