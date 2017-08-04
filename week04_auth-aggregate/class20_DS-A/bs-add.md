Challenge 1: write and `add` method
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
};
```

Write an `add` method for the `PersonNode` class that
places the given node in the tree:

```js

// assume "root" is root of existing tree that looks like:
//        ('Jones')
//        /        \
//  ('Brook')   ('Smith')

const person = {
    name: 'Nelson',
    age: 46,
    city: 'Portland'
};

const node = new PersonNode(person);
root.add(node);

//        ('Jones')
//        /        \
//  ('Brook')   ('Smith')
//             /        
//       ('Nelson')

```

Notice that we call the method on the root, and it "passes down"
the node to children until it gets put into right place.

Throw an error if called with "name" that already exists.
