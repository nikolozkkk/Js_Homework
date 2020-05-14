let car = {
    manufacturer: "BMW",
    model: "M5",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 2000
};

let car2 = {
    manufacturer: "Mercedes benz",
    model: "G Wagon",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 4000
};
let car3 = {
    manufacturer: "Audi",
    model: "A8",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 15000
};
let car4 = {
    manufacturer: "BMW",
    model: "X6",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 18000
};

console.log("Manufacturer: " + car.manufacturer + "\nColor: " + car.color + "\nModel: " + car.model + "\nYear: " + car.year + "\nHorse Power: " + car.horse_power + "\nPrice: " + car.price + "\n");

let cars = [];
cars.push(car);
cars.push(car2);
cars.push(car3);
cars.push(car4);
for (let i = 0; i < cars.length; i++) {
    if (cars[i].price < 15000) {
        console.log(cars[i].manufacturer + ' ' + cars[i].model)
    } else {
        console.log("სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ :( ");
    }
}



