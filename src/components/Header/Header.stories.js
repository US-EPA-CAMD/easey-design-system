import React from 'react';

import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    logoSrc: 'string',
    logoUrl: 'string',
    searchUrl: 'string',
    environment: 'string',
    menuItems: [
      {
        link: 'string',
        name: 'string',
        menuItems: [
          {
            link: 'string',
            name: 'string',
          },
        ],
      },
    ],
  },
}

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoSrc: '/images/EPALogo.svg',
  logoUrl: 'https://www.epa.gov',
  searchUrl: 'https://search.epa.gov/epasearch',
  menuItems: [
    {
      link: 'https://www.epa.gov/environmental-topics',
      name: 'Environmental Topics',
      menuItems: [
        {
          link: 'https://www.epa.gov/environmental-topics/air-topics',
          name: 'Air',
        },
        {
          link: 'https://www.epa.gov/bedbugs',
          name: 'Bed Bugs',
        },
        {
          link:
            'https://www.epa.gov/environmental-topics/chemicals-and-toxics-topics',
          name: 'Chemicals and Toxics',
        },
        {
          link:
            'https://www.epa.gov/environmental-topics/location-specific-environmental-information',
          name: 'Environmental Information by Location',
        },
      ],
    },
    {
      link: 'https://www.epa.gov/laws-regulations',
      name: 'Laws and Regulations',
      menuItems: [
        {
          link: 'https://www.epa.gov/regulatory-information-sector',
          name: 'By Business Sector',
        },
        {
          link: 'https://www.epa.gov/regulatory-information-topic',
          name: 'By Topics',
        },
        {
          link: 'https://www.epa.gov/compliance',
          name: 'Compliance',
        },
        {
          link: 'https://www.epa.gov/enforcement',
          name: 'Enforcement',
        },
      ],
    },
    {
      link: 'https://www.epa.gov/aboutepa',
      name: 'About EPA',
      menuItems: [
        {
          link: 'https://www.epa.gov/aboutepa/epa-organization-chart',
          name: 'Organization Chart',
        },
        {
          link: 'https://cfpub.epa.gov/locator/index.cfm',
          name: 'Staff Directory',
        },
        {
          link: 'https://www.epa.gov/planandbudget',
          name: 'Planning, Budget, and Results',
        },
        {
          link: 'https://www.epa.gov/careers',
          name: 'Jobs and Internships',
        },
      ],
    },
    {
      link: 'https://www.epa.gov/accessibility',
      name: 'Accessibility',
      menuItems: [],
    },
    {
      link: 'https://www.epa.gov/privacy',
      name: 'Privacy',
      menuItems: [],
    },
    {
      link: 'https://www.epa.gov/privacy/privacy-and-security-notice',
      name: 'Privacy and Security Notice',
      menuItems: [],
    },
  ],
};

export const WithEnvironmentBanner = Template.bind({});
WithEnvironmentBanner.args = {
  environment: 'development',
  ...Default.args,
};
