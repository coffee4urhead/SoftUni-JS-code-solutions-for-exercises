function arrayProblem(num){
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num < 1 || num > 7){
        console.log("Invalid day!");
    }else{
        console.log(daysOfWeek[num - 1]);
    }
}
arrayProblem(3)