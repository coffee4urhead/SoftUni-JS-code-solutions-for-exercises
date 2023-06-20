function tets(arr1, arr2){
    let sum = 0;
    let flag = false;
    let counter = 0;
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            counter += i;
            let currentNum2 = Number(arr2[j]);
            let currentNum = Number(arr1[i]);
            if(currentNum === currentNum2){
                sum += currentNum;
            }else{
                flag = true;
                break;
            }
        }
        if(flag === true){
            break;
        }
    }
    console.log(`Arrays are not identical. Found difference at ${counter} index`);
    if(flag === false){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
tets(['10','20','30'],['10','20','30'])