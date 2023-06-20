function processOddNums(arr){
    let newArr = arr
    .filter((num, i) => i % 2 === 1)
    .map(x => x * 2)
    .reverse()
    console.log(newArr.join(" "));
}
processOddNums([10, 15, 20, 25])