const person = {
    firstname: "Saad",
    lastname: "Hamdi",
    age: 19,
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(person.getFullName());

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(otherPerson) {
        if (this.age > otherPerson.age) {
            return `${this.name} is older than ${otherPerson.name}`;
        } else if (this.age < otherPerson.age) {
            return `${this.name} is younger than ${otherPerson.name}`;
        } else {
            return `${this.name} and ${otherPerson.name} are the same age`;
        }
    }
}
p1 = new Person("Saad", 19);
p2 = new Person("Saad", 21);
console.log(p1.compareAge(p2));

function mostOccured(arr) {
    let count = {};
    let maxCount = 0;
    let mostOccuredElement;

    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostOccuredElement = num;
        }
    }

    return mostOccuredElement;
}
let arr = [1, 2, 3, 2, 1, 4, 5, 1];
console.log(`The most occurred element is ${mostOccured(arr)}`);