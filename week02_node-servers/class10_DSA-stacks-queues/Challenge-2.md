## Whiteboard challenge 2:

Write a function that takes a string of "code", and uses a `Stack` for determining if a string has matching parentheses and curley braces. Return `true` if properly formatted, otherwise `false`


input | output
---|---
`if(true) { return; }` | true
`if(true( { return; }` | false
`if(true) { return;` | false
`(if(true) { return; }` | false
`( true && { name: 'foo' } )` | true
`( true && { name: 'foo' ) }` | false
`{ true && ( name: 'foo' } )` | false