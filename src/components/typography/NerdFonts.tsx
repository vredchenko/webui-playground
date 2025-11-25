import React from 'react';
import './NerdFonts.css';

export interface NerdFontsProps {
  /**
   * NerdFont family to demonstrate
   */
  fontFamily?: string;
  /**
   * Display name of the font
   */
  fontName?: string;
}

// NerdFonts glyph ranges - these are the major icon sets included
const glyphSets = [
  {
    name: 'Powerline',
    description: 'Terminal separators and status line symbols',
    ranges: [
      { start: 0xe0a0, end: 0xe0a3, label: 'Powerline' },
      { start: 0xe0b0, end: 0xe0b3, label: 'Powerline Arrows' },
    ],
  },
  {
    name: 'Powerline Extra',
    description: 'Additional separator styles',
    ranges: [
      { start: 0xe0b4, end: 0xe0c8, label: 'Extra Separators' },
      { start: 0xe0ca, end: 0xe0ca, label: 'Flame' },
      { start: 0xe0cc, end: 0xe0d4, label: 'More Separators' },
    ],
  },
  {
    name: 'Devicons',
    description: 'Developer and programming language icons',
    ranges: [
      { start: 0xe700, end: 0xe7c5, label: 'Languages & Tools' },
    ],
  },
  {
    name: 'Font Awesome',
    description: 'Popular web icons',
    ranges: [
      { start: 0xf000, end: 0xf2e0, label: 'Font Awesome Icons' },
    ],
  },
  {
    name: 'Octicons',
    description: 'GitHub icons',
    ranges: [
      { start: 0xf400, end: 0xf532, label: 'GitHub Icons' },
    ],
  },
  {
    name: 'Material Design',
    description: 'Google Material Design icons',
    ranges: [
      { start: 0xf0001, end: 0xf0100, label: 'Material Icons (sample)' },
    ],
  },
  {
    name: 'Weather Icons',
    description: 'Weather and meteorological symbols',
    ranges: [
      { start: 0xe300, end: 0xe3e3, label: 'Weather' },
    ],
  },
  {
    name: 'Font Logos',
    description: 'Linux distributions and open source logos',
    ranges: [
      { start: 0xf300, end: 0xf375, label: 'Logos' },
    ],
  },
];

// Generate characters from a Unicode range (limited for performance)
const generateChars = (start: number, end: number, maxChars = 50): string[] => {
  const chars: string[] = [];
  const actualEnd = Math.min(end, start + maxChars - 1);
  for (let i = start; i <= actualEnd; i++) {
    chars.push(String.fromCodePoint(i));
  }
  return chars;
};

// Common useful NerdFont icons with their names
const popularIcons = [
  { char: '\ue62b', name: 'Git Branch' },
  { char: '\ue702', name: 'Apple' },
  { char: '\ue70c', name: 'Linux' },
  { char: '\ue70f', name: 'Windows' },
  { char: '\ue73c', name: 'React' },
  { char: '\ue718', name: 'JavaScript' },
  { char: '\ue628', name: 'TypeScript' },
  { char: '\ue73d', name: 'Node.js' },
  { char: '\ue7a8', name: 'Python' },
  { char: '\ue7a1', name: 'Rust' },
  { char: '\ue626', name: 'Go' },
  { char: '\ue738', name: 'Docker' },
  { char: '\ue7ba', name: 'Vim' },
  { char: '\ueb99', name: 'VS Code' },
  { char: '\ue711', name: 'Terminal' },
  { char: '\uf07c', name: 'Folder Open' },
  { char: '\uf07b', name: 'Folder' },
  { char: '\uf15b', name: 'File' },
  { char: '\uf015', name: 'Home' },
  { char: '\uf013', name: 'Settings' },
  { char: '\uf002', name: 'Search' },
  { char: '\uf00c', name: 'Check' },
  { char: '\uf00d', name: 'Close' },
  { char: '\uf071', name: 'Warning' },
  { char: '\uf05a', name: 'Info' },
  { char: '\ue0b0', name: 'Arrow Right' },
  { char: '\ue0b2', name: 'Arrow Left' },
  { char: '\ue0a0', name: 'Branch' },
  { char: '\ue0a2', name: 'Lock' },
  { char: '\uf7d9', name: 'Moon' },
  { char: '\uf185', name: 'Sun' },
];

