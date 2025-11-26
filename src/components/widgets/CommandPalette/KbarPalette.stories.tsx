import type { Meta, StoryObj } from '@storybook/react';
import { KbarPalette } from './KbarPalette';

const meta = {
  title: 'Widgets/Command Palette/kbar',
  component: KbarPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# kbar - Plug-n-Play Command Palette

**kbar** is a fast, portable, and extensible \`cmd+k\` interface for React.
It's designed with macOS Spotlight and Linear's command experience in mind.

## Key Features
- ⚡ **Plug-n-Play** - Works out of the box with minimal setup
- 🎬 **Built-in Animations** - Smooth enter/exit transitions
- ⌨️ **Keyboard Shortcuts** - Register custom keystrokes for actions
- 🔗 **Nested Actions** - Support for sub-menus and hierarchical commands
- ↩️ **Undo/Redo** - Built-in history for reversible actions
- 🎨 **Customizable** - Full control over rendering and styling

## Installation
\`\`\`bash
npm install kbar
\`\`\`

## Basic Usage
\`\`\`tsx
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
} from 'kbar';

const actions = [
  {
    id: 'home',
    name: 'Home',
    shortcut: ['g', 'h'],
    perform: () => navigate('/'),
  },
];

<KBarProvider actions={actions}>
  <KBarPortal>
    <KBarPositioner>
      <KBarAnimator>
        <KBarSearch />
        <KBarResults />
      </KBarAnimator>
    </KBarPositioner>
  </KBarPortal>
  <App />
</KBarProvider>
\`\`\`

## Links
- [GitHub](https://github.com/timc1/kbar)
- [Demo](https://kbar.vercel.app)
- [npm](https://www.npmjs.com/package/kbar)

Press \`Cmd+K\` or \`Ctrl+K\` to open the command palette.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KbarPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

// Demo wrapper
const KbarDemo = () => {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
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
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 600,
          }}>
            PLUG-N-PLAY
          </span>
        </div>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 700 }}>
          kbar
        </h1>
        <p style={{ margin: '8px 0 0', opacity: 0.9, fontSize: '1.1rem' }}>
          Fast, portable, extensible cmd+k interface
        </p>
        <p style={{ margin: '12px 0 0', opacity: 0.7, fontSize: '0.9rem' }}>
          Built-in animations, keyboard shortcuts, and nested actions
        </p>
      </div>

      <KbarPalette />

      <div style={{
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '14px',
        marginTop: '16px',
      }}>
        Try shortcuts: <kbd style={{
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '4px 8px',
          borderRadius: '4px',
          margin: '0 4px',
        }}>g h</kbd> for Home,
        <kbd style={{
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '4px 8px',
          borderRadius: '4px',
          margin: '0 4px',
        }}>c</kbd> to Create
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <KbarDemo />,
  parameters: {
    docs: {
      description: {
        story: `
A Tailwind-docs inspired command palette built with kbar. Features:
- Built-in fuzzy search
- Nested actions (try "Create New..." or "Change Theme...")
- Keyboard shortcut sequences (e.g., \`g h\` for Home)
- Smooth animations powered by kbar's built-in animator

kbar uses a provider pattern, wrapping your app to enable the command palette globally.
        `,
      },
    },
  },
};
