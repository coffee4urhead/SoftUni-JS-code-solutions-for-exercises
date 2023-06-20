function listOfProducts(arr){
    let sorting = arr.sort();
    for(let i = 1; i <= sorting.length; i++){
        console.log(`${i}.${sorting[i - 1]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])