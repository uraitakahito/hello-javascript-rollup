//
// ES2015
//
// import add from './calculator.js';

// const result = add(1, 2);
// console.log(result);

//
// CommonJS
//
const add = require('./calculator.js').add;

const result = add(1, 2);
console.log(result);
