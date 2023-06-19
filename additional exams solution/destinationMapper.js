function destinationMapper(str){
    let regex = /([=\/])(?<wordOne>[A-Z]+[a-z]{2,})\1/gm
    let destinations = regex.exec(str);
    let matches = [];
    while(destinations !== null){
        let firstDest = destinations.groups.wordOne;
        matches.push(firstDest);
        destinations = regex.exec(str);
    }
    let travelPoints;
    let string = "";
    if(matches.length >= 1){
         for(let el of matches){
            string += el;
         }
         travelPoints = string.length;
    }else{
        travelPoints = 0;
    }
    console.log(`Destinations: ${matches.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
    //Shoutout to SoftUni founded by Svetlin Nakov for being able to contribute to this problem!
}
destinationMapper("=Rothschildstr=/Mamasita/")
