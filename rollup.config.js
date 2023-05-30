// rollup.config.js
export default {
  input: 'app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'// to use import in ass.js
  }
};
