function sortByTwoDemands(input){
    input.sort((a,b) =>{
        if(a.length - b.length === 0){
            a.localeComspare(b);
        }
        a.length - b.length
    });
    console.log(input.join("\n"));
}
sortByTwoDemands(['alpha','beta','gamma'])