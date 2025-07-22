numbers = [1, 2, 3, 4, 5];
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(`The sum of the array is ${sum(numbers)}`);

function countEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(`The number of even numbers in the array is ${countEven(numbers)}`);

function double(arr) {
    let doubled = [];
    for (let i = 0; i < arr.length; i++) {
        doubled.push(arr[i] * 2);
    }
    return doubled;
}
console.log(`The doubled array is [${double(numbers)}]`);

socks = [1, 2, 1, 2, 3, 2];
function sockMerchant(socks) {
    let pairs = 0;
    let sockCount = {};

    for (let sock of socks) {
        if (sockCount[sock]) {
            sockCount[sock]++;
        } else {
            sockCount[sock] = 1;
        }
    }

    for (let count of Object.values(sockCount)) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
}
console.log(`The number of pairs of socks is ${sockMerchant(socks)}`);