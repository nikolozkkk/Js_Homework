function fibonacci(num) {
    if (num === 1) {
        return [0, 1];
    }
    else {
        let fibo = fibonacci(num - 1);
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        return fibo;
    }
}
console.log(fibonacci(10));