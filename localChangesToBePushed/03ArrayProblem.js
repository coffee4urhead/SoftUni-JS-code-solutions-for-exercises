function arrayProblem(n, arr){
    let myArr = [];
    for (let i = n - 1; i >= 0; i--) {
        const element = arr[i];
        myArr.push(element);
    }
    console.log(myArr.join(" "));
}
arrayProblem(3, [10, 20, 30, 40, 50])