function poundsToDollars(char1, char2, char3){
    let concatenation = char1 + char2 + char3;
    let reversion = concatenation.split("").reverse().join(" ");
    console.log(reversion);
  }