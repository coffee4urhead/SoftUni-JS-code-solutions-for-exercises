function sumOfFirstAndLast(arr){
    let copy = arr.slice();
    let lastElement = Number(copy.pop());
    let firstElement = Number(copy.shift());
    console.log(firstElement + lastElement);
}
sumOfFirstAndLast(['20', '30', '40'])