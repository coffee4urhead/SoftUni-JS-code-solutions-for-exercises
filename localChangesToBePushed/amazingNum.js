function mama(num){
    num = num.toString();
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    let result = sum.toString().includes("9");
    console.log(result === true ? `${num} Amazing? True` : `${num} Amazing? False`)
    
}