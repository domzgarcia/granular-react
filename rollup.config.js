import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {
  terser
} from 'rollup-plugin-terser';

const distPath = 'dist';
const bundleName = 'bundle';
const babelOpt = {
  babelrc: false,
  exclude: 'node_modules/**',
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    ["@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    "transform-react-remove-prop-types"
  ]
}

export default {
  input: 'src/components/button/Button.jsx',
  external: ['react', 'classnames', 'prop-types', 'blacklist'],
  output: [{
    file: `${distPath}/${bundleName}.cjs.js`,
    format: 'cjs'
  }],
  plugins: [
    resolve(),
    babel(babelOpt),
    // scss(),
    terser()
  ]
}
