import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta = {
  component: ContactForm,
  title: "Easey Design System / Contact Form",
  argTypes: { onSubmit: { action: 'clicked' } },
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Contact Form component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla massa in lectus volutpat scelerisque. Craseu leo vel lacus tincidunt molestie. Vestibulum faucibus enim sit amet pretium laoreet.',
    subjects: [
      { id: 1, value: `Help using application` },
      { id: 2, value: `Report a bug` },
      { id: 3, value: `Data question` },
      { id: 4, value: `Suggested enhancement` },
      { id: 5, value: `Other` },
    ],
  }
};

export const Custom: Story = {
  args: {
    ...Default.args,
    title: 'Contact Form',
    subjectsTitle: 'Pick a subject...',
    commentTitle: 'Message',
  }
};

export const Success: Story = {
  args: {
    ...Default.args,
    submitted: true,
    submitStatus: true,
    submitStatusText: 'Thank you, your form has been submitted and an email confirmation will be sent to you shortly.',
  }
};

export const Error: Story = {
  args: {
    ...Default.args,
    submitted: true,
    submitStatus: false,
    submitStatusText: 'An error occurred while submitting your comment. Please try again later!',
  }
};