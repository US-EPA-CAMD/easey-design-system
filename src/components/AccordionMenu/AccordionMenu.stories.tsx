import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AccordionMenu } from './AccordionMenu';

const meta = {
  title: 'Easey Design System / Accordion Menu',
  component: AccordionMenu,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Accordion Menu component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionMenu>;

export default meta;
type Story = StoryObj<typeof AccordionMenu>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'data',
        label: 'DATA',
        current: true,
        expanded: true,
        subItems: [
          {
            id: 'data-home',
            label: 'Data Home',
            href: 'https://easey-dev.app.cloud.gov/campd',
            current: true,
          },
          {
            id: 'custom-data-download',
            label: 'Custom Data Download',
            href: '#custom-data-download',
            current: false,
          },
          {
            id: 'bulk-data-files',
            label: 'Bulk Data Files',
            href: '#bulk-data-files',
            current: false,
          },
          {
            id: 'cam-api',
            label: 'CAM API',
            href: '#cam-api',
            current: false,
          },
        ],
      },
      {
        id: 'analysis',
        label: 'ANALYSIS',
        current: false,
        expanded: false,
        comingSoon: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      },
      {
        id: 'visualization',
        label: 'VISUALIZATION',
        current: false,
        expanded: false,
        comingSoon: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      },
    ],
  },
};
