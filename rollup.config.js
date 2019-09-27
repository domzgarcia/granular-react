import babel from 'rollup-plugin-babel';

const babelOptions = {
  babelrc: false,
  exclude: 'node_modules/**',
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    ["@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ]
}

export default [{
  input: 'src/components/button/Button.jsx',
  output: [{
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    }
  ],
  plugins: [
    babel(babelOptions),
  ]
}]
