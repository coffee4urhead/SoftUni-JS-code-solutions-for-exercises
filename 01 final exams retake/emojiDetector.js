function emojiDetector(stringContainingEmojies){
    function getCoolnessOfEmoji(emojiToDetermine){
        let sumOfAsciiVals = 0;
        for(let character of emojiToDetermine){
            let valueOfAcii = character.charCodeAt(0);
            sumOfAsciiVals += valueOfAcii;
        }
        return sumOfAsciiVals;
    }
    let regex = /(?<splt>[:*]{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/gm;
    let regexDetermingTheCoolThreshold = /(?:\d{1})/gm

    let numsMatches = stringContainingEmojies[0].match(regexDetermingTheCoolThreshold);
    let coolThreshold = numsMatches.map(Number).reduce((acc, val) => acc *= val);
    let executionOverTheString = regex.exec(stringContainingEmojies);
    let passTheCoolThreshold = [];
    let allEmojiMatches = [];

    while(executionOverTheString !== null){
        let emoji = executionOverTheString.groups.emoji;
        let splittor = executionOverTheString.groups.splt;
        let emojiSurroundedBySplitter = splittor + emoji + splittor;
        let coolnessOfTheEmoji = getCoolnessOfEmoji(emoji);
        allEmojiMatches.push(emojiSurroundedBySplitter);

        if(coolnessOfTheEmoji > coolThreshold){

            passTheCoolThreshold.push(emojiSurroundedBySplitter);
        }

        executionOverTheString = regex.exec(stringContainingEmojies);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${allEmojiMatches.length} emojis found in the text. The cool ones are:`);
    for(let el of passTheCoolThreshold){
        console.log(el);
    }
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to provide this problem!
}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])