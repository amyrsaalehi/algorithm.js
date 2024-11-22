// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/algorithm.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/algorithm.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
