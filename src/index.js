//
// ES2015
//
import add from './calculator.js';

const result = add(1, 2);
console.log(result);

//
// @rollup/plugin-node-resolve test
//
import answer from 'the-answer';

export default function () {
  console.log('the answer is ' + answer);
}


// //
// // CommonJS
// //
// const add = require('./calculator.js').add;

// const result = add(1, 2);
// console.log(result);
