import {
  configure,
  addDecorator
} from '@storybook/react';
import {
  withInfo
} from '@storybook/addon-info';

function loadStories() {
  const req = require.context('./stories', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator((withInfo({
  inline: true,
  header: false,
  source: true,
})));

configure(loadStories, module);
