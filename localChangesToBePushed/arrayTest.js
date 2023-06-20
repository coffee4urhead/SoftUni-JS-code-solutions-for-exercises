function solve(arr1, arr2) {
    let newArr = [];
    let flag = false
    //•	If the index of the element is even,
    // add into the third array the sum of both elements at that index
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(i % 2 === 0){
                newArr.push(Number(arr1[i]) + Number(arr2[j]));
            }else{
                newArr.push(arr1[i] + arr2[j]);
            }
        }
    }
    console.log(newArr.join(" - "));
}solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)