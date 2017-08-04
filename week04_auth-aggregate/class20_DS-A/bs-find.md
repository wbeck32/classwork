Challenge 2: write a `find` method
===

```js
class PersonNode {
    constructor(person) {
        this.value = person.name;
        this.person = person;
        this.left = null;
        this.right = null;
    }
    add(node) { ... }

    find(name) { ... }
};
```

Write a `find` method for the `PersonNode` class that
takes a "name" string key and returns the corresponding person object:

```js

// assume "root" is root of existing tree that looks like:
//        ('Jones')
//        /        \
//  ('Brook')   ('Smith')
//             /        
//       ('Nelson')

let person;

person = root.find('Nelson');
// person is 
// {
//     name: 'Nelson',
//     age: 46,
//     city: 'Portland'
// };


person = root.find('Foo');
// person is "null"

```