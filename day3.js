let num = 5;
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(`The factorial of ${num} is ${factorial(num)}`);

function nDigits(n) {
    if (n < 10) {
        return 1;
    }
    return 1 + howManyDigits(Math.floor(n / 10));
}
console.log(`The number ${num} has ${nDigits(num)} digits`);

function tree(n) {
    if (n <= 0) return '';

    let out = '';
    for (let i = 1; i <= n; i++) {
        const spaces = n - i;         
        const stars = 2 * i - 1;      
        out += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    }
    out += ' '.repeat(n - 1) + '|' + '\n';
    return out;
}
console.log(tree(num));
function numberToDays(n) {
    switch (n) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day";
    }
}
console.log(`Day ${num} is ${numberToDays(num)}`);

function max(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
let a = 3, b = 10, c = 0;
console.log(`The maximum is ${max(a, b, c)}`);

function myGrade(score) {
    if (score >= 85) {
        console.log("Grade is A");
    } else if (score >= 70) {
        console.log("Grade is B");
    } else if (score >= 55) {
        console.log("Grade is C");
    } else if (score >= 40) {
        console.log("Grade is D");
    } else {
        console.log("Grade is F");
    }
}
let score = 83;
myGrade(score);

function combinator(n, p) {
    if (p > n) return 0;
    return factorial(n) / (factorial(p) * factorial(n - p));
}
console.log(`C(${num}, 2) = ${combinator(num, 2)}`);

function calculator(n, op, p){
    switch (op) {
        case '+':
            return n + p;
        case '-':
            return n - p;
        case '*':
            return n * p;
        case '/':
            return p !== 0 ? n / p : 'Division by zero error';
    }
}
num1 = 3;
num2 = 4;
op = '+';
console.log(`${num1} ${op} ${num2} = ${calculator(num1, op, num2)}`);