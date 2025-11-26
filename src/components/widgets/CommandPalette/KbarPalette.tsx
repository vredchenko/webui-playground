import React from 'react';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  useKBar,
  Action,
  ActionImpl,
} from 'kbar';
import './KbarPalette.css';

// Define actions for the command palette
const actions: Action[] = [
  {
    id: 'home',
    name: 'Home',
    shortcut: ['g', 'h'],
    keywords: 'go home main',
    section: 'Navigation',
    perform: () => alert('Navigating to Home'),
    icon: <HomeIcon />,
  },
  {
    id: 'docs',
    name: 'Documentation',
    shortcut: ['g', 'd'],
    keywords: 'help guide docs',
    section: 'Navigation',
    perform: () => alert('Opening Documentation'),
    icon: <DocIcon />,
  },
  {
    id: 'blog',
    name: 'Blog',
    shortcut: ['g', 'b'],
    keywords: 'posts articles',
    section: 'Navigation',
    perform: () => alert('Opening Blog'),
    icon: <BlogIcon />,
  },
  {
    id: 'search',
    name: 'Search...',
    shortcut: ['/', 's'],
    keywords: 'find query',
    section: 'Actions',
    perform: () => alert('Opening Search'),
    icon: <SearchIcon />,
  },
  {
    id: 'create',
    name: 'Create New...',
    shortcut: ['c'],
    keywords: 'new add create',
    section: 'Actions',
    icon: <PlusIcon />,
  },
  {
    id: 'create-doc',
    name: 'New Document',
    keywords: 'create document file',
    parent: 'create',
    perform: () => alert('Creating new document'),
    icon: <DocIcon />,
  },
  {
    id: 'create-folder',
    name: 'New Folder',
    keywords: 'create folder directory',
    parent: 'create',
    perform: () => alert('Creating new folder'),
    icon: <FolderIcon />,
  },
  {
    id: 'create-project',
    name: 'New Project',
    keywords: 'create project workspace',
    parent: 'create',
    perform: () => alert('Creating new project'),
    icon: <ProjectIcon />,
  },
  {
    id: 'theme',
    name: 'Change Theme...',
    keywords: 'dark light mode',
    section: 'Preferences',
    icon: <ThemeIcon />,
  },
  {
    id: 'theme-light',
    name: 'Light',
    keywords: 'light theme bright',
    parent: 'theme',
    perform: () => alert('Switched to Light theme'),
    icon: <SunIcon />,
  },
  {
    id: 'theme-dark',
    name: 'Dark',
    keywords: 'dark theme night',
    parent: 'theme',
    perform: () => alert('Switched to Dark theme'),
    icon: <MoonIcon />,
  },
  {
    id: 'theme-system',
    name: 'System',
    keywords: 'system auto theme',
    parent: 'theme',
    perform: () => alert('Using System theme'),
    icon: <DesktopIcon />,
  },
  {
    id: 'copy-link',
    name: 'Copy Link',
    shortcut: ['l'],
    keywords: 'copy link share url',
    section: 'Actions',
    perform: () => {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied!');
    },
    icon: <LinkIcon />,
  },
  {
    id: 'settings',
    name: 'Settings',
    shortcut: [','],
    keywords: 'settings preferences config',
    section: 'Preferences',
    perform: () => alert('Opening Settings'),
    icon: <SettingsIcon />,
  },
];

// Result item renderer
function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="kbar-group-name">{item}</div>
        ) : (
          <ResultItem action={item} active={active} currentRootActionId={rootActionId ?? undefined} />
        )
      }
    />
  );
}

interface ResultItemProps {
  action: ActionImpl;
  active: boolean;
  currentRootActionId?: string;
}

const ResultItem = React.forwardRef<HTMLDivElement, ResultItemProps>(
  ({ action, active, currentRootActionId }, ref) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={`kbar-result-item ${active ? 'kbar-result-item--active' : ''}`}
      >
        <div className="kbar-result-item__content">
          {action.icon && (
            <span className="kbar-result-item__icon">{action.icon}</span>
          )}
          <div className="kbar-result-item__text">
            {ancestors.length > 0 && (
              <span className="kbar-result-item__ancestors">
                {ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span>{ancestor.name}</span>
                    <span className="kbar-result-item__chevron">›</span>
                  </React.Fragment>
                ))}
              </span>
            )}
            <span className="kbar-result-item__name">{action.name}</span>
          </div>
        </div>
        {action.shortcut?.length && (
          <div className="kbar-result-item__shortcut">
            {action.shortcut.map((sc, i) => (
              <kbd key={i} className="kbar-kbd">{sc}</kbd>
            ))}
          </div>
        )}
      </div>
    );
  }
);

ResultItem.displayName = 'ResultItem';

// Toggle button component
function KbarToggle() {
  const { query } = useKBar();

  return (
    <button onClick={() => query.toggle()} className="kbar-toggle">
      Open Command Bar
      <kbd className="kbar-toggle__kbd">⌘K</kbd>
    </button>
  );
}

// Main component
export interface KbarPaletteProps {
  /** Custom actions to use instead of default */
  customActions?: Action[];
}

/**
 * Command palette built with kbar - a fast, portable, and extensible
 * cmd+k interface for your site.
 *
 * kbar provides a plug-n-play experience with built-in animations,
 * keyboard shortcuts, and nested actions.
 *
 * @see https://kbar.vercel.app
 */
export const KbarPalette: React.FC<KbarPaletteProps> = ({
  customActions,
}) => {
  return (
    <KBarProvider actions={customActions || actions}>
      <KBarPortal>
        <KBarPositioner className="kbar-positioner">
          <KBarAnimator className="kbar-animator">
            <KBarSearch className="kbar-search" placeholder="Type a command or search..." />
            <RenderResults />
            <div className="kbar-footer">
              <span><kbd className="kbar-kbd">↑↓</kbd> navigate</span>
              <span><kbd className="kbar-kbd">↵</kbd> select</span>
              <span><kbd className="kbar-kbd">esc</kbd> close</span>
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <KbarToggle />
    </KBarProvider>
  );
};

// Icons
function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 8L8 2L14 8" />
      <path d="M3 7.5V14H6V10H10V14H13V7.5" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 2H10L13 5V14H4V2Z" />
      <path d="M10 2V5H13" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="12" height="12" rx="1" />
      <path d="M5 5H11M5 8H11M5 11H9" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="5" />
      <path d="M11 11L14 14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 3V13M3 8H13" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 5V13H14V5H2Z" />
      <path d="M2 5V4C2 3.5 2.5 3 3 3H6L7 5" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="5" height="5" rx="1" />
      <rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9" y="9" width="5" height="5" rx="1" />
    </svg>
  );
}

function ThemeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="6" />
      <path d="M8 2V8L12 12" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 2V3M8 13V14M2 8H3M13 8H14M4 4L4.7 4.7M11.3 11.3L12 12M12 4L11.3 4.7M4.7 11.3L4 12" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 10C11 12 8 12 6 10C4 8 4 5 6 3C3 4 2 8 4 11C6 14 10 14 13 10Z" />
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="12" height="8" rx="1" />
      <path d="M6 14H10M8 11V14" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 10L10 6" />
      <path d="M9 4H12V7" />
      <path d="M7 12H4V9" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="2" />
      <path d="M8 2V4M8 12V14M2 8H4M12 8H14M3.5 3.5L5 5M11 11L12.5 12.5M12.5 3.5L11 5M5 11L3.5 12.5" />
    </svg>
  );
}

export default KbarPalette;
