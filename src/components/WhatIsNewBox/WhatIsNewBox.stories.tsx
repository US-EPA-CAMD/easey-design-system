import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { config } from '../../config';
import { WhatIsNewBox, WhatIsNewBoxProps } from './WhatIsNewBox';

export default {
  title: `${config.appName} / What Is New Box`,
  component: WhatIsNewBox,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System What Is New Box component`,
      },
    },
  },
} as Meta;

const Template: Story<WhatIsNewBoxProps> = (args) => <WhatIsNewBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'View the Tutorials for data & quick start guides on using CAMPDs new features',
};
