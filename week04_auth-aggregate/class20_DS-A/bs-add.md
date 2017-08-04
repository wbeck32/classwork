Challenge 1: write an `add` method
===

```js
class PersonNode {
    constructor(person) {
        this.value = person.name;
        this.person = person;
        // populate parent when adding a node
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    add(node) { ... }
};
```

Write an `add` method for the `PersonNode` class that
places the given node in the tree (and sets the parent property
of the node being added):

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

// Now tree looks like:
//
//        ('Jones')
//        /        \
//  ('Brook')   ('Smith')
//             /        
//       ('Nelson')
//
// and person.parent === ('Smith')
```

Notice that we call the method on the root, and it "passes down"
the node to children until it gets put into right place.

Throw an error if called with "name" that already exists.
