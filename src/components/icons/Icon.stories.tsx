import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Icons/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heart: Story = {
  args: {
    name: 'heart',
    size: 24,
    color: '#ef4444',
  },
};

export const Star: Story = {
  args: {
    name: 'star',
    size: 24,
    color: '#f59e0b',
  },
};

export const Home: Story = {
  args: {
    name: 'home',
    size: 24,
  },
};

export const Settings: Story = {
  args: {
    name: 'settings',
    size: 24,
  },
};

export const User: Story = {
  args: {
    name: 'user',
    size: 24,
  },
};

export const Large: Story = {
  args: {
    name: 'heart',
    size: 64,
    color: '#ef4444',
  },
};
