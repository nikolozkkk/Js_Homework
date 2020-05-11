let i = 1;
let sum = 0;
while (i < 10) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
    i++;
}
console.log(sum);

let jami = 0;
for (let j = 0; j < 50; j += 3) {
    jami += j;
}
console.log(jami);