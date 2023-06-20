function catalogue(data){
    let res = {};
    for(let el of data){
        let [product, price] = el.split(" : ");
        res[product] = Number(price);
    }
    let sorting = Object.keys(res).sort((a,b) => a.localeCompare(b));
    let firstChar = '';
    for(let keys of sorting){
        let name = keys;
        if(firstChar !== name[0]){
            firstChar = name[0];
            console.log(firstChar);
        }
        let price = res[keys];
        console.log(`  ${name}: ${price}`);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )