// const assert = require('assert');
// const array = [{ name: 'foo' }, 2, 3];
// assert.deepEqual(array, [{ name: 'foo' }, 2, 3]);
// assert.equal(array, [{ name: 'foo' }, 2, 3]);
// assert.deepEqual(Object.keys(obj1), Object.keys(obj2));



const fs = require('fs');
// const buffer = fs.readFileSync('./Endianness.pdf');
// console.log(buffer);
const obj = { name: 'pdx' };
// fs.writeFileSync('obj.json', JSON.stringify(obj));
const buffer = fs.readFileSync('./obj.json');
buffer[9] = '113';
fs.writeFileSync('obj.json', buffer);
// const string = fs.readFileSync('./obj.json', 'utf8');
// console.log(typeof string);