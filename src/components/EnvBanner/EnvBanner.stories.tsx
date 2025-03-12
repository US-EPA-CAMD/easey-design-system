import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EnvBanner } from './EnvBanner';

const meta = {
  title: "Easey Design System / Environment Banner",
  component: EnvBanner,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Environment Banner component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EnvBanner>;

export default meta;
type Story = StoryObj<typeof EnvBanner>;

export const DevEnvironment: Story = {
  args: { label: 'development' }
};

export const TestEnvironment: Story = {
  args: { label: 'testing' }
};

export const StageEnvironment: Story = {
  args: { label: 'staging' }
};