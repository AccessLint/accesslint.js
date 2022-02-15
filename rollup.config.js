import merge from 'deepmerge';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './out-tsc/src/index.js',
  output: {
    format: 'iife',
    entryFileNames: 'bundle.js',
    globals: { crypto: 'crypto' }
  },
  plugins: [
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
  ],
});
