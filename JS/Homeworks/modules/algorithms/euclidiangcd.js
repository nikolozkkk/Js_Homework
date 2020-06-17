function euclidianGCD(num1, num2) {
    let remainder;
    while ((num1 % num2) > 0) {
        remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }
    return num2;
}

console.log(euclidianGCD(15224, 60456));