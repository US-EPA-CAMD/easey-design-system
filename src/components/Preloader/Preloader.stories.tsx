import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Preloader from './Preloader';

const meta = {
  title: "Easey Design System / Preloader",
  component: Preloader,
  parameters: {
    docs: {
      description: {
        component: `### EASEY Design System Preloader component`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Preloader>;

export default meta;
type Story = StoryObj<typeof Preloader>;

export const Default: Story = {};