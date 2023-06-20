function managingStorage(input){
    let obj = new Map();
    for (let el of input) {
        let tokens = el.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if(obj.has(product)){
            let thatQuantity = obj.get(product);
            obj.set(product, quantity + thatQuantity);
        }else{
            obj.set(product, quantity);
        }
    }
    for (let [key, quantity] of obj) {
        console.log(`${key} -> ${quantity}`);
    }
}
managingStorage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)