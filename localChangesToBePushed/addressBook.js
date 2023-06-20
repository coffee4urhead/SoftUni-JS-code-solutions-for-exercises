function address(input){
    let dixt = {};
    for (let el of input) {
        let [name, address] = el.split(":");
        dixt[name] = address;
    }
    let sorting = Object.keys(dixt).sort((a,b) => a.localeCompare(b));
    for (let el of sorting) {
        console.log(`${el} -> ${dixt[el]}`);
    }
}
address(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)