function searchForNums(mainArr, manipulativeArr){
    let occurences = 0;
    let neededNums = Number(manipulativeArr[0]);
    let deleteCount = Number(manipulativeArr[1]);
    let demandedNum = Number(manipulativeArr[2]);
    let newArr = [];
    for(let i = 0; i < neededNums; i++){
         newArr.push(mainArr[i])
    }
    newArr.splice(0,deleteCount);
    for(let i = 0; i < newArr.length; i++){
        if(newArr.includes(demandedNum)){
            occurences++;
            console.log(`Number ${demandedNum} occurs ${occurences} times.`);
            break;
        }
    }
}
searchForNums([7, 1, 5, 8, 2, 7],

    [3, 1, 5])