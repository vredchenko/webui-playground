import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedBox } from './AnimatedBox';

const meta = {
  title: 'Animations/AnimatedBox',
  component: AnimatedBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bounce: Story = {
  args: {
    animation: 'bounce',
    duration: 2,
  },
};

export const Pulse: Story = {
  args: {
    animation: 'pulse',
    duration: 2,
  },
};

export const Spin: Story = {
  args: {
    animation: 'spin',
    duration: 2,
  },
};

export const Slide: Story = {
  args: {
    animation: 'slide',
    duration: 2,
  },
};

export const Fade: Story = {
  args: {
    animation: 'fade',
    duration: 2,
  },
};

export const Fast: Story = {
  args: {
    animation: 'bounce',
    duration: 0.5,
  },
};
