import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'Components/button/Button';

import 'Styles/buttons.scss';
import 'Common/global.scss';

storiesOf('Button', module)
    .add('No text', () => (
        <Button className="red">Boom</Button>
    ))