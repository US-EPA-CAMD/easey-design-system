import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: "Easey Design System / Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Header component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logoSrc: '',
    logoUrl: 'https://www.epa.gov',
    searchUrl: 'https://search.epa.gov/epasearch',
    menuItems: [
      { name: 'Environmental Topics', href: 'https://www.epa.gov/environmental-topics' },
      { name: 'Laws and Regulations', href: 'https://www.epa.gov/laws-regulations' },
      { name: 'About EPA', href: 'https://www.epa.gov/aboutepa' },
      { name: 'Accessibility', href: 'https://www.epa.gov/accessibility' },
      { name: 'Privacy', href: 'https://www.epa.gov/privacy' },
      { name: 'Privacy and Security Notice', href: 'https://www.epa.gov/privacy/privacy-and-security-notice' }
    ]
  }
};

export const WithEnvironmentBanner: Story = {
  args: {
    ...Default.args,
    environment: 'development'
  }
};