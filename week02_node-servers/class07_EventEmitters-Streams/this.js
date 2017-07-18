'use strict';

const obj = {
    name: 'jane',
    sayHello(salutation = 'hello') { 
        return salutation + ' ' + (this ? this.name : 'no this') 
    }
};

console.log(obj.sayHello());

const fn = obj.sayHello;
console.log(fn());

function logCall(fn) {
    console.log('logCall', fn());
}

logCall(obj.sayHello);

const obj2 = { name: 'bill' };
obj2.banana = obj.sayHello;
console.log(obj2.banana());

console.log(fn.call({ name: 'call' }, 'hola'));
console.log(fn.apply({ name: 'call' }, ['hola']));

const boundFn = obj.sayHello.bind(obj);
console.log(boundFn());

const obj3 = {
    name: 'joey',
    doThing() {
        setTimeout(() => {
            console.log('doThing', this.name);
        });
    }
}

obj3.doThing();

const obj4 = {
    name: 'ohno',
    doThing: () => {
        console.log('doThing2', this.name);
    }
}

obj4.doThing();

// it('test', () => {

// }).timeout(5000);

