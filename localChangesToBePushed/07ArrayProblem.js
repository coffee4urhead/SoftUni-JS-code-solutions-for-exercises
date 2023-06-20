function arrayProblem(arr1, arr2){
    let sum = 0;
    let areEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        if(Number(arr1[i]) !== Number(arr2[i])){
            console.log( `Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }else if(areEqual){
            sum += Number(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
        
    }
    if(areEqual === true){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
arrayProblem(['1'], ['10'])