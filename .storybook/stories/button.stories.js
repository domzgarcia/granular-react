import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'Components/button/Button';

import 'Styles/buttons.scss';
import 'Common/global.scss';

storiesOf('Button', module)
    .add('Default button', () => (
        <Button>Domz Garcia</Button>
    ))
    .add('With block attribute', () => (
        <Button block>Domz Garcia</Button>
    ))
    .add('With className attribute', () => (
        <Button className="red">Domz Garcia</Button>
    ))