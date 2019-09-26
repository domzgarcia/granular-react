const path = require('path');

/** Ref: https://storybook.js.org/docs/configurations/custom-webpack-config/ */
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /(node_modules|bower_components)/,
    include: path.resolve(__dirname, '../'),
  });
  // Stories directory
  config.resolve = {
    ...config.resolve,
    alias: {
      'Components': path.resolve(__dirname,'../','src/components'),
      'Styles': path.resolve(__dirname,'../','src/styles'),
      'Common': path.resolve(__dirname,'common'),
    },
  };
  return config;
};