

function getPerson(name) {
    return {
        introduce() {
            return `I am ${name}`;
        }
    }
}
const person = getPerson('foo');
console.log(person.introduce())


class Person {
    constructor(name) {
        // stuff in traditional constructor function.
        // "initialization"
        this.name = name;
    }

    introduce() {
        return `I am ${this.name}`;
    }
}

const person2 = new Person('bar');
console.log(person2.introduce());
person2.name = 'qux';
console.log(person2.introduce());