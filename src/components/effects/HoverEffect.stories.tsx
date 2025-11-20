import type { Meta, StoryObj } from '@storybook/react';
import { HoverEffect } from './HoverEffect';

const meta = {
  title: 'Effects/HoverEffects',
  component: HoverEffect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverEffect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glow: Story = {
  args: {
    effect: 'glow',
    children: 'Hover for Glow',
  },
};

export const Lift: Story = {
  args: {
    effect: 'lift',
    children: 'Hover to Lift',
  },
};

export const Scale: Story = {
  args: {
    effect: 'scale',
    children: 'Hover to Scale',
  },
};

export const Rotate: Story = {
  args: {
    effect: 'rotate',
    children: 'Hover to Rotate',
  },
};

export const Blur: Story = {
  args: {
    effect: 'blur',
    children: 'Hover to Blur',
  },
};
