function negativeOrPositive(arr){
    let copyOfTheArr = arr.slice();
    let newArr = [];
    for(let el of copyOfTheArr){
        if(el < 0){
            newArr.unshift(el);
        }else{
            newArr.push(el)
        }
    }
    console.log(newArr.join("\n"));
}
negativeOrPositive(['3', '-2', '0', '-1'])