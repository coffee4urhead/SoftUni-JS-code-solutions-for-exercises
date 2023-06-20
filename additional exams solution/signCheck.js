function checkSign(num1, num2, num3) {
    let sign = "Positive";
    let isNum1Negative = num1 < 0;
    sign = checkForSignChanges(sign, isNum1Negative)
    let isNum2Negative = num2 < 0;
    sign = checkForSignChanges(sign, isNum2Negative)
    let isNum3Negative = num3 < 0;
    sign = checkForSignChanges(sign, isNum3Negative)

    return sign
    function checkForSignChanges(sign, shouldCahnge) {
        if (shouldCahnge === false) {
            return sign;
        }
        if (sign === "Positive") {
            sign = "Negative";
        } else {
            sign = "Positive";
        }
        return sign
    }
}
console.log(checkSign(-6, -12, 14))