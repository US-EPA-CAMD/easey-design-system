import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AppVersion } from './AppVersion';

const meta: Meta<typeof AppVersion> = {
  title: "Easey Design System / App Version Banner",
  component: AppVersion,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System App Version Banner component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppVersion>;

export default meta;
type Story = StoryObj<typeof AppVersion>;

export const Default: Story = {
  args: {
    version: 'v0.0.98',
    publishDate: 'Tues 13 2021',
  },
};