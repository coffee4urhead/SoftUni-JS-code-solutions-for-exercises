function employees(input){
    let obj = {};
    for(let names of input){
        obj[names] = names.length;
    }
    
    for(let el of Object.keys(obj)){
        console.log(`Name: ${el} -- Personal Number: ${obj[el]}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )