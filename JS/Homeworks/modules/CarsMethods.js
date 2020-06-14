export function displayDescription(cars, id) {
    let alertableText = "";
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id == id) {
            alertableText = "ამ მანქანას აქვს შემდეგი მახასიათებლები: \nManufacturer: " + cars[i].manufacturer + "\nColor: " + cars[i].color + "\nModel: " + cars[i].model + "\nYear: " + cars[i].year + "\nHorsePower: " + cars[i].horse_power + "\nPrice: $" + cars[i].price;
            alert(alertableText);
            i = cars.length;
        }
    }
}
export function averagePrice(cars) {
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
export function setName(cars) {
    for (let i = 0; i < cars.length; i++) {
        document.getElementById("title" + cars[i].id).innerHTML = cars[i].manufacturer + ' - ' + cars[i].model;
    }
}
export function checkedData(cars) {
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
export function disableAllExceptMin(cars) {
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
export function disableAllExceptMax(cars) {
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
export function redirectLogin() {
    window.location = "login.html";
}