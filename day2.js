var firstname = "Saad";
var lastname = "Hamdi";
const PI = 3.14;
var radius = 5;
favoriteSuperhero = "Batman";
favoriteQuote = "I don't stop when I'm tired. I stop when I'm done."
console.log(`${firstname} ${lastname}`);
var area = PI * radius * radius;
var perimeter = 2 * PI * radius;
console.log(`area ${area}`);
console.log(`perimeter ${perimeter}`);
var quote = "It's not who I am underneath, but what I do that defines me."
var motivation = `The bat from Gotham said ${favoriteSuperhero}: "${quote}"`;
console.log(motivation);
let a = 3;
let b = 10;
let c = 0;
c = a;
a = b;
b = c;
console.log(`After swapping: a = ${a}, b = ${b}`);
var day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
if (a >= b && a >= c) {
    console.log(`The maximum:${a}`);
} else if (b >= a && b >= c) {
    console.log(`The maximum:${b}`);
} else {
    console.log(-`The maximum:${c}`);
}
let score = 83;
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