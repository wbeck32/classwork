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
takes a "name" string key and returns the found node:

```js

// assuming "root" is root of existing tree that looks like:
//        ('Jones')
//        /        \
//  ('Brook')   ('Smith')
//             /        
//       ('Nelson')

let node;

node = root.find('Nelson');
// node is ('Nelson')

node = root.find('Foo');
// node is null

```