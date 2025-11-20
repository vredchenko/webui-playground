import type { Meta, StoryObj } from '@storybook/react';
import { TypeScale } from './TypeScale';

const meta = {
  title: 'Typography/TypeScale',
  component: TypeScale,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypeScale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SystemFont: Story = {
  args: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
};

export const Serif: Story = {
  args: {
    fontFamily: 'Georgia, serif',
  },
};

export const Monospace: Story = {
  args: {
    fontFamily: 'ui-monospace, monospace',
  },
};
