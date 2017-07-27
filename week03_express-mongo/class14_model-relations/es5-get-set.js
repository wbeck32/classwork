const qux = 12;

const obj = {
    bar: 0,
    get foo() {
        return this.bar || 42;
    },
    set foo(value) {
        this.bar = value * value;
    },
    qux
};

console.log(obj.foo);
obj.foo = 3;
console.log(obj.foo);