function charInOrder(charOne, charTwo) {
    let charOneNum = charOne.charCodeAt(0);
    let charTwoNum = charTwo.charCodeAt(0);
    let startIndex = Math.min(charOneNum, charTwoNum);
    let endIndex = Math.max(charOneNum, charTwoNum);
    let character = "";
    let counter = "";
    for(i = startIndex + 1; i < endIndex; i++){
        character = String.fromCharCode(i);
        counter += character + " ";
    }
    console.log(counter);
    
        
}charInOrder('a','d');
