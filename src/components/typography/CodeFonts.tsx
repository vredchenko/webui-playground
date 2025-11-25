import React from 'react';
import './CodeFonts.css';

export interface CodeFontsProps {
  /**
   * Font family to demonstrate
   */
  fontFamily?: string;
  /**
   * Display name of the font
   */
  fontName?: string;
  /**
   * Description of the font
   */
  fontDescription?: string;
  /**
   * Whether the font supports ligatures
   */
  hasLigatures?: boolean;
  /**
   * Download/info URL
   */
  url?: string;
  /**
   * Font creator/foundry
   */
  creator?: string;
}

// Common programming ligatures to demonstrate
const ligatureExamples = [
  { code: '==', description: 'equality' },
  { code: '===', description: 'strict equality' },
  { code: '!=', description: 'not equal' },
  { code: '!==', description: 'strict not equal' },
  { code: '<=', description: 'less or equal' },
  { code: '>=', description: 'greater or equal' },
  { code: '=>', description: 'arrow function' },
  { code: '->', description: 'arrow' },
  { code: '<-', description: 'left arrow' },
  { code: '::', description: 'namespace' },
  { code: '...', description: 'spread' },
  { code: '&&', description: 'logical and' },
  { code: '||', description: 'logical or' },
  { code: '??', description: 'nullish coalescing' },
  { code: '|>', description: 'pipe' },
  { code: '<|', description: 'reverse pipe' },
  { code: '++', description: 'increment' },
  { code: '--', description: 'decrement' },
  { code: '/*', description: 'comment start' },
  { code: '*/', description: 'comment end' },
  { code: '//', description: 'line comment' },
  { code: '/**', description: 'doc comment' },
  { code: '<=>', description: 'spaceship' },
  { code: '~~', description: 'double tilde' },
];

// Characters that should be distinguishable in code
const distinguishableChars = [
  { chars: '0 O o', description: 'Zero vs letter O' },
  { chars: '1 l I i', description: 'One vs lowercase L vs uppercase I' },
  { chars: '" \'', description: 'Double vs single quotes' },
  { chars: '` \'', description: 'Backtick vs single quote' },
  { chars: ': ;', description: 'Colon vs semicolon' },
  { chars: '. ,', description: 'Period vs comma' },
  { chars: '{ } ( ) [ ]', description: 'Brackets' },
  { chars: '| \\ /', description: 'Pipes and slashes' },
];

/**
 * Code Fonts Showcase
 * Demonstrates monospace fonts designed for programming
 */
