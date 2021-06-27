import React from 'react';

import { EnvBanner } from './EnvBanner';

export default {
  title: 'EnvBanner',
  component: EnvBanner,
  argTypes: {
    label: 'string',
  },
}

const Template = (args) => <EnvBanner {...args} />;

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
