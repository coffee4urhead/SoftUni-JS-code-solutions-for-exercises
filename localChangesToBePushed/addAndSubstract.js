function addAndsubstract(arr){
    let newArr = [];
    let sumOfAriginalArr = 0
    let sumOfModedArr = 0;
    for(let i = 0; i < arr.length; i++){
        let currentNum = Number(arr[i]);
        sumOfAriginalArr += currentNum;
        if(currentNum % 2 === 0){
            currentNum += i;
        }else{
            currentNum -= i;
        }
        sumOfModedArr += currentNum;
        newArr[i] = currentNum;
    }
    console.log(newArr);
    console.log(sumOfAriginalArr);
    console.log(sumOfModedArr);
}
addAndsubstract([5, 15, 23, 56, 35])