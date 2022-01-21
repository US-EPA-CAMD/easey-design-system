import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { config } from '../../config';
import { ContactForm, ContactFormProps } from './ContactForm';

export default {
  component: ContactForm,
  title: `${config.appName} / Contact Form`,
  argTypes: { onSubmit: { action: 'clicked' } },
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Contact Form component`,
      },
    },
  },
} as Meta;

const Template: Story<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla massa in lectus volutpat scelerisque. Craseu leo vel lacus tincidunt molestie. Vestibulum faucibus enim sit amet pretium laoreet.',
  subjects: [
    {
      id: 1,
      value: `Help using application`,
    },
    {
      id: 2,
      value: `Report a bug`,
    },
    {
      id: 3,
      value: `Data question`,
    },
    {
      id: 4,
      value: `Suggested enhancement`,
    },
    {
      id: 5,
      value: `Other`,
    },
  ],
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  title: 'Contact Form',
  subjectsTitle: 'Pick a subject...',
  commentTitle: 'Message',
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  submitted: true,
  submitStatus: true,
  submitStatusText: 'Thank you, your form has been submitted and an email confirmation will be sent to you shortly.',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  submitted: true,
  submitStatus: false,
  submitStatusText: 'An error occurred while submitting your comment. Please try again later!',
};
