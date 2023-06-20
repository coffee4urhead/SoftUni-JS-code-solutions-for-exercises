function arrModifier(input){
    let arr = input.shift().split(" ").map(Number);
    let command = input.shift();
    let finale = [];

    while(command !== "end"){
        let tokens = command.split(" ");
        let action = tokens.shift();
        
        switch(action){
            case "swap":
                let index1 = Number(tokens[0]);
                let index2 = Number(tokens[1]);
                let del = arr.splice(index1,1,arr[index2])
                arr.splice(index2,1, del.join(""))
                break;
               case "multiply":
                   let i1 = Number(tokens[0]);
                   let i2 = Number(tokens[1]);
                   let firstEl = arr.slice(i1, i1 + 1);
                   let secondEl = arr.slice(i2, i2 + 1);
                   let result = firstEl.join("") * secondEl.join("");
                   arr.splice(i1,1, result)
                   break;
                   case "decrease":
                     finale = arr.map(x => x - 1)
                    break;
        }
        command = input.shift();
    }
    console.log(finale.join(", "));
}
arrModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]
  )