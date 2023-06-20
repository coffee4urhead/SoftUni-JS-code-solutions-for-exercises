function classOfLaptop(){
    class Laptop{
        constructor(info, quality, isOn = false, getterPrice = Number(800 - (info.age * 2) + (this.quality * 0.5))){
            this.info = {
                producer: info.producer,
                age: Number(info.age),
                brand: info.brand,
            };
            this.isOn = isOn;
            this.quality = Number(quality);
            this.price = getterPrice;
        }
        turnOn(isOn){
            this.isOn = true;
            this.quality = this.quality - 1;
        }
        turnOff(isOn){
            this.isOn = false;
            this.quality = this.quality - 1;
        }
        showInfo(info){
            info = JSON.stringify(this.info);
            console.log(info);
        }
    }
    let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)

}
classOfLaptop()