function thePianist(input) {
    function makePianoList(song, singer, inpKey){
        let pianoList = {
            piece: [song],
            composer: singer,
            key: inpKey,
            add(inpPiece, inpComposer, inputKey) {
                if (this.piece.includes(inpPiece)) {
                    console.log(`${inpPiece} is already in the collection!`);
                } else {
                    console.log(`${inpPiece} by ${inpComposer} in ${inputKey} added to the collection!`);
                }
            },
            remove(pieceToRem) {
                if (this.piece.includes(pieceToRem)) {
                    this.piece = this.piece.filter(el => el !== pieceToRem);
                    console.log(`Successfully removed ${pieceToRem}!`)
                } else {
                    console.log(`Invalid operation! ${pieceToRem} does not exist in the collection.`);
                }
            },
            changeKey(pieceToChangeKey, newKey) {
                if (this.piece.includes(pieceToChangeKey)) {
                    this.key = newKey;
                    console.log(`Changed the key of ${pieceToChangeKey} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToChangeKey} does not exist in the collection.`);
                }
            }
        }
        return pianoList;
    }


    let piecesToFollow = Number(input.shift());
    let pianistList = new Map();
    for (let i = 0; i < piecesToFollow; i++) {
        let info = input.shift().split("|");
        let piece = info.shift();
        let composer = info.shift();
        let key = info.shift();
        let pianoListMade = makePianoList(piece, composer, key);
        pianistList.set(piece, pianoListMade);
    }
    let comms = input.shift();
    console.table(pianistList);
    for(let el of pianistList.keys()){
        console.log(el)
    }
    
    while (comms !== "Stop") {
        let tokens = comms.split("|");
        let action = tokens.shift();
        let piece = tokens.shift();

        switch (action) {
            case "Add":
                let comp = tokens.shift();
                let key = tokens.shift();
                let objCharacters = Object.values(pianistList.get(piece));
                for(let j = 0; j < 1; j++){
                    let objToAdd = objCharacters[j];
                    objToAdd.add(piece, comp, key);
                }
                break;
            case "Remove":
                let objToRem = pianistList.get(piece);
                objToRem.remove(piece);
                break;
            case "ChangeKey":
                let newKey = tokens.shift();
                let objToChangeKey = pianistList.get(piece);
                objToChangeKey.changeKey(piece, newKey);
                break;
        }
    }
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to contribute to this problem!
}
thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)