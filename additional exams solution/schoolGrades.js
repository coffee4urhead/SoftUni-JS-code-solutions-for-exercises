function grades(input){
    let students = new Map();
    for(let lines of input){
        let currentStudentInfo = lines.split(" ");
        let name = currentStudentInfo.shift();
        let sum = 0;
        for(let i = 0; i < currentStudentInfo.length; i++){
            sum += Number(currentStudentInfo[i]);
        }
        let avgGrade = sum / currentStudentInfo.length;
        if(!students.has(name)){
            students.set(name, avgGrade);
        }else{
            let oldAvg = students.get(name);
            let newAvg = (oldAvg + avgGrade) / 2;
            students.set(name, newAvg)
        }
    }
    let sroting = Array.from(students.entries()).sort(([keyA, valA], [keyB, valB]) => keyA.localeCompare(keyB));
    for(let [k, v] of sroting){
        console.log(`${k}: ${v.toFixed(2)}`);
    }
}
grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)