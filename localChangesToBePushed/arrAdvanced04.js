function lastKNumsSequence(n,k){
    // granica za nashiq sequence of elements is n
    // every el is the sum of the previous el (Chisla na Fibonachi)
    // the first el is 1
    let seq = [1];
    for(let current = 1; current < n; current++){
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum = start + end;// todo: Sum the vals of seq[start....end]
        seq[current] = sum;
    }
    console.log(seq.join(" "));
}
lastKNumsSequence(6, 3)