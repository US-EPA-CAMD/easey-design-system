import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TitledProgressBar, TitledProgressBarProps } from './TitledProgressBar';
import { config } from '../../config';

export default {
  title: `${config.appName} / Progress Bar`,
  component: TitledProgressBar,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Environment Progress Bar component`,
      },
    },
  },
} as Meta;

const Template: Story<TitledProgressBarProps> = (args) => <TitledProgressBar {...args} />;

export const Twenty = Template.bind({});
Twenty.args = {
  title: 'Emission Submission Progress',
  lastUpdated: 'Last Updated September 20, 2021 at 6:30 EST',
  percentage: 20
};

export const Fifty = Template.bind({});
Fifty.args = {
  title: 'Emission Submission Progress',
  lastUpdated: 'Last Updated September 20, 2021 at 6:30 EST',
  percentage: 50
};

export const OneHundred = Template.bind({});
OneHundred.args = {
  title: 'Emission Submission Progress',
  lastUpdated: 'Last Updated September 20, 2021 at 6:30 EST',
  percentage: 100
};
