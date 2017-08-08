
const fn = sentence => word => !word ? sentence : fn(`${sentence} ${word}`);

const sayIt = fn('');

console.log(sayIt('Hello')('World')());

