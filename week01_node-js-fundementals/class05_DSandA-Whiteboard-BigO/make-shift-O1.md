Implement this Queue class such that both enqueue and
dequeue are `O(1)`.

```js
class Queue {
    constructor() {
        this.queue = [];
        // add any other props you need
    }

    // add an item to the end of the queue
    enqueue(n) { /*...*/ }

    //returns the next item from the front of the queue
    dequeue() {
        // make this O(1)!
        // hint: .shift is O(n), so don't use that
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
// 1
queue.enqueue(3);
queue.dequeue();
// 2
queue.enqueue(4);
queue.dequeue();
// 3
```