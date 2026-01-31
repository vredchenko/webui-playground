import React from 'react';
import './UkrainianFonts.css';

export interface UkrainianFontsProps {
  /**
   * Font family CSS value
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
   * Font designer name
   */
  designer?: string;
  /**
   * License type
   */
  license?: string;
  /**
   * Download/info URL
   */
  url?: string;
  /**
   * Font category
   */
  category?: 'serif' | 'sans-serif' | 'display' | 'decorative' | 'script';
  /**
   * Available font weights
   */
  availableWeights?: number[];
  /**
   * Whether italic variant is available
   */
  hasItalic?: boolean;
}

/**
 * Ukrainian Fonts Collection
 * Showcases fonts by Ukrainian designers or with Ukrainian/Cyrillic support
 */
export const UkrainianFonts: React.FC<UkrainianFontsProps> = ({
  fontFamily = 'Arsenal, sans-serif',
  fontName = 'Arsenal',
  fontDescription = 'A Ukrainian font',
  designer = 'Unknown',
  license = 'Free',
  url,
  category = 'sans-serif',
  availableWeights = [400],
  hasItalic = false,
}) => {
  const ukrainianPangram = 'Їжак, чому ти втік? Щоб файний ґедзь поціляв у вухо.';
  const ukrainianParagraph = 'Україна — держава у Східній та частково Центральній Європі. Площа становить 603 628 км², населення — близько 37 мільйонів осіб. За цими показниками Україна є однією з найбільших країн Європи.';

  const uppercaseUkrainian = 'А Б В Г Ґ Д Е Є Ж З И І Ї Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ь Ю Я';
  const lowercaseUkrainian = 'а б в г ґ д е є ж з и і ї й к л м н о п р с т у ф х ц ч ш щ ь ю я';

  const uniqueChars = [
    { char: 'Ґ ґ', name: 'Ge with upturn', description: 'Unique to Ukrainian' },
    { char: 'Є є', name: 'Ukrainian Ye', description: 'Ukrainian E (Ye sound)' },
    { char: 'І і', name: 'Ukrainian I', description: 'Dotted I' },
    { char: 'Ї ї', name: 'Yi', description: 'Ukrainian Yi (sounds like "yee")' },
  ];

  return (
    <div className="ukrainian-fonts">
      <header className="ukrainian-fonts__header">
        <h1 className="ukrainian-fonts__title" style={{ fontFamily }}>{fontName}</h1>
        <p className="ukrainian-fonts__description">{fontDescription}</p>
        <div className="ukrainian-fonts__meta">
          <span className="ukrainian-fonts__designer">by {designer}</span>
          <span className="ukrainian-fonts__badge ukrainian-fonts__badge--license">{license}</span>
          <span className="ukrainian-fonts__badge ukrainian-fonts__badge--category">{category}</span>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="ukrainian-fonts__link">
              Download →
            </a>
          )}
        </div>
      </header>

      {/* Ukrainian Text Sample */}
      <section className="ukrainian-fonts__section">
        <h2 className="ukrainian-fonts__section-title">Український текст</h2>
        <div className="ukrainian-fonts__sample" style={{ fontFamily }}>
          <p className="ukrainian-fonts__text ukrainian-fonts__text--large">
            {ukrainianPangram}
          </p>
          <p className="ukrainian-fonts__text">
            {ukrainianParagraph}
          </p>
        </div>
      </section>

      {/* English Text Sample */}
      <section className="ukrainian-fonts__section">
        <h2 className="ukrainian-fonts__section-title">English Text</h2>
        <div className="ukrainian-fonts__sample" style={{ fontFamily }}>
          <p className="ukrainian-fonts__text ukrainian-fonts__text--large">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="ukrainian-fonts__text">
            Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.
          </p>
        </div>
      </section>

      {/* Ukrainian Character Set */}
      <section className="ukrainian-fonts__section">
        <h2 className="ukrainian-fonts__section-title">Ukrainian Alphabet</h2>
        <div className="ukrainian-fonts__charset" style={{ fontFamily }}>
          <div className="ukrainian-fonts__charset-row">
            <span className="ukrainian-fonts__charset-label">Uppercase:</span>
            <span className="ukrainian-fonts__charset-chars">{uppercaseUkrainian}</span>
          </div>
          <div className="ukrainian-fonts__charset-row">
            <span className="ukrainian-fonts__charset-label">Lowercase:</span>
            <span className="ukrainian-fonts__charset-chars">{lowercaseUkrainian}</span>
          </div>
          <div className="ukrainian-fonts__charset-row">
            <span className="ukrainian-fonts__charset-label">Numbers:</span>
            <span className="ukrainian-fonts__charset-chars">0 1 2 3 4 5 6 7 8 9</span>
          </div>
        </div>
      </section>

      {/* Unique Ukrainian Characters */}
      <section className="ukrainian-fonts__section">
        <h2 className="ukrainian-fonts__section-title">Unique Ukrainian Characters</h2>
        <p className="ukrainian-fonts__info">
          These characters distinguish Ukrainian from Russian and other Cyrillic scripts:
        </p>
        <div className="ukrainian-fonts__unique-chars">
          {uniqueChars.map((item, index) => (
            <div key={index} className="ukrainian-fonts__unique-char">
              <span className="ukrainian-fonts__unique-char-display" style={{ fontFamily }}>
                {item.char}
              </span>
              <div className="ukrainian-fonts__unique-char-info">
                <span className="ukrainian-fonts__unique-char-name">{item.name}</span>
                <span className="ukrainian-fonts__unique-char-desc">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      {availableWeights.length > 1 && (
        <section className="ukrainian-fonts__section">
          <h2 className="ukrainian-fonts__section-title">Available Weights</h2>
          <div className="ukrainian-fonts__weights">
            {availableWeights.map((weight) => (
              <div key={weight} className="ukrainian-fonts__weight">
                <span className="ukrainian-fonts__weight-label">{weight}</span>
                <span
                  className="ukrainian-fonts__weight-sample"
                  style={{ fontFamily, fontWeight: weight }}
                >
                  Україна — Ukraine
                </span>
              </div>
            ))}
            {hasItalic && (
              <div className="ukrainian-fonts__weight">
                <span className="ukrainian-fonts__weight-label">Italic</span>
                <span
                  className="ukrainian-fonts__weight-sample"
                  style={{ fontFamily, fontStyle: 'italic' }}
                >
                  Україна — Ukraine
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Comparison */}
      <section className="ukrainian-fonts__section">
        <h2 className="ukrainian-fonts__section-title">Comparison</h2>
        <div className="ukrainian-fonts__comparison">
          <div className="ukrainian-fonts__comparison-item">
            <h3 className="ukrainian-fonts__comparison-title">System Font (Arial)</h3>
            <p className="ukrainian-fonts__comparison-text" style={{ fontFamily: 'Arial, sans-serif' }}>
              Україна — незалежна держава. Ґанок, єнот, їжак, індик.
            </p>
          </div>
          <div className="ukrainian-fonts__comparison-item ukrainian-fonts__comparison-item--highlight">
            <h3 className="ukrainian-fonts__comparison-title">{fontName}</h3>
            <p className="ukrainian-fonts__comparison-text" style={{ fontFamily }}>
              Україна — незалежна держава. Ґанок, єнот, їжак, індик.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
