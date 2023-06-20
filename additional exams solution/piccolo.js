function piccolo(data){
    let assocArr = new Set();
    for(let el of data){
        let [direction, carNumber] = el.split(", ");
        switch(direction){
            case "IN":
                assocArr.add(carNumber);
                break;
                case "OUT":
                    assocArr.delete(carNumber);
                    break;
        }
        if(assocArr.size === 0){
            console.log("Parking Lot is Empty");
            return;
        }
    }
    let sorting = Array.from(assocArr).sort((a,b) => a.localeCompare(b));
    for(let el of sorting){
        console.log(el);
    }
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])