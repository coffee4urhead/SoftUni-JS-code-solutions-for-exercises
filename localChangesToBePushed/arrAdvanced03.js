function firstAndLastKNums(arr){
    let copy = arr.slice();
    let howMuchElements = copy.shift();
    let firstElements = copy.slice(0, howMuchElements);
    let lastElements = copy.slice(firstElements.indexOf(firstElements[1]), arr.length);
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));

}
firstAndLastKNums([2, 6, 7, 8, 9])
