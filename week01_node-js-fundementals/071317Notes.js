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

// http.createServer((req, res) => {
//   let body = 'howdy';
//   req.on('data', data => body += data);
//   req.on('end', () => {
//     const user = JSON.parse(parse);
//     console.log(res);
//   });
//   res.end('this');
// }).listen(3001);

console.log('starting');
setTimeout(() => {
  // console.log(err, data);
  console.log('timeout done');
}, 5000);

http.createServer((req, res) => {
  console.log('got a web request');
  res.end('howdy');
}).listen(3001);

// closure means that filename can be remembered
// 'quad core' means that the cpu can only do 4 requests at a time
// each node server can do one request at a time - run multiple node servers
function readFile(filename, cb) {
  // parameters (err, data) is the callback
  fs.readFile(filename, 'utf8', (err, data) => {
    if(err) return console.log('ERROR: ', err);
    console.log('fn: ', filename, 'preview: ', data.slice(20));
    console.log('file read done');
  });
}
readFile('071317Notes.txt');

console.log('at end of file');
