let car = {
    manufacturer: "BMW",
    model: "M5",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 2007
};

let car2 = {
    manufacturer: "Mercedes benz",
    model: "G Wagon",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 4002
};
let car3 = {
    manufacturer: "Audi",
    model: "A8",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 1203
};
let car4 = {
    manufacturer: "BMW",
    model: "X6",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 16001
};

console.log("Manufacturer: " + car.manufacturer + "\nColor: " + car.color + "\nModel: " + car.model + "\nYear: " + car.year + "\nHorse Power: " + car.horse_power + "\nPrice: " + car.price + "\n");

let cars = [];
let carFound = false;
cars.push(car);
cars.push(car2);
cars.push(car3);
cars.push(car4);
for (let i = 0; i < cars.length; i++) {
    if (cars[i].price < 15000) {
        console.log(cars[i].manufacturer + ' ' + cars[i].model);
        carFound = true;
    }
}
if (!carFound) {
    console.log("სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ :( ");
}


console.log('------------');

let prices = [];
prices.push(car.price);
prices.push(car2.price);
prices.push(car3.price);
prices.push(car4.price);

function carsAveragePrice(carsPrices) {
    if (carsPrices.length == 0) {
        return null;
    }
    let price = carsPrices[0];
    for (let i = 1; i < carsPrices.length; i++) {
        price += carsPrices[i];
    }
    price /= carsPrices.length;
    console.log("ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის: " + parseInt(price));
}
carsAveragePrice(prices);

function carsMaxPrice(maxPrice) {
    if (maxPrice.length == 0) {
        return null;
    }
    let max = maxPrice[0];
    for (let i = 1; i < maxPrice.length; i++) {
        if (max < maxPrice[i]) {
            max = maxPrice[i];
        }
    }
    console.log("ჩვენს მარაგში არსებული ყველაზე ძვირიანი მანქანის ფასი არის : " + parseInt(max));
}
carsMaxPrice(prices);


