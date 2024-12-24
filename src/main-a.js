//
// ES2015
//
import answer from 'the-answer';
import add from './calculator';

//
// @rollup/plugin-node-resolve test
//

const result = add(1, 2);
console.log(result);

export default function () {
  console.log(`the answer is ${answer}`);
}

// //
// // CommonJS
// //
// const add = require('./calculator.js').add;

// const result = add(1, 2);
// console.log(result);
