function pirates(input){
    let plundCounter = 0;
    let final = 0;
    let days = Number(input[0]);
    let dailyPlund = Number(input[1]);
    let expectedPlund = Number(input[2]);
   
    for(let i = 1; i <= days; i++){
        if(i % 3 === 0){
            plundCounter += dailyPlund + (dailyPlund / 2);
        } else if(i % 5 === 0){
            plundCounter += dailyPlund;
            plundCounter = plundCounter  * 0.70;
        } else{ 
            plundCounter += dailyPlund;
        }
    }
    if(plundCounter >= expectedPlund){
        console.log(`Ahoy! ${plundCounter.toFixed(2)} plunder gained.`);
    } else{
        final = (100 * plundCounter) / expectedPlund;
        console.log(`Collected only ${final.toFixed(2)}% of the plunder.`);
    }

}pirates(["5",
"40",
"100"])
