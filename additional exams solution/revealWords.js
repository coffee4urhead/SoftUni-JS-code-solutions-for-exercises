function revealWords(words, text){
    let word = words.split(", ");
    let wordsInText = text.split(" ");
    for(let el of word){
        for(let i = 0; i < wordsInText.length; i++){
            if(wordsInText[i].includes("*")){
                if(wordsInText[i].length === el.length){
                    wordsInText[i] = el;
                }
            }
        }
    }
    console.log(wordsInText.join(" "));
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)