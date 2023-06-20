function arrayRotation(arr, numOfRotation){
    let newArr = [];
    for(let i = 0; i < numOfRotation, i++;){
        let firstElement = arr[0];
        for(let j = 1; j < arr.length; j++){
            newArr.push(arr[j]);
        }
        newArr.push(firstElement);
        arr = newArr;
        newArr = [];
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)