let numbers = [];
let result = [];
for (let i = 1; i <= 30; i++) numbers.push(i);
numbers.forEach(n => {
    if (n % 3 === 0 && n % 5 === 0) result.push("FizzBuzz");
    else if (n % 2 === 0) result.push("Even");
    else result.push("Odd");
});
console.log(result);