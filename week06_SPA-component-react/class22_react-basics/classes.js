
function Person(name) {
    this.name = name;
}

function greet(salutation = 'hello') { 
    return `${salutation} ${this.name}`; 
}

Person.prototype.greet = greet;

Person.prototype.coyGreet = function() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Hello ${this.name}`);
        }, 100);
    })
}

const jill = new Person('Jill');

const fred = new Person('Fred');

const coyGreet = jill.coyGreet;
coyGreet()
    .then(greeting => console.log(greeting))
    .catch(console.log);

// console.log(jill.greet());
// console.log(fred.greet());

// const boundGreet = greet.bind({ name: 'Sally' });
// console.log(boundGreet.call({ name: 'Bob' }));
// console.log( greet.apply({ name: 'Bob' }, ['Hola']) );

// const obj = {};
// const obj1 = Object.create(null);
// obj1.foo = 'FOO';

// const obj2 = Object.create(obj1);
// console.log(obj2);