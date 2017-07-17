// old way
// function Person() {
//     // stuff in traditional constructor function.
//     // "initialization"
//     this.name = name;
// }

// Person.prototype.introduce = function() {
//     return `I am ${this.name}`;
// };

// new way
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