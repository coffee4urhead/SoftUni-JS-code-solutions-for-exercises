let reegx = /[a-z][a-z]/g;
let reg = new RegExp('/[a-z][a-z]/', 'g');
// write reg with classes like new Regexp
// better with reg literal /.../k
let str = 'a1b1b1b1b1b1';
let result = str.match(/b1/g);
// when we include the g flah we are looking for all matches in str 
// it gives us only the array wth the groups and indexes unlike when we do not use it
console.log(result.length);