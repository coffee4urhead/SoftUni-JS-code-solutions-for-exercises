function repeatingString(str, copyTimes){
    let result = "";
    for(let i = 0; i < copyTimes; i++){
        result += str
    }
    return result
}
repeatingString("abc", 3)