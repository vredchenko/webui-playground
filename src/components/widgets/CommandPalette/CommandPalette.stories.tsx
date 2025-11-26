import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CommandPalette, CommandGroup } from './CommandPalette';

const meta = {
  title: 'Widgets/Command Palette/Self-Written',
  component: CommandPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A self-written command palette component with fuzzy search, keyboard navigation, and grouped commands.

## Features
- **Keyboard shortcut**: Opens with \`Cmd+K\` / \`Ctrl+K\`
- **Fuzzy search**: Matches against label, description, and keywords
- **Keyboard navigation**: Arrow keys, Tab, Enter, Escape
- **Grouped commands**: Organize commands into logical groups
- **Customizable shortcuts**: Display keyboard shortcuts for actions
- **Dark mode support**: Automatically adapts to system preference
- **Accessible**: ARIA attributes, focus management, screen reader friendly

## Usage
\`\`\`tsx
import { CommandPalette } from './CommandPalette';

const groups = [
  {
    id: 'navigation',
    label: 'Navigation',
    items: [
      { id: 'home', label: 'Go to Home', onSelect: () => navigate('/') },
    ],
  },
];

<CommandPalette groups={groups} />
\`\`\`

Press \`Cmd+K\` or \`Ctrl+K\` to open the command palette.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons as inline SVGs
const icons = {
  home: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
    </svg>
  ),
  folder: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
  ),
  theme: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  ),
  help: (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  ),
};

// Sample command groups
const sampleGroups: CommandGroup[] = [
  {
    id: 'navigation',
    label: 'Navigation',
    items: [
      {
        id: 'home',
        label: 'Go to Home',
        description: 'Navigate to the home page',
        icon: icons.home,
        shortcut: ['⌘', 'H'],
        keywords: ['main', 'start', 'dashboard'],
        onSelect: () => alert('Navigating to Home'),
      },
      {
        id: 'search',
        label: 'Search...',
        description: 'Search across all content',
        icon: icons.search,
        shortcut: ['⌘', 'F'],
        keywords: ['find', 'query', 'lookup'],
        onSelect: () => alert('Opening search'),
      },
      {
        id: 'settings',
        label: 'Settings',
        description: 'Open application settings',
        icon: icons.settings,
        shortcut: ['⌘', ','],
        keywords: ['preferences', 'config', 'options'],
        onSelect: () => alert('Opening settings'),
      },
    ],
  },
  {
    id: 'user',
    label: 'User',
    items: [
      {
        id: 'profile',
        label: 'View Profile',
        description: 'See your profile information',
        icon: icons.user,
        onSelect: () => alert('Viewing profile'),
      },
      {
        id: 'account',
        label: 'Account Settings',
        description: 'Manage your account',
        icon: icons.user,
        onSelect: () => alert('Opening account settings'),
      },
    ],
  },
  {
    id: 'actions',
    label: 'Actions',
    items: [
      {
        id: 'new-doc',
        label: 'New Document',
        description: 'Create a new document',
        icon: icons.document,
        shortcut: ['⌘', 'N'],
        keywords: ['create', 'add', 'file'],
        onSelect: () => alert('Creating new document'),
      },
      {
        id: 'new-folder',
        label: 'New Folder',
        description: 'Create a new folder',
        icon: icons.folder,
        keywords: ['directory', 'create'],
        onSelect: () => alert('Creating new folder'),
      },
      {
        id: 'open-terminal',
        label: 'Open Terminal',
        description: 'Launch the integrated terminal',
        icon: icons.terminal,
        shortcut: ['⌘', '`'],
        keywords: ['console', 'shell', 'cli'],
        onSelect: () => alert('Opening terminal'),
      },
    ],
  },
  {
    id: 'help',
    label: 'Help',
    items: [
      {
        id: 'docs',
        label: 'Documentation',
        description: 'View the documentation',
        icon: icons.document,
        shortcut: ['⌘', '?'],
        onSelect: () => alert('Opening documentation'),
      },
      {
        id: 'shortcuts',
        label: 'Keyboard Shortcuts',
        description: 'View all keyboard shortcuts',
        icon: icons.code,
        onSelect: () => alert('Showing keyboard shortcuts'),
      },
      {
        id: 'support',
        label: 'Get Help',
        description: 'Contact support',
        icon: icons.help,
        onSelect: () => alert('Opening support'),
      },
    ],
  },
];

