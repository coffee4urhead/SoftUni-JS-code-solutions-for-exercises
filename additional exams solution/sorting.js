function sort(arr) {
    arr.sort((a, b) => a - b);
   
    let sorted = [];
    while (arr.length !== 0) {
      sorted.push(arr.pop());
      sorted.push(arr.shift());
    }
   
    console.log(sorted.join(' '));
  }
  sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])