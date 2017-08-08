Challenge 3: write a `remove` method
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

    remove(name) { ... }
};
```

Write a `remove` method for the `PersonNode` class that
takes a "name" string key and removes that node from the tree.
You can use your find(), add() an parent

```js

// assume "root" is root of existing tree that looks like:
//        ('Jones')
//        /        \
//  ('Brook')   ('Smith')
//             /        
//       ('Nelson')

root.remove('Smith');

// tree now looks like
//        ('Jones')
//        /        \
//  ('Brook')   ('Nelson')

```