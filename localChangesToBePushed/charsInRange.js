function charsInRange(charA, charB){
    let stringValueFromA = charA.charCodeAt(charA);
    let stringValB = charB.charCodeAt(charB);
    function findThelowestNum (a,b){
        return Math.min(a,b);
    }
    function findTheHighestNum (a,b){
        return Math.max(a,b)
    }
    let startIndex = findThelowestNum(stringValueFromA, stringValB);
    let finishIndex = findTheHighestNum(stringValueFromA, stringValB);
    let buff = "";
    for(let i = startIndex + 1; i < finishIndex; i++){
        buff += String.fromCharCode(i) + " ";
    }
    console.log(buff);
}
charsInRange("a","d")