import { Story, Meta } from '@storybook/react/types-6-0';
import { AccordionMenu, AccordionMenuProps } from './AccordionMenu';

export default {
  title: 'Components/Accordion Menu',
  component: AccordionMenu,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Accordion Menu component`,
      },
    },
  },
} as Meta;

const Template: Story<AccordionMenuProps> = (args) => <AccordionMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
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
      comingSoon: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 'visualization',
      label: 'VISUALIZATION',
      current: false,
      expanded: false,
      comingSoon: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};
