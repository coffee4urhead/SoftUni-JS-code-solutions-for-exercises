function companyUsers(data){
    let assocArr = new Map();
    for(let el of data){
        let [company, emplId] = el.split(" -> ");
        if(!assocArr.has(company)){
            assocArr.set(company, new Set());
        }
        assocArr.get(company).add(emplId);
    }
    let sorting = Array.from(assocArr.entries()).sort(([keyA, valA], [keyB, valB]) => keyA.localeCompare(keyB));
    for(let[k, v] of sorting){
        console.log(k);
        for(let el of Array.from(v)){
            console.log(`-- ${el}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )