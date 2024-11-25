// A Rollup plugin to convert CommonJS modules to ES6
import commonjs from 'rollup-plugin-commonjs'
// The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules.
import resolve from '@rollup/plugin-node-resolve';

// can be an array (for multiple inputs)
export default [
  {
    input: 'src/main-a.js', // conditionally required

    // required (can be an array, for multiple outputs)
    output: [
      {
        dir: 'dist/es6',
        format: 'es',
      },
      {
        dir: 'dist/umd',
        format: 'umd',
      },
    ],
    plugins: [
      commonjs(),
      resolve()
    ]
  },
  {
    input: 'src/main-b.js', // conditionally required

    // required (can be an array, for multiple outputs)
    output: [
      {
        dir: 'dist/es6',
        format: 'es',
      },
    ]
  }
];
