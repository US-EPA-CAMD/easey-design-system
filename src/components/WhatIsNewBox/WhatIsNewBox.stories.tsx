import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WhatIsNewBox } from './WhatIsNewBox';

const meta = {
  title: "Easey Design System / What's New Box",
  component: WhatIsNewBox,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System What's New Box component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WhatIsNewBox>;

export default meta;
type Story = StoryObj<typeof WhatIsNewBox>;

export const Default: Story = {
  args: {
    title: `What's New?`,
    text: 'View the Tutorials for data & quick start guides on using CAMPDs new features'
  }
};