/**
 * NerdFonts Showcase Component
 * Displays NerdFont glyphs and icon sets
 */
export const NerdFonts: React.FC<NerdFontsProps> = ({
  fontFamily = '"JetBrainsMono Nerd Font", "FiraCode Nerd Font", monospace',
  fontName = 'NerdFont',
}) => {
  return (
    <div className="nerd-fonts" style={{ fontFamily }}>
      <header className="nerd-fonts__header">
        <h1 className="nerd-fonts__title">NerdFonts: {fontName}</h1>
        <p className="nerd-fonts__description">
          Nerd Fonts patches developer targeted fonts with a high number of glyphs (icons).
          It includes 3,600+ icons from popular icon sets like Font Awesome, Devicons,
          Octicons, and more.
        </p>
      </header>

      {/* Popular Icons Section */}
      <section className="nerd-fonts__section">
        <h2 className="nerd-fonts__section-title">Popular Icons</h2>
        <div className="nerd-fonts__icon-grid">
          {popularIcons.map((icon, index) => (
            <div key={index} className="nerd-fonts__icon-item">
              <span className="nerd-fonts__icon-char">{icon.char}</span>
              <span className="nerd-fonts__icon-name">{icon.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Glyph Sets */}
      {glyphSets.map((set) => (
        <section key={set.name} className="nerd-fonts__section">
          <h2 className="nerd-fonts__section-title">{set.name}</h2>
          <p className="nerd-fonts__set-description">{set.description}</p>
          {set.ranges.map((range) => (
            <div key={range.label} className="nerd-fonts__range">
              <h3 className="nerd-fonts__range-label">
                {range.label}
                <span className="nerd-fonts__range-code">
                  U+{range.start.toString(16).toUpperCase()} – U+{range.end.toString(16).toUpperCase()}
                </span>
              </h3>
              <div className="nerd-fonts__glyphs">
                {generateChars(range.start, range.end).map((char, index) => (
                  <span key={index} className="nerd-fonts__glyph" title={`U+${(range.start + index).toString(16).toUpperCase()}`}>
                    {char}
                  </span>
                ))}
                {range.end - range.start >= 50 && (
                  <span className="nerd-fonts__more">...</span>
                )}
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* Powerline Example */}
      <section className="nerd-fonts__section">
        <h2 className="nerd-fonts__section-title">Powerline Example</h2>
        <div className="nerd-fonts__powerline-demo">
          <span className="nerd-fonts__pl-segment nerd-fonts__pl-segment--blue">
             main
          </span>
          <span className="nerd-fonts__pl-arrow nerd-fonts__pl-arrow--blue-green"></span>
          <span className="nerd-fonts__pl-segment nerd-fonts__pl-segment--green">
             ~/projects
          </span>
          <span className="nerd-fonts__pl-arrow nerd-fonts__pl-arrow--green-purple"></span>
          <span className="nerd-fonts__pl-segment nerd-fonts__pl-segment--purple">
             node v18.0.0
          </span>
          <span className="nerd-fonts__pl-arrow nerd-fonts__pl-arrow--purple"></span>
        </div>
      </section>

      {/* Installation Note */}
      <section className="nerd-fonts__section nerd-fonts__section--note">
        <h2 className="nerd-fonts__section-title">Note</h2>
        <p className="nerd-fonts__note-text">
          NerdFonts must be installed on your system to see the icons correctly.
          Visit <a href="https://www.nerdfonts.com" target="_blank" rel="noopener noreferrer">nerdfonts.com</a> to
          download patched fonts like JetBrainsMono Nerd Font, FiraCode Nerd Font, Hack Nerd Font, and 50+ others.
        </p>
      </section>
    </div>
  );
};
