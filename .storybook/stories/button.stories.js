import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'Components/button/Button';

import 'Styles/buttons.scss';
import 'Common/global.scss';
require('Common/logger.js');

storiesOf('Button', module)
    .add('Default button', () => (
        <Button size="sm">Domz Garcia</Button>
    ))
    .add('With block attribute', () => (
        <Button block>Domz Garcia</Button>
    ))
    .add('With className attribute', () => (
        <Button className="bordered red">Domz Garcia</Button>
    ))
    .add('With type attribute', () => (
        <Button type="primary">Domz Garcia</Button>
    ))
    .add('With isActive attribute', () => (
        <Button isActive >Domz Garcia</Button>
    ))