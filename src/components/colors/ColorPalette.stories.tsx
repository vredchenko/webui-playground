import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from './ColorPalette';

const meta = {
  title: 'Colors/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary Colors',
    colors: [
      { name: 'Blue', hex: '#3b82f6' },
      { name: 'Green', hex: '#10b981' },
      { name: 'Red', hex: '#ef4444' },
      { name: 'Yellow', hex: '#f59e0b' },
    ],
  },
};

export const Grayscale: Story = {
  args: {
    title: 'Grayscale',
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Dark Gray', hex: '#4b5563' },
      { name: 'Gray', hex: '#9ca3af' },
      { name: 'Light Gray', hex: '#d1d5db' },
      { name: 'White', hex: '#ffffff' },
    ],
  },
};

export const Pastels: Story = {
  args: {
    title: 'Pastel Palette',
    colors: [
      { name: 'Mint', hex: '#b5ead7' },
      { name: 'Lavender', hex: '#c7ceea' },
      { name: 'Peach', hex: '#ffc8a2' },
      { name: 'Sky', hex: '#a2d2ff' },
    ],
  },
};
