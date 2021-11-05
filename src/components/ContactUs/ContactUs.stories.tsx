import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ContactUs, ContactUsProps } from './ContactUs';
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

const Template: Story<ContactUsProps> = (args) => <ContactUs {...args} />;

export const Default = Template.bind({});
Default.args = {
  commentTypes: [
    {
      id: 1,
      comment: `Help using application`,
    },
    {
      id: 2,
      comment: `Report a bug`,
    },
    {
      id: 3,
      comment: `Data question`,
    },
    {
      id: 4,
      comment: `Suggested enhancement`,
    },
    {
      id: 5,
      comment: `Other`,
    },
  ],
};
