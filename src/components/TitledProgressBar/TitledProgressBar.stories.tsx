import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TitledProgressBar } from './TitledProgressBar';

const meta = {
  title: "Easey Design System / Progress Bar",
  component: TitledProgressBar,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Progress Bar component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TitledProgressBar>;

export default meta;
type Story = StoryObj<typeof TitledProgressBar>;

export const Zero: Story = {
  args: {
    title: 'Emission Submission Progress',
    lastUpdated: 'Last Updated September 20, 2021 at 6:30 EST',
    percentage: 0
  }
};

export const Twenty: Story = { args: { ...Zero.args, percentage: 20 } };
export const Fifty: Story = { args: { ...Zero.args, percentage: 50 } };
export const OneHundred: Story = { args: { ...Zero.args, percentage: 100 } };