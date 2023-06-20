function stringSubstring(word, text){
    let splt = text.split(" ");
    let isFound = false;
    for(let el of splt){
        if(el.length === word.length){
            console.log(word);
            isFound = true;
            break;
        }
    }
    if(!isFound){
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)