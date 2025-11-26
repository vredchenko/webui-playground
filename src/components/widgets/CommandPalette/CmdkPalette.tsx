import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import './CmdkPalette.css';

export interface CmdkPaletteProps {
  /** Whether the palette is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Command palette built with cmdk - the gold standard library used by
 * Vercel, Linear, Raycast, and many other top-tier products.
 *
 * cmdk provides unstyled, accessible primitives that you can style however you want.
 * This example shows a polished, Linear-inspired design.
 *
 * @see https://cmdk.paco.me
 */
export const CmdkPalette: React.FC<CmdkPaletteProps> = ({
  open: controlledOpen,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [pages, setPages] = useState<string[]>([]);
  const page = pages[pages.length - 1];

  const open = controlledOpen ?? internalOpen;
  const setOpen = (value: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  };

  // Toggle with keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open]);

  // Reset state when closing
  useEffect(() => {
    if (!open) {
      setSearch('');
      setPages([]);
    }
  }, [open]);

  const handleSelect = (callback: () => void) => {
    setOpen(false);
    callback();
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command Menu"
      className="cmdk-dialog"
    >
      <div className="cmdk-container">
        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder="Type a command or search..."
          className="cmdk-input"
        />
        <Command.List className="cmdk-list">
          <Command.Empty className="cmdk-empty">No results found.</Command.Empty>

          {!page && (
            <>
              <Command.Group heading="Suggestions" className="cmdk-group">
                <Command.Item
                  onSelect={() => handleSelect(() => alert('Searching project...'))}
                  className="cmdk-item"
                >
                  <SearchIcon />
                  <span>Search Project...</span>
                  <Kbd keys={['⌘', 'P']} />
                </Command.Item>
                <Command.Item
                  onSelect={() => handleSelect(() => alert('Opening file...'))}
                  className="cmdk-item"
                >
                  <FileIcon />
                  <span>Open File</span>
                  <Kbd keys={['⌘', 'O']} />
                </Command.Item>
                <Command.Item
                  onSelect={() => handleSelect(() => alert('Running command...'))}
                  className="cmdk-item"
                >
                  <TerminalIcon />
                  <span>Run Command</span>
                  <Kbd keys={['⌘', '⇧', 'P']} />
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Navigation" className="cmdk-group">
                <Command.Item
                  onSelect={() => setPages([...pages, 'projects'])}
                  className="cmdk-item"
                >
                  <FolderIcon />
                  <span>Search Projects...</span>
                  <ChevronIcon />
                </Command.Item>
                <Command.Item
                  onSelect={() => setPages([...pages, 'teams'])}
                  className="cmdk-item"
                >
                  <TeamIcon />
                  <span>Join Team...</span>
                  <ChevronIcon />
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Settings" className="cmdk-group">
                <Command.Item
                  onSelect={() => setPages([...pages, 'theme'])}
                  className="cmdk-item"
                >
                  <ThemeIcon />
                  <span>Change Theme...</span>
                  <ChevronIcon />
                </Command.Item>
                <Command.Item
                  onSelect={() => handleSelect(() => alert('Opening settings...'))}
                  className="cmdk-item"
                >
                  <SettingsIcon />
                  <span>Settings</span>
                  <Kbd keys={['⌘', ',']} />
                </Command.Item>
              </Command.Group>
            </>
          )}

          {page === 'projects' && (
            <Command.Group heading="Projects" className="cmdk-group">
              <Command.Item onSelect={() => handleSelect(() => alert('Opening Project A'))} className="cmdk-item">
                <FolderIcon />
                <span>Project Alpha</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => alert('Opening Project B'))} className="cmdk-item">
                <FolderIcon />
                <span>Project Beta</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => alert('Opening Project G'))} className="cmdk-item">
                <FolderIcon />
                <span>Project Gamma</span>
              </Command.Item>
            </Command.Group>
          )}

          {page === 'teams' && (
            <Command.Group heading="Teams" className="cmdk-group">
              <Command.Item onSelect={() => handleSelect(() => alert('Joining Engineering'))} className="cmdk-item">
                <TeamIcon />
                <span>Engineering</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => alert('Joining Design'))} className="cmdk-item">
                <TeamIcon />
                <span>Design</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => alert('Joining Product'))} className="cmdk-item">
                <TeamIcon />
                <span>Product</span>
              </Command.Item>
            </Command.Group>
          )}

          {page === 'theme' && (
            <Command.Group heading="Theme" className="cmdk-group">
              <Command.Item onSelect={() => handleSelect(() => alert('Switched to Light theme'))} className="cmdk-item">
                <SunIcon />
                <span>Light</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => alert('Switched to Dark theme'))} className="cmdk-item">
                <MoonIcon />
                <span>Dark</span>
              </Command.Item>
              <Command.Item onSelect={() => handleSelect(() => alert('Switched to System theme'))} className="cmdk-item">
                <DesktopIcon />
                <span>System</span>
              </Command.Item>
            </Command.Group>
          )}
        </Command.List>

        <div className="cmdk-footer">
          {pages.length > 0 && (
            <button
              onClick={() => setPages(pages.slice(0, -1))}
              className="cmdk-back"
            >
              ← Back
            </button>
          )}
          <div className="cmdk-hints">
            <span><kbd>↑↓</kbd> navigate</span>
            <span><kbd>↵</kbd> select</span>
            <span><kbd>esc</kbd> close</span>
          </div>
        </div>
      </div>
    </Command.Dialog>
  );
};

// Helper components
const Kbd: React.FC<{ keys: string[] }> = ({ keys }) => (
  <div className="cmdk-kbd-group">
    {keys.map((key, i) => (
      <kbd key={i} className="cmdk-kbd">{key}</kbd>
    ))}
  </div>
);

// Icons
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="7" cy="7" r="5" />
    <path d="M11 11L14 14" />
  </svg>
);

const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 2H10L13 5V14H4V2Z" />
    <path d="M10 2V5H13" />
  </svg>
);

const TerminalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="12" height="10" rx="1" />
    <path d="M5 7L7 9L5 11" />
    <path d="M9 11H11" />
  </svg>
);

const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 5V13H14V5H2Z" />
    <path d="M2 5V4C2 3.5 2.5 3 3 3H6L7 5" />
  </svg>
);

const TeamIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="5" r="2.5" />
    <path d="M3 14C3 11 5 9 8 9C11 9 13 11 13 14" />
  </svg>
);

const ThemeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="8" r="6" />
    <path d="M8 2V8L12 12" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="8" r="2" />
    <path d="M8 2V4M8 12V14M2 8H4M12 8H14M3.5 3.5L5 5M11 11L12.5 12.5M12.5 3.5L11 5M5 11L3.5 12.5" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="cmdk-chevron">
    <path d="M6 4L10 8L6 12" />
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="8" r="3" />
    <path d="M8 2V3M8 13V14M2 8H3M13 8H14M4 4L4.7 4.7M11.3 11.3L12 12M12 4L11.3 4.7M4.7 11.3L4 12" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 10C11 12 8 12 6 10C4 8 4 5 6 3C3 4 2 8 4 11C6 14 10 14 13 10Z" />
  </svg>
);

const DesktopIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="12" height="8" rx="1" />
    <path d="M6 14H10M8 11V14" />
  </svg>
);

export default CmdkPalette;
