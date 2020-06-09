class Car {
    constructor(id, manufacturer, model, horse_power, year, color, price) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.model = model;
        this.horse_power = horse_power;
        this.year = year;
        this.color = color;
        this.price = price;
    }
    displayDescription() {
        console.log(`ამ მანქანას აქვს შემდეგი მახასიათებლები: \nManufacturer:  ${this.manufacturer}  \nColor:  ${this.color}  \nModel:  ${this.model}  \nYear:  ${this.year}  \nHorsePower:  ${this.horse_power}  \nPrice: ${this.price}  \n`);
    }
    static averagePrice(cars) {
        let priceSum = 0;
        let averagePrice = 0;
        if (cars.length > 0) {
            for (let i = 0; i < cars.length; i++) {
                priceSum += cars[i].price;
            }
            averagePrice = parseInt(priceSum / cars.length);
            alert("ჩვენს საიტზე არსებული მანქანების საშუალო ღირებულება არის : " + averagePrice);
        }
    }
    static setName(cars) {
        for (let i = 0; i < cars.length; i++) {
            document.getElementById("title" + cars[i].id).innerHTML = cars[i].manufacturer + ' - ' + cars[i].model;
        }
    }
    static checkedData(cars) {
        let data = document.getElementById("price").value;
        let alertableData = [];
        if (isNaN(data) || data == "") {
            alert("გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.");
        } else {
            if (cars.length > 0) {
                for (let i = 0; i < cars.length; i++) {
                    if (cars[i].price <= data) {
                        alertableData.push(cars[i]);
                    }
                }
                let message = "ამ ფასად შეგიძლიათ შეიძინოთ: \n";
                if (alertableData.length > 0) {
                    for (let j = 0; j < alertableData.length; j++) {
                        if (j < alertableData.length - 1) {
                            message += "•" + alertableData[j].manufacturer + " (" + alertableData[j].model + ") - " + alertableData[j].price + "\n";
                        } else {
                            message += "•" + alertableData[j].manufacturer + " (" + alertableData[j].model + ") - " + alertableData[j].price;
                        }
                    }
                    alert(message);
                } else {
                    alert("სამწუხაროდ ამ ფასში მანქანა ვერ მოიძებნა");
                }
            }
        }
    }
    static disableAllExceptMin(cars) {
        let disableableButtons = [];
        for (let i = 0; i < cars.length; i++) {
            document.getElementById("disable" + cars[i].id).disabled = false;
        }
        let minPrice = cars[0].price;
        for (let i = 1; i < cars.length; i++) {
            if (minPrice > cars[i].price) {
                minPrice = cars[i].price;
            }
        }
        for (let j = 0; j < cars.length; j++) {
            if (cars[j].price > minPrice) {
                disableableButtons.push(cars[j].id);
            }
        }
        for (let k = 0; k < disableableButtons.length; k++) {
            document.getElementById("disable" + disableableButtons[k]).disabled = true;
        }
    }
    static disableAllExceptMax(cars) {
        let disableableButtons = [];
        let maxPrice = cars[0].price;
        for (let i = 0; i < cars.length; i++) {
            document.getElementById("disable" + cars[i].id).disabled = false;
        }
        for (let i = 1; i < cars.length; i++) {
            if (maxPrice < cars[i].price) {
                maxPrice = cars[i].price;
            }
        }
        for (let j = 0; j < cars.length; j++) {
            if (cars[j].price < maxPrice) {
                disableableButtons.push(cars[j].id);
            }
        }
        for (let k = 0; k < disableableButtons.length; k++) {
            document.getElementById("disable" + disableableButtons[k]).disabled = true;
        }
    }
    static redirectLogin() {
        window.location = "login.html";
    }
}
let bmw = new Car("bmw", "BMW", "M5", "123HP", 2015, "white", 2007);
let mercedes = new Car("mercedes", "Mercedes benz", "G Wagon", "123HP", 2015, "white", 4002);
let audi = new Car("audi", "Audi", "A8", "123HP", 2015, "white", 6502);
let skoda = new Car("skoda", "Skoda", "X6", "123HP", 2015, "white", 16001);

let cars = [bmw, mercedes, audi, skoda];
//საშუალო ფასის გამოთვლა
document.getElementById('average').addEventListener('click', function () {
    Car.averagePrice(cars)
}, false);

//სათაურების მინიჭება
window.addEventListener('load', (event) => {
    Car.setName(cars);
});

//ფასზე დამოკიდებული მანქანების ალერტი
document.getElementById("checkprice").addEventListener('click', function () {
    Car.checkedData(cars);
}, false);

//ღილაკების დეაქტივაცია მინიმალური ფასის მიხედვით
document.getElementById("minprice").addEventListener('click', function () {
    Car.disableAllExceptMin(cars);
}, false);
//ღილაკების დეაქტივაცია მაქსიმალური ფასის მიხედვით
document.getElementById("maxprice").addEventListener('click', function () {
    Car.disableAllExceptMax(cars);
}, false);
//ლოგინ პეიჯზე რედირექტი
document.getElementById("login").addEventListener('click', function () {
    Car.redirectLogin();
}, false);


