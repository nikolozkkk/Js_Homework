function gcd(num1, num2) {
    if (num1 == num2) {
        return num1;
    }
    let num1Divisors = [num1];
    let bothDivisors = [];

    for (let i = 2; i <= parseInt(num1 / 2); i++) {
        if (num1 % i == 0) {
            num1Divisors.push(i);
        }
    }
    for (let j = 2; j <= parseInt(num2 / 2); j++) {
        for (let k = 0; k < num1Divisors.length; k++) {
            if (num2 % j == 0 && j == num1Divisors[k]) {
                bothDivisors.push(j);
            }
        }
    }
    if (bothDivisors.length > 0) {
        let greatestCommonDivisor = bothDivisors[0];
        for (let a = 1; a <= bothDivisors.length; a++) {
            if (greatestCommonDivisor < bothDivisors[a]) {
                greatestCommonDivisor = bothDivisors[a];
            }
        }
        return greatestCommonDivisor;
    } else {
        return 1;
    }
}
console.log(gcd(15224, 60456));