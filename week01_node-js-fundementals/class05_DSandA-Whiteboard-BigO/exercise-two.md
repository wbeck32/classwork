Write a function that takes a string sentence and returns
an object with a property for number of occurances for each word in the sentence (case insensitive).

in | out
---|---
'The cow is in the cow pen' | `{ the: 2, cow: 2, is: 1, in: 1, pen: 1 }`


`const words = sentence.split(' ');`

In JavaScript, we can assign "dynamic" properties using `[]` notation:

```
const dict = {};
const someKey = 'key';
const someValue = 'value';

dict[someKey] = someValue;
```
