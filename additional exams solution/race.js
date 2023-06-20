function racing(data){
    let listOfPeople = {};
    let participantInput = data.shift().split(", ");
    let patternName = /[A-Za-z]/g;
    let patternDist = /[0-9]/g;
    for(let participant of participantInput){
        listOfPeople[participant] = 0;
    }
    for(let line of data){
        if(line === "end of race"){
            break;
        }
        let name = line.match(patternName).join("");
        let distance = line.match(patternDist);
        let tempDist = 0;
        for(let el of distance){
            tempDist += Number(el);
        }
        if(listOfPeople.hasOwnProperty(name)){
            listOfPeople[name] += tempDist;
        }
    }
    let sort = Object.entries(listOfPeople).sort(([keyA, valA], [keyB, valB]) => valB - valA);
    console.log(`1st place: ${sort[0][0]}`);
    console.log(`2nd place: ${sort[1][0]}`);
    console.log(`3rd place: ${sort[2][0]}`);
}
racing(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)