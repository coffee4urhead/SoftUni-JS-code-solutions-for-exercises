function softUniBarIncome(data){
    let totalMoney = 0;
    let patternValidation = /%(?<name>[A-Z][a-z]+)%[^$%|.]*<(?<product>\w+)>[^$%|.]*\|(?<count>\d+)\|[^$%|.0-9]*(?<price>[0-9]+.?\d*)\$/;
    for(let line of data){
        if(line === "end of shift"){
            break;
        }
        if(patternValidation.test(line)){
            let customerInp = patternValidation.exec(line);
            let name = customerInp.groups.name;
            let product = customerInp.groups.product;
            let count = customerInp.groups.count;
            let price = customerInp.groups.price;
            let priceForFood = Number(count) * Number(price);
            totalMoney += priceForFood;
            console.log(`${name}: ${product} - ${priceForFood.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalMoney.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)