import type { Meta, StoryObj } from '@storybook/react';
import { GradientBackground } from './GradientBackground';

const meta = {
  title: 'Backgrounds/Gradients',
  component: GradientBackground,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GradientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sunset: Story = {
  args: {
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    label: 'Sunset Purple',
  },
};

export const Ocean: Story = {
  args: {
    gradient: 'linear-gradient(120deg, #2af598 0%, #009efd 100%)',
    label: 'Ocean Blue',
  },
};

export const Fire: Story = {
  args: {
    gradient: 'linear-gradient(45deg, #ff512f 0%, #dd2476 100%)',
    label: 'Fire',
  },
};

export const RadialGradient: Story = {
  args: {
    gradient: 'radial-gradient(circle, #667eea 0%, #764ba2 100%)',
    label: 'Radial Burst',
  },
};
