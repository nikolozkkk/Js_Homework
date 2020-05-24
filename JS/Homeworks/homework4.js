let car = {
    id: "bmw",
    manufacturer: "BMW",
    model: "M5",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 2007
};

let car2 = {
    id: "mercedes",
    manufacturer: "Mercedes benz",
    model: "G Wagon",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 4002
};
let car3 = {
    id: "audi",
    manufacturer: "Audi",
    model: "A8",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 1203
};
let car4 = {
    id: "skoda",
    manufacturer: "SKODA",
    model: "X6",
    horse_power: "123HP",
    year: 2015,
    color: "white",
    price: 16001
};

let cars = [];
cars.push(car);
cars.push(car2);
cars.push(car3);
cars.push(car4);

// alert

function displayDescription(carId) {
    let foundCar = findCarById(carId);
    let description = getDescription(foundCar);

    alert(description);
}

function findCarById(carId) {
    for (i = 0; i < cars.length; i++) {
        if (cars[i].id === carId) {
            return cars[i];
        }
    }
}

function getDescription(car) {
    return `ამ მანქანას აქვს შემდეგი მახასიათებლები: \nManufacturer:  ${car.manufacturer}  \nColor:  ${car.color}  \nModel:  ${car.model}  \nYear:  ${car.year}  \nHorsePower:  ${car.horse_power}  \nPrice: ${car.price}  \n`;
}




function checkedData() {
    // data ცვლადში ვინახავთ მომხამრებლის მიერ შეტანილ ინფორმაციას
    let data = document.getElementById("price").value;
    let alertableData = [];
    // თუ data-ს მნიშვნელობა არ არის ციფრებისგან შემდგარი
    if (isNaN(data)) {
        alert("გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.");
    } else {
        //ვამოწმებთ არის თუ არა ჩვენი მანქანების მასივი ცარიელი
        if (cars.length > 0) {
            for (let i = 0; i < cars.length; i++) {
                // თუ მანქანის ფასი ნაკლებია შეყვანილ ფასზე, ჩაყრის მანქანებს ჩვენს მიერ შექმნილ მასივში(alertableData)
                if (cars[i].price <= data) {
                    alertableData.push(cars[i]);
                }
            }
            // ცვლადი რომელსაც კონკატინაციით დავუმატებთ მანქანის მოდელებს, (ფორში რო ჩავაგდოთ ალერტი იმდენჯერ ამოვარდება რამდენი მანქანაც იქნება ჩვენს alertableData მასივში)
            let message = "ამ ფასად შეგიძლიათ შეიძინოთ: \n";
            // ვამოწმებთ იპოვა თუ არა ამ ფასში მანქანები
            if (alertableData.length > 0) {
                for (let j = 0; j < alertableData.length; j++) {
                    // \n ნიშნავს ახალ ხაზზე გადასვლას, ამიტომ როცა მასივის ბოლო ელემენტზე მივა ციკლის იტერატორი ახალ ხაზზე აღარ გადაიტანს
                    if (j < alertableData.length - 1) {
                        message += "•" + alertableData[j].manufacturer + " (" + alertableData[j].model + ") - " + alertableData[j].price + "\n";
                    } else {
                        message += "•" + alertableData[j].manufacturer + " (" + alertableData[j].model + ") - " + alertableData[j].price;
                    }
                }
                alert(message);
            } else {
                alert("სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა");
            }
        }
    }
}