var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'iintel i5'
};
console.log(computer);
console.log(computer.processor);
var computerPrice = computer.price;
//console.log(computerPrice);

//set a object property value
//computer.price = 22000;
//console.log(computer);

//different ways to set a value of an object property
var priceProperty = "price"
computer.price = 2200;
computer["price"] = 23000; 
computer[priceProperty] = 19000;
console.log(computer);

