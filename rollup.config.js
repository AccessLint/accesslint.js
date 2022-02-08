import merge from 'deepmerge';
import commonjs from '@rollup/plugin-commonjs';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './out-tsc/src/index.js',
  output: {
    format: 'iife',
  },
  plugins: [commonjs()]
});
