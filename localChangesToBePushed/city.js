function city(object){
    for(let el of Object.keys(object)){
        console.log(`${el} -> ${object[el]}`);
    }
}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })