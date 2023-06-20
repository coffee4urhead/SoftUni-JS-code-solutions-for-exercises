function provision(arrInStock, arrInDelivery){
    let obj = {};
    for(let i = 0; i < arrInStock.length; i+= 2){
        let names = arrInStock[i];
        let quantity = arrInStock[i + 1];
        obj[names] = Number(quantity);
    }
    for(let i = 0; i < arrInDelivery.length; i+= 2){
        let name = arrInDelivery[i];
        let quantity = Number(arrInDelivery[i + 1]);
        if('name' in obj){
            // 'property' in {object} proverqwa po cqlata weriga dali syshtestvuva takuw kluch po celiq object
            obj[name] += quantity;
        }else{
            obj[name] = quantity;
        }
    }
    for(let el of Object.keys(obj)){
        console.log(`${el} -> ${obj[el]}`);
    }
}
provision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )