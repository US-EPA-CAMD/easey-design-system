import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EnvBanner, EnvBannerProps } from './EnvBanner';
import { config } from '../../config';

export default {
  title: `${config.appName} / App Version Banner`,
  component: EnvBanner,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Environment Banner component`,
      },
    },
  },
} as Meta;

const Template: Story<EnvBannerProps> = (args) => <EnvBanner {...args} />;

export const DevEnvironment = Template.bind({});
DevEnvironment.args = {
  label: 'development',
};

export const TestEnvironment = Template.bind({});
TestEnvironment.args = {
  label: 'testing',
};

export const StageEnvironment = Template.bind({});
StageEnvironment.args = {
  label: 'staging',
};
