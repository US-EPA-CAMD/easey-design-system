import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProgressBarWithTitle, ProgressBarProps } from './ProgressBarWithTitle';
import { config } from '../../config';

export default {
  title: `${config.appName} / Progress Bar`,
  component: ProgressBarWithTitle,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Environment Progress Bar component`,
      },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBarWithTitle {...args} />;

export const Halfway = Template.bind({});
Halfway.args = {
  title: 'Emission Submission Progress',
  lastUpdated: 'Last Updated September 20, 2021 at 6:30 EST',
  percentage: 20
};
