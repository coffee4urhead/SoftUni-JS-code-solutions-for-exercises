function calculate(numOne, numTwo, operator) {
    let doingTheOperator = 0;
    switch (operator) {
        case "multiply":
            doingTheOperator = numOne * numTwo;
            break;
        case "divide":
            doingTheOperator = numOne / numTwo;
            break;
        case "add":
            doingTheOperator = numOne + numTwo;
            break;
        case "subtract":
            doingTheOperator = numOne - numTwo;
            break;
}
console.log(doingTheOperator);
}
calculate(40,8, "divide")