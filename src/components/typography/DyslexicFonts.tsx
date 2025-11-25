import React from 'react';
import './DyslexicFonts.css';

export interface DyslexicFontsProps {
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
   * Whether the font is free/open source
   */
  isOpenSource?: boolean;
  /**
   * Download/info URL
   */
  url?: string;
}

/**
 * Dyslexic-Friendly Fonts Showcase
 * Demonstrates fonts designed to improve readability for people with dyslexia
 */
export const DyslexicFonts: React.FC<DyslexicFontsProps> = ({
  fontFamily = 'OpenDyslexic, sans-serif',
  fontName = 'OpenDyslexic',
  fontDescription = 'A typeface designed against some common symptoms of dyslexia',
  isOpenSource = true,
  url = 'https://opendyslexic.org',
}) => {
  // Characters that are commonly confused by people with dyslexia
  const confusableChars = [
    { chars: 'b d', description: 'b and d (mirror confusion)' },
    { chars: 'p q', description: 'p and q (mirror confusion)' },
    { chars: 'n u', description: 'n and u (rotation confusion)' },
    { chars: 'm w', description: 'm and w (rotation confusion)' },
    { chars: 'i l 1', description: 'i, l, and 1 (similar shapes)' },
    { chars: 'O 0', description: 'O and 0 (letter vs number)' },
    { chars: 'S 5', description: 'S and 5 (similar shapes)' },
    { chars: 'Z 2', description: 'Z and 2 (similar shapes)' },
    { chars: 'rn m', description: 'rn vs m (combined letters)' },
    { chars: 'cl d', description: 'cl vs d (combined letters)' },
  ];

  return (
    <div className="dyslexic-fonts">
      <header className="dyslexic-fonts__header">
        <h1 className="dyslexic-fonts__title" style={{ fontFamily }}>{fontName}</h1>
        <p className="dyslexic-fonts__description">{fontDescription}</p>
        <div className="dyslexic-fonts__meta">
          {isOpenSource && <span className="dyslexic-fonts__badge">Open Source</span>}
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="dyslexic-fonts__link">
              Learn more →
            </a>
          )}
        </div>
      </header>

      {/* Sample Text */}
      <section className="dyslexic-fonts__section">
        <h2 className="dyslexic-fonts__section-title">Sample Text</h2>
        <div className="dyslexic-fonts__sample" style={{ fontFamily }}>
          <p className="dyslexic-fonts__text dyslexic-fonts__text--large">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="dyslexic-fonts__text">
            Reading is a complex cognitive process of decoding symbols to derive meaning.
            It is a means of language acquisition, communication, and sharing information and ideas.
          </p>
          <p className="dyslexic-fonts__text">
            Good typography improves readability and reduces visual stress. Font choice matters
            for comfortable reading, especially for people with dyslexia. The weighted bottoms
            and unique letter shapes in dyslexic-friendly fonts help anchor the text and prevent
            letters from appearing to flip or rotate.
          </p>
          <p className="dyslexic-fonts__text dyslexic-fonts__text--small">
            Small text sample: Pack my box with five dozen liquor jugs.
            How vexingly quick daft zebras jump!
          </p>
        </div>
      </section>

      {/* Confusable Characters */}
      <section className="dyslexic-fonts__section">
        <h2 className="dyslexic-fonts__section-title">Commonly Confused Characters</h2>
        <p className="dyslexic-fonts__info">
          Dyslexic-friendly fonts are designed to make these character pairs more distinguishable:
        </p>
        <div className="dyslexic-fonts__confusables">
          {confusableChars.map((item, index) => (
            <div key={index} className="dyslexic-fonts__confusable">
              <span className="dyslexic-fonts__confusable-chars" style={{ fontFamily }}>
                {item.chars}
              </span>
              <span className="dyslexic-fonts__confusable-desc">{item.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Alphabet & Numbers */}
      <section className="dyslexic-fonts__section">
        <h2 className="dyslexic-fonts__section-title">Full Character Set</h2>
        <div className="dyslexic-fonts__charset" style={{ fontFamily }}>
          <div className="dyslexic-fonts__charset-row">
            <span className="dyslexic-fonts__charset-label">Uppercase:</span>
            <span className="dyslexic-fonts__charset-chars">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
          </div>
          <div className="dyslexic-fonts__charset-row">
            <span className="dyslexic-fonts__charset-label">Lowercase:</span>
            <span className="dyslexic-fonts__charset-chars">abcdefghijklmnopqrstuvwxyz</span>
          </div>
          <div className="dyslexic-fonts__charset-row">
            <span className="dyslexic-fonts__charset-label">Numbers:</span>
            <span className="dyslexic-fonts__charset-chars">0123456789</span>
          </div>
          <div className="dyslexic-fonts__charset-row">
            <span className="dyslexic-fonts__charset-label">Symbols:</span>
            <span className="dyslexic-fonts__charset-chars">!@#$%^&*()_+-=[]{}|;':",./&lt;&gt;?</span>
          </div>
        </div>
      </section>

      {/* Reading Test */}
      <section className="dyslexic-fonts__section">
        <h2 className="dyslexic-fonts__section-title">Reading Comparison</h2>
        <div className="dyslexic-fonts__comparison">
          <div className="dyslexic-fonts__comparison-item">
            <h3 className="dyslexic-fonts__comparison-title">Regular Sans-Serif</h3>
            <p className="dyslexic-fonts__comparison-text" style={{ fontFamily: 'Arial, sans-serif' }}>
              The boundary between order and disorder lies in logistics.
              Every problem has a gift for you in its hands.
              Believe you can and you're halfway there.
            </p>
          </div>
          <div className="dyslexic-fonts__comparison-item dyslexic-fonts__comparison-item--highlight">
            <h3 className="dyslexic-fonts__comparison-title">{fontName}</h3>
            <p className="dyslexic-fonts__comparison-text" style={{ fontFamily }}>
              The boundary between order and disorder lies in logistics.
              Every problem has a gift for you in its hands.
              Believe you can and you're halfway there.
            </p>
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="dyslexic-fonts__section">
        <h2 className="dyslexic-fonts__section-title">Design Features</h2>
        <ul className="dyslexic-fonts__features">
          <li><strong>Weighted bottoms:</strong> Letters have heavier bases to "anchor" them and prevent visual rotation</li>
          <li><strong>Unique letter shapes:</strong> Similar letters (b, d, p, q) have distinct forms to prevent mirror confusion</li>
          <li><strong>Wider letter spacing:</strong> More space between letters reduces crowding</li>
          <li><strong>Larger openings:</strong> Open areas in letters (like 'a', 'e', 'c') are more pronounced</li>
          <li><strong>Varying heights:</strong> Subtle height differences help distinguish similar characters</li>
          <li><strong>Emphasized ascenders/descenders:</strong> Parts that extend above/below the baseline are more prominent</li>
        </ul>
      </section>
    </div>
  );
};
