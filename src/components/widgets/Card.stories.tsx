import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Widgets/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is a simple card with default styling. Cards are flexible containers for content.',
    variant: 'default',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    children: 'This card has a shadow elevation effect.',
    variant: 'elevated',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    children: 'This card has a colored border outline.',
    variant: 'outlined',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    children: 'Cards can include images at the top.',
    variant: 'elevated',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
  },
};
