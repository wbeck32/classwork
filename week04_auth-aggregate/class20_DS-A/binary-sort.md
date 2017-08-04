Binary Tree Sorting
===

## Binary Node

```js
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
```

## Value Relationship

`node.left.value` < `node.value` < `node.right.value`

```
     (3)
    /   \
  (1)   (8)

```

Works with strings too:

```
        ('Jones')
        /        \
  ('Brook')   ('Smith')

```

These may be keys, that represent the thing to "find":

```js
class PersonNode {
    constructor(person) {
        if(!person) throw new Error('"person" must be provided');
        this.value = person.name;
        this.person = person;
        this.left = null;
        this.right = null;
    }
};
```

## Challenge 1: `add`

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

## Challenge 2: `find`

* Write a `find` method for the `PersonNode` class that
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

## Challenge 2: `remove`

* Write a `remove` method for the `PersonNode` class that
takes a "name" string key and removes that node from the tree.

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