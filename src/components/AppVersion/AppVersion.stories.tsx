import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AppVersion, AppVersionProps } from './AppVersion';
import { config } from '../../config';

export default {
  title: `${config.appName} / App Version Banner`,
  component: AppVersion,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System App Version Banner component`,
      },
    },
  },
} as Meta;

const Template: Story<AppVersionProps> = (args) => <AppVersion {...args} />;

export const Default = Template.bind({});
Default.args = {
  version: 'v0.0.98',
  publishDate: 'Tues 13 2021',
};
