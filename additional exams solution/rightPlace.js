function binaryToDecimal(string1, char, string2){
    let changes = string1.replace("_", char);
    console.log(changes === string2 ? "Matched" : "Not Matched");
}