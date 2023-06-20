function reception(input){
    let effic1 = Number(input[0]);
    let effic2 = Number(input[1]);
    let effic3 = Number(input[2]);
    let studentsCount = Number(input[3]);
    let hoursCounter = 1;
    let notAnsSd = 0;

    let studentsPerHour = effic1 + effic2 + effic3;
    while(true){
        if(hoursCounter === 1){
            notAnsSd += studentsCount - studentsPerHour;
        }else{
            studentsPerHour += studentsPerHour;
            notAnsSd -= studentsPerHour;
        }
        if(notAnsSd <= 0){
            break;
        }
        hoursCounter++;
        if(hoursCounter % 4 === 0){
            continue;
        }
    }
    console.log(`Time needed: ${hoursCounter}h.`);

}
reception(['1','2','3','45'])