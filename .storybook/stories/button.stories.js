import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'Components/button/Button';

import 'Common/global.scss';
import 'Styles/buttons.scss';

storiesOf('Button', module)
    .add('No text', () => (
        <Button block className="red">Boom</Button>
    ))