import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from './Header';
import { config } from '../../config';

export default {
  title: `${config.appName} / Header`,
  component: Header,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Header component`,
      },
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoUrl: 'https://www.epa.gov',
  searchUrl: 'https://search.epa.gov/epasearch',
  menuItems: [
    {
      name: 'Environmental Topics',
      href: 'https://www.epa.gov/environmental-topics',
    },
    {
      name: 'Laws and Regulations',
      href: 'https://www.epa.gov/laws-regulations',
    },
    {
      name: 'About EPA',
      href: 'https://www.epa.gov/aboutepa',
    },
    {
      name: 'Accessibility',
      href: 'https://www.epa.gov/accessibility',
    },
    {
      name: 'Privacy',
      href: 'https://www.epa.gov/privacy',
    },
    {
      name: 'Privacy and Security Notice',
      href: 'https://www.epa.gov/privacy/privacy-and-security-notice',
    },
  ],
};

export const WithEnvironmentBanner = Template.bind({});
WithEnvironmentBanner.args = {
  environment: 'development',
  ...Default.args,
};
