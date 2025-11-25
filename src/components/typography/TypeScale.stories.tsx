import type { Meta, StoryObj } from '@storybook/react';
import { TypeScale } from './TypeScale';

const meta = {
  title: 'Typography/TypeScale',
  component: TypeScale,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    showUkrainian: {
      control: 'boolean',
      description: 'Show Ukrainian text samples',
    },
    showTextStyles: {
      control: 'boolean',
      description: 'Show text style variations (bold, italic, etc.)',
    },
    showVariants: {
      control: 'boolean',
      description: 'Show font variant features',
    },
    showCodeBlock: {
      control: 'boolean',
      description: 'Show code block example',
    },
  },
} satisfies Meta<typeof TypeScale>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic font examples
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

// Full showcase with all features enabled
export const FullShowcase: Story = {
  args: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    showUkrainian: true,
    showTextStyles: true,
    showVariants: true,
    showCodeBlock: true,
  },
};

// Ukrainian text example
export const WithUkrainian: Story = {
  args: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    showUkrainian: true,
  },
};

// Text styles showcase
export const TextStyles: Story = {
  args: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    showTextStyles: true,
  },
};

// Font variants showcase
export const FontVariants: Story = {
  args: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    showVariants: true,
  },
};

// Code block showcase
export const CodeBlock: Story = {
  args: {
    fontFamily: 'ui-monospace, monospace',
    showCodeBlock: true,
  },
};
