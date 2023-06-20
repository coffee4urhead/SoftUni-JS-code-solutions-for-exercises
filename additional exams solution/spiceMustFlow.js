function spices(yield){
    let workersTake = 26;
    let minedSpices = yield;
    let daysCount = 0;
    let sumOfAllMinigs = 0;
    let afterTake = 0;
    while(yield >= 100){
        daysCount++;
        minedSpices = yield - workersTake;
        sumOfAllMinigs += minedSpices;
        yield -= 10;
    }
    if(sumOfAllMinigs < 26){
        console.log(daysCount);
        console.log(sumOfAllMinigs);
    }else{
        afterTake = sumOfAllMinigs - 26;
    console.log(daysCount);
    console.log(afterTake);
    }
}