export const CodeFonts: React.FC<CodeFontsProps> = ({
  fontFamily = '"JetBrains Mono", monospace',
  fontName = 'JetBrains Mono',
  fontDescription = 'A typeface made for developers, with increased height for better readability',
  hasLigatures = true,
  url = 'https://www.jetbrains.com/lp/mono/',
  creator = 'JetBrains',
}) => {
  return (
    <div className="code-fonts">
      <header className="code-fonts__header">
        <h1 className="code-fonts__title" style={{ fontFamily }}>{fontName}</h1>
        <p className="code-fonts__description">{fontDescription}</p>
        <div className="code-fonts__meta">
          <span className="code-fonts__creator">By {creator}</span>
          {hasLigatures && <span className="code-fonts__badge">Ligatures</span>}
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="code-fonts__link">
              Download →
            </a>
          )}
        </div>
      </header>

      {/* Code Sample */}
      <section className="code-fonts__section">
        <h2 className="code-fonts__section-title">Code Sample</h2>
        <pre className="code-fonts__code" style={{ fontFamily }}>
          <code>{`// TypeScript example with various syntax elements
interface User {
  id: number;
  name: string;
  email?: string;
  roles: string[];
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  return response.json();
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.roles.includes('active'));
};

// Arrow functions and destructuring
const getUserInfo = ({ name, email }: User) => ({
  displayName: name,
  contact: email ?? 'No email provided',
});

// Operators: == != === !== <= >= => -> && || ??
// Comments: // /* */ /**
// Brackets: {} [] () <>`}</code>
        </pre>
      </section>

      {/* Ligatures */}
      {hasLigatures && (
        <section className="code-fonts__section">
          <h2 className="code-fonts__section-title">Programming Ligatures</h2>
          <p className="code-fonts__info">
            Ligatures combine multiple characters into single glyphs for improved readability:
          </p>
          <div className="code-fonts__ligatures">
            <div className="code-fonts__ligatures-row code-fonts__ligatures-row--enabled">
              <h3 className="code-fonts__ligatures-label">With Ligatures</h3>
              <div className="code-fonts__ligatures-grid" style={{ fontFamily, fontVariantLigatures: 'common-ligatures' }}>
                {ligatureExamples.map((lig, index) => (
                  <div key={index} className="code-fonts__ligature">
                    <span className="code-fonts__ligature-code">{lig.code}</span>
                    <span className="code-fonts__ligature-desc">{lig.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="code-fonts__ligatures-row">
              <h3 className="code-fonts__ligatures-label">Without Ligatures</h3>
              <div className="code-fonts__ligatures-grid" style={{ fontFamily, fontVariantLigatures: 'none' }}>
                {ligatureExamples.map((lig, index) => (
                  <div key={index} className="code-fonts__ligature">
                    <span className="code-fonts__ligature-code">{lig.code}</span>
                    <span className="code-fonts__ligature-desc">{lig.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Distinguishable Characters */}
      <section className="code-fonts__section">
        <h2 className="code-fonts__section-title">Character Distinction</h2>
        <p className="code-fonts__info">
          Good code fonts make similar characters easily distinguishable:
        </p>
        <div className="code-fonts__distinctions">
          {distinguishableChars.map((item, index) => (
            <div key={index} className="code-fonts__distinction">
              <span className="code-fonts__distinction-chars" style={{ fontFamily }}>
                {item.chars}
              </span>
              <span className="code-fonts__distinction-desc">{item.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Character Set */}
      <section className="code-fonts__section">
        <h2 className="code-fonts__section-title">Full Character Set</h2>
        <div className="code-fonts__charset" style={{ fontFamily }}>
          <div className="code-fonts__charset-row">
            <span className="code-fonts__charset-label">Uppercase:</span>
            <span className="code-fonts__charset-chars">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
          </div>
          <div className="code-fonts__charset-row">
            <span className="code-fonts__charset-label">Lowercase:</span>
            <span className="code-fonts__charset-chars">abcdefghijklmnopqrstuvwxyz</span>
          </div>
          <div className="code-fonts__charset-row">
            <span className="code-fonts__charset-label">Numbers:</span>
            <span className="code-fonts__charset-chars">0123456789</span>
          </div>
          <div className="code-fonts__charset-row">
            <span className="code-fonts__charset-label">Operators:</span>
            <span className="code-fonts__charset-chars">+ - * / = &lt; &gt; ! ? : ; | & ^ % ~</span>
          </div>
          <div className="code-fonts__charset-row">
            <span className="code-fonts__charset-label">Brackets:</span>
            <span className="code-fonts__charset-chars">( ) [ ] {'{ }'} &lt; &gt;</span>
          </div>
          <div className="code-fonts__charset-row">
            <span className="code-fonts__charset-label">Punctuation:</span>
            <span className="code-fonts__charset-chars">. , ; : ! ? ' " ` @ # $ _ \</span>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className="code-fonts__section">
        <h2 className="code-fonts__section-title">Font Weights</h2>
        <div className="code-fonts__weights">
          {[100, 200, 300, 400, 500, 600, 700, 800].map((weight) => (
            <div key={weight} className="code-fonts__weight">
              <span className="code-fonts__weight-label">{weight}</span>
              <span className="code-fonts__weight-sample" style={{ fontFamily, fontWeight: weight }}>
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Italic Styles */}
      <section className="code-fonts__section">
        <h2 className="code-fonts__section-title">Regular vs Italic</h2>
        <div className="code-fonts__styles" style={{ fontFamily }}>
          <div className="code-fonts__style">
            <span className="code-fonts__style-label">Regular</span>
            <pre className="code-fonts__style-code">{`const message = "Hello, World!";
function greet(name) {
  return \`Hello, \${name}!\`;
}`}</pre>
          </div>
          <div className="code-fonts__style">
            <span className="code-fonts__style-label">Italic</span>
            <pre className="code-fonts__style-code" style={{ fontStyle: 'italic' }}>{`const message = "Hello, World!";
function greet(name) {
  return \`Hello, \${name}!\`;
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  );
};
