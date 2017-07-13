//
// // Old way:
// //
// function Person() {
//
// }
//
// Person.prototype. () {
//
//
// }
// // end old way
//
//
// // ES6 Classes
//
// class Person {
//
//   constructor(name) {
//     this.name = name;
//
//   }
//
//   introduce() {
//     return `I am ${this.name}`;
//   }
//
// }

// http server
// TODO: use nodemon
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  let body = 'howdy';
  req.on('data', data => body += data);
  req.on('end', () => {
    const user = JSON.parse(parse);
    console.log(res);
  });
  res.end('this');

}).listen(3001);
