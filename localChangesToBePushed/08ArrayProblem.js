function arrayProblem(arr){
    let sum = 0;
    let condenced = [arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        if(arr.length === 1){
            break;
        }
        if(i === arr.length - 1){
            condenced[i] = Number(arr[i - 1]) + Number(arr[i - 2]);
        arr[i] = condenced[i];
            continue;
        }
        condenced[i] = Number(arr[i]) + Number(arr[i + 1]);
        arr[i] = condenced[i];
    }
    for (const j of condenced) {
        sum += j;
    }
    if(arr.length === 1){
        console.log(arr[0]);
    }else{
        console.log(sum);
    }
}
arrayProblem([5])