function regexing(input){
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");
    for(let line of input){
        if(line === "Purchase"){
            break;
        }
        if(pattern.test(line)){
            // .test testav dali machva patterna
            let furniture = pattern.exec(line);
            // .exec vzema grupite 
            let price = Number(furniture.groups.price) * Number(furniture.groups.quantity);
            console.log(furniture.groups.name);
            totalMoney += price;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
regexing(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)