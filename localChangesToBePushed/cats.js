function cats(input){
class Cat{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
for(let el of input){
        let [name, age] = el.split(" ");
        let newCat = new Cat(name, age);
        newCat.meow();
}
}
cats(['Mellow 2', 'Tom 5'])