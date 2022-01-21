import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Preloader from './Preloader';
import { config } from '../../config';

export default {
  title: `${config.appName} / Preloader`,
  component: Preloader,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Preloader component`,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Preloader {...args} />;

export const Default = Template.bind({});
Default.args = {};
