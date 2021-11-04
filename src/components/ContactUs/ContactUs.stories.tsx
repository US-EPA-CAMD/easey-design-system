import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ContactUs } from './ContactUs';
import { config } from '../../config';

export default {
  title: `${config.appName} / Contact Us`,
  component: ContactUs,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Contact Us component`,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <ContactUs {...args} />;

export const Default = Template.bind({});
Default.args = {};
