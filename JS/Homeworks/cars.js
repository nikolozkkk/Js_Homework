import Car from "./modules/CarsModel.js"
import * as car from "./modules/CarsMethods.js"

let bmw = new Car("bmw", "BMW", "M5", "123HP", 2015, "white", 2007);
let mercedes = new Car("mercedes", "Mercedes benz", "G Wagon", "123HP", 2015, "white", 4002);
let audi = new Car("audi", "Audi", "A8", "123HP", 2015, "white", 6502);
let skoda = new Car("skoda", "Skoda", "X6", "123HP", 2015, "white", 16001);

let cars = [bmw, mercedes, audi, skoda];

//ID-ის მიღება და ალერტი კონკრეტული მანქანის
document.addEventListener('click', function (e) {
    car.displayDescription(cars, e.target.id);
}, false);

//საშუალო ფასის გამოთვლა
document.getElementById('average').addEventListener('click', function () {
    car.averagePrice(cars)
}, false);

//სათაურების მინიჭება
window.addEventListener('load', (event) => {
    car.setName(cars);
});

//ფასზე დამოკიდებული მანქანების ალერტი
document.getElementById("checkprice").addEventListener('click', function () {
    car.checkedData(cars);
}, false);

//ღილაკების დეაქტივაცია მინიმალური ფასის მიხედვით
document.getElementById("minprice").addEventListener('click', function () {
    car.disableAllExceptMin(cars);
}, false);
//ღილაკების დეაქტივაცია მაქსიმალური ფასის მიხედვით
document.getElementById("maxprice").addEventListener('click', function () {
    car.disableAllExceptMax(cars);
}, false);
//ლოგინ პეიჯზე რედირექტი
document.getElementById("login").addEventListener('click', function () {
    car.redirectLogin();
}, false);