// Wrapper component to show the palette always open
const CommandPaletteDemo = ({ groups, ...props }: { groups: CommandGroup[]; placeholder?: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const enhancedGroups = groups.map(group => ({
    ...group,
    items: group.items.map(item => ({
      ...item,
      onSelect: () => {
        setLastAction(item.label);
        // Re-open after a brief moment to show the selection
        setTimeout(() => setIsOpen(true), 300);
      },
    })),
  }));

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}>
        <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 600 }}>Command Palette</h1>
        <p style={{ margin: '8px 0 0', opacity: 0.9 }}>
          Press <kbd style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.9em',
          }}>⌘K</kbd> or <kbd style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.9em',
          }}>Ctrl+K</kbd> to open
        </p>
        {lastAction && (
          <p style={{ margin: '16px 0 0', opacity: 0.8, fontSize: '0.9rem' }}>
            Last action: <strong>{lastAction}</strong>
          </p>
        )}
      </div>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: 'white',
            color: '#764ba2',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          Open Command Palette
        </button>
      )}

      <CommandPalette
        groups={enhancedGroups}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...props}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    groups: sampleGroups,
  },
  render: (args) => <CommandPaletteDemo groups={args.groups} />,
  parameters: {
    docs: {
      description: {
        story: 'The default command palette with navigation, user, and action commands. Try typing to search!',
      },
    },
  },
};

export const CustomPlaceholder: Story = {
  args: {
    groups: sampleGroups,
    placeholder: "What would you like to do?",
  },
  render: (args) => (
    <CommandPaletteDemo
      groups={args.groups}
      placeholder={args.placeholder}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Command palette with a custom placeholder text.',
      },
    },
  },
};

// IDE-style command palette
const ideGroups: CommandGroup[] = [
  {
    id: 'file',
    label: 'File',
    items: [
      { id: 'new-file', label: 'New File', icon: icons.document, shortcut: ['⌘', 'N'], onSelect: () => {} },
      { id: 'open-file', label: 'Open File...', icon: icons.folder, shortcut: ['⌘', 'O'], onSelect: () => {} },
      { id: 'save', label: 'Save', icon: icons.document, shortcut: ['⌘', 'S'], onSelect: () => {} },
      { id: 'save-as', label: 'Save As...', icon: icons.document, shortcut: ['⌘', '⇧', 'S'], onSelect: () => {} },
    ],
  },
  {
    id: 'edit',
    label: 'Edit',
    items: [
      { id: 'undo', label: 'Undo', shortcut: ['⌘', 'Z'], onSelect: () => {} },
      { id: 'redo', label: 'Redo', shortcut: ['⌘', '⇧', 'Z'], onSelect: () => {} },
      { id: 'cut', label: 'Cut', shortcut: ['⌘', 'X'], onSelect: () => {} },
      { id: 'copy', label: 'Copy', shortcut: ['⌘', 'C'], onSelect: () => {} },
      { id: 'paste', label: 'Paste', shortcut: ['⌘', 'V'], onSelect: () => {} },
    ],
  },
  {
    id: 'view',
    label: 'View',
    items: [
      { id: 'toggle-sidebar', label: 'Toggle Sidebar', icon: icons.code, shortcut: ['⌘', 'B'], onSelect: () => {} },
      { id: 'toggle-terminal', label: 'Toggle Terminal', icon: icons.terminal, shortcut: ['⌘', '`'], onSelect: () => {} },
      { id: 'zen-mode', label: 'Zen Mode', shortcut: ['⌘', 'K', 'Z'], onSelect: () => {} },
    ],
  },
  {
    id: 'go',
    label: 'Go',
    items: [
      { id: 'go-to-file', label: 'Go to File...', icon: icons.search, shortcut: ['⌘', 'P'], keywords: ['quick open'], onSelect: () => {} },
      { id: 'go-to-symbol', label: 'Go to Symbol...', icon: icons.code, shortcut: ['⌘', '⇧', 'O'], onSelect: () => {} },
      { id: 'go-to-line', label: 'Go to Line...', shortcut: ['⌘', 'G'], onSelect: () => {} },
    ],
  },
  {
    id: 'theme',
    label: 'Appearance',
    items: [
      { id: 'dark-theme', label: 'Dark Theme', icon: icons.theme, description: 'Switch to dark mode', onSelect: () => {} },
      { id: 'light-theme', label: 'Light Theme', icon: icons.theme, description: 'Switch to light mode', onSelect: () => {} },
    ],
  },
];

export const IDEStyle: Story = {
  args: {
    groups: ideGroups,
    placeholder: "Type a command...",
  },
  render: (args) => <CommandPaletteDemo groups={args.groups} placeholder={args.placeholder} />,
  parameters: {
    docs: {
      description: {
        story: 'An IDE-style command palette similar to VS Code, with file, edit, view, and navigation commands.',
      },
    },
  },
};

// Minimal example with just a few actions
const minimalGroups: CommandGroup[] = [
  {
    id: 'actions',
    label: 'Quick Actions',
    items: [
      { id: 'new', label: 'New Item', onSelect: () => {} },
      { id: 'save', label: 'Save Changes', shortcut: ['⌘', 'S'], onSelect: () => {} },
      { id: 'share', label: 'Share...', onSelect: () => {} },
    ],
  },
];

export const Minimal: Story = {
  args: {
    groups: minimalGroups,
  },
  render: (args) => <CommandPaletteDemo groups={args.groups} />,
  parameters: {
    docs: {
      description: {
        story: 'A minimal command palette with just a few quick actions.',
      },
    },
  },
};
