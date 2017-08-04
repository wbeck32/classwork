Happy Numbers
===

Write a chainable function that accepts one word per function call but, when called without
arguments, will report back all the previously passed words in order.

```js

const result = sayIt('hello')('my')('name')('is')('Lewis')();

console.log(result);

// "hello my name is Lewis"

```