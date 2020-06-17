function ToFarenheit(celsius) {
    let farenheit;
    farenheit = celsius * 9 / 5 + 32;
    return farenheit;
}
function ToCelsius(farenheit) {
    let celsius;
    celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}
console.log(ToFarenheit(30));
console.log(ToCelsius(86));