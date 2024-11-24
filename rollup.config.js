// A Rollup plugin to convert CommonJS modules to ES6
import commonjs from 'rollup-plugin-commonjs'
// The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules.
import resolve from '@rollup/plugin-node-resolve';

// can be an array (for multiple inputs)
export default {
  input: 'src/index.js', // conditionally required

  // required (can be an array, for multiple outputs)
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'calculator'
  },
  plugins: [
    commonjs(),
    resolve()
  ]
};
