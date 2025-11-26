import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CmdkPalette } from './CmdkPalette';

const meta = {
  title: 'Widgets/Command Palette/cmdk',
  component: CmdkPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# cmdk - The Gold Standard

**cmdk** (⌘K) is the most popular command palette library for React, created by Paco Coursey.
It's used in production by **Vercel**, **Linear**, **Raycast**, and many other top-tier products.

## Key Features
- 🎨 **Unstyled** - Complete control over styling
- ⚡ **Fast** - Built-in fuzzy search with \`command-score\`
- 🔗 **Composable** - Primitives that work together
- ♿ **Accessible** - Full ARIA support, keyboard navigation
- 📦 **Lightweight** - ~5KB minified + gzipped
- 🔄 **Nested pages** - Built-in support for sub-menus

## Installation
\`\`\`bash
npm install cmdk
\`\`\`

## Basic Usage
\`\`\`tsx
import { Command } from 'cmdk';

<Command.Dialog open={open} onOpenChange={setOpen}>
  <Command.Input placeholder="Type a command..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions">
      <Command.Item onSelect={() => console.log('Selected')}>
        Search...
      </Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>
\`\`\`

## Links
- [GitHub](https://github.com/pacocoursey/cmdk)
- [Documentation](https://cmdk.paco.me)
- [npm](https://www.npmjs.com/package/cmdk)

Press \`Cmd+K\` or \`Ctrl+K\` to open the command palette.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CmdkPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

// Demo wrapper
const CmdkDemo = () => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px',
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
          }}>
            BEST IN CLASS
          </span>
        </div>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 700 }}>
          cmdk
        </h1>
        <p style={{ margin: '8px 0 0', opacity: 0.7, fontSize: '1.1rem' }}>
          Fast, composable, unstyled command menu for React
        </p>
        <p style={{ margin: '16px 0 0', opacity: 0.5, fontSize: '0.9rem' }}>
          Used by Vercel, Linear, Raycast, and more
        </p>
      </div>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            background: 'white',
            color: '#0f172a',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          Open Command Menu
          <kbd style={{
            background: '#e5e7eb',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.8em',
          }}>⌘K</kbd>
        </button>
      )}

      <CmdkPalette open={open} onOpenChange={setOpen} />
    </div>
  );
};

export const Default: Story = {
  render: () => <CmdkDemo />,
  parameters: {
    docs: {
      description: {
        story: `
A Linear-inspired command palette built with cmdk. Features:
- Fuzzy search across all commands
- Nested pages (try "Search Projects..." or "Change Theme...")
- Keyboard navigation with arrow keys
- Beautiful animations and transitions

The styling is custom CSS - cmdk provides unstyled primitives.
        `,
      },
    },
  },
};
