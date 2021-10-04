import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@material-ui/core/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button variant='contained'>Success</Button>;
