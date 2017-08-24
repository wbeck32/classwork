function Person(name) {

  this.name = name;
}

Person.prototype.greet = function() {return `hello ${this.name}`}

// this refers to the instantiated object

const jill = new Person(jill)

jill.greet() // 'hello Jill'


greet.call({name: 'Bob'}, 'Hola') // 'hello Bob'

greet.apply({name: 'Bob'}['Hola', 'Bye']) // just means second arg is an array

const boundGreet = greet.bind({name: 'sally'}); // bind gives you a new function where this is always protected
boundGreet.call({name:'Bob'}) //still Jill


Person.prototype.coyGreet = function() {
  return new Promise(resolve => {
    //"this" is called the context, arrow functions are contextless, can't be bound
    //old school anonymous functions take over the "this"
    //if set timeOut is written as a regular function, it takes over the "this"
    //if it's an arrow function, it doesn't take over "this"
    setTimeout(() =>{
      resolve(`Hello ${this.name}`)
    }, 100)
  })

}

// closure refers to variables set outside the scope

const obj = {} //generic js object - based on Object.prototype
const obj1 = Object.create(null) //completely null object - no properties or methods

obj1.foo = 'foo'

const obj2 = Object.create(obj1)
console.log(obj2)

Object.prototypeOf(obj2) is obj1

// hasOwnProperty = not on prototype, function belongs to this specific object



class Person {
  constructor(name) {
    this.name = name;
  }
}

class superHero extends Person {
  constructor(props) {
    super(props) {
      this.power = power;
    }

  }
}

// in react, need to use super
// in dev tools must turn on sourcemaps
// super in the constructor means it inherits the props/functions of the class it extends



// class fields outside of the constructo

handleNextPage = () => {


}

OR

onClick={() => this.handleNextPage()}

OR

// inside the constructor
this.handleChange = this.handleChange.bind(this);


// components have a life cycle - didMount is the best event, didMount means component is in the dom

// fetch is a new browser ajax function


// after changing .env vars, restart app



