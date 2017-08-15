

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `I am ${this.name}`;
    }
}

class SuperHero extends Person {
    constructor(name, power) {
        super(name);
        this.power = power;
    }

    greet() {
        return `${super.greet()}, I can ${this.power}`;
    }

}

console.log(new Person('Jill').greet());
console.log(new SuperHero('Jilltastic', 'invisible elasticity').greet());