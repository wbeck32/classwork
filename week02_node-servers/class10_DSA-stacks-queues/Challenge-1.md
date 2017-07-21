## Whiteboard challenge 1:

Write a function to determine if a string is a palindrome that uses a `Stack` class.
Return `true` if it is, otherwise return `false`

*do not use array.reverse!!!*

Assume no punctuation. Case and space insensitive. 

(You could normalize via:)

```js
const normalized = str => str.toLowerCase().replace(/ /g, '');
```


input | output
---|---
racecar | true
what | false
noon | true
not a palindrome | false
taco cat | true