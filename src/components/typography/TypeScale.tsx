import React from 'react';
import './TypeScale.css';

export interface TypeScaleProps {
  /**
   * Font family to demonstrate
   */
  fontFamily?: string;
  /**
   * Whether to show Ukrainian text samples
   */
  showUkrainian?: boolean;
  /**
   * Whether to show text style variations (bold, italic, etc.)
   */
  showTextStyles?: boolean;
  /**
   * Whether to show font variant features (letter-spacing, etc.)
   */
  showVariants?: boolean;
  /**
   * Whether to show code block example
   */
  showCodeBlock?: boolean;
}

/**
 * Typography Scale Demonstration
 * Shows a typographic scale from h1 to body text with optional features
 */
export const TypeScale: React.FC<TypeScaleProps> = ({
  fontFamily = 'system-ui, -apple-system, sans-serif',
  showUkrainian = false,
  showTextStyles = false,
  showVariants = false,
  showCodeBlock = false,
}) => {
  return (
    <div className="type-scale" style={{ fontFamily }}>
      {/* Headings */}
      <section className="type-scale__section">
        <h1 className="type-scale__h1">Heading 1 — The Art of Typography</h1>
        <h2 className="type-scale__h2">Heading 2 — Design Principles</h2>
        <h3 className="type-scale__h3">Heading 3 — Visual Hierarchy</h3>
        <h4 className="type-scale__h4">Heading 4 — Font Characteristics</h4>
        <h5 className="type-scale__h5">Heading 5 — Spacing & Rhythm</h5>
        <h6 className="type-scale__h6">Heading 6 — Details Matter</h6>
      </section>

      {/* Body Text - Multiple Paragraphs */}
      <section className="type-scale__section">
        <h3 className="type-scale__section-title">Body Text</h3>
        <p className="type-scale__body">
          Typography is the art and technique of arranging type to make written language
          legible, readable, and appealing when displayed. The arrangement of type involves
          selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing,
          as well as adjusting the space between pairs of letters.
        </p>
        <p className="type-scale__body">
          The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor
          jugs. How vexingly quick daft zebras jump! The five boxing wizards jump quickly.
          Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz.
        </p>
        <p className="type-scale__body">
          Good typography establishes a visual hierarchy, provides an inviting graphic
          balance to the page, and sets the product's overall tone. Typography should
          guide your readers, help them navigate through the content, and ensure they
          can easily find what they're looking for.
        </p>
        <p className="type-scale__small">
          Small text: Often used for captions, footnotes, and secondary information.
          The five boxing wizards jump quickly at dawn.
        </p>
      </section>

      {/* Ukrainian Text */}
      {showUkrainian && (
        <section className="type-scale__section">
          <h3 className="type-scale__section-title">Українська (Ukrainian)</h3>
          <p className="type-scale__body">
            Типографіка — це мистецтво та техніка оформлення друкованого тексту.
            Вона включає вибір шрифтів, розмірів, міжрядкових інтервалів та інших
            елементів, що впливають на зовнішній вигляд і читабельність тексту.
          </p>
          <p className="type-scale__body">
            Їжак, чому ти втік? Щоб файний ґедзь поціляв у вухо. Жебракує філософія
            у пенсіонерів, хоч їм цей шик байдужий. Чуєш їх, доцю, — ґава й абрикос
            щей починайте реформу кожен!
          </p>
          <p className="type-scale__body">
            Гарна типографіка створює візуальну ієрархію, забезпечує привабливий
            графічний баланс сторінки та задає загальний тон продукту. Український
            алфавіт містить 33 літери: А Б В Г Ґ Д Е Є Ж З И І Ї Й К Л М Н О П Р С Т
            У Ф Х Ц Ч Ш Щ Ь Ю Я.
          </p>
          <p className="type-scale__small">
            Дрібний текст: Часто використовується для підписів, виносок та
            другорядної інформації.
          </p>
        </section>
      )}

      {/* Text Styles */}
      {showTextStyles && (
        <section className="type-scale__section">
          <h3 className="type-scale__section-title">Text Styles</h3>
          <p className="type-scale__body">
            <strong>Bold text:</strong> The quick brown fox jumps over the lazy dog.
          </p>
          <p className="type-scale__body">
            <em>Italic text:</em> The quick brown fox jumps over the lazy dog.
          </p>
          <p className="type-scale__body">
            <strong><em>Bold italic:</em></strong> The quick brown fox jumps over the lazy dog.
          </p>
          <p className="type-scale__body">
            <u>Underlined text:</u> The quick brown fox jumps over the lazy dog.
          </p>
          <p className="type-scale__body">
            <s>Strikethrough text:</s> The quick brown fox jumps over the lazy dog.
          </p>
          <p className="type-scale__body">
            Subscript: H<sub>2</sub>O, CO<sub>2</sub>, log<sub>10</sub>(x)
          </p>
          <p className="type-scale__body">
            Superscript: E=mc<sup>2</sup>, x<sup>2</sup>+y<sup>2</sup>=z<sup>2</sup>, 10<sup>6</sup>
          </p>
          <p className="type-scale__body">
            Mixed: The formula for water is H<sub>2</sub>O, and Einstein's famous equation
            is E=mc<sup>2</sup>. <strong>Bold</strong>, <em>italic</em>, and <u>underlined</u>
            can be combined for <strong><em><u>emphasis</u></em></strong>.
          </p>
        </section>
      )}

      {/* Font Variants */}
      {showVariants && (
        <section className="type-scale__section">
          <h3 className="type-scale__section-title">Font Variants & Features</h3>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Normal</h4>
            <p className="type-scale__body">
              The quick brown fox jumps over the lazy dog. 0123456789
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Letter Spacing: Tight (-0.05em)</h4>
            <p className="type-scale__body" style={{ letterSpacing: '-0.05em' }}>
              The quick brown fox jumps over the lazy dog. 0123456789
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Letter Spacing: Wide (0.1em)</h4>
            <p className="type-scale__body" style={{ letterSpacing: '0.1em' }}>
              The quick brown fox jumps over the lazy dog. 0123456789
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Letter Spacing: Extra Wide (0.2em)</h4>
            <p className="type-scale__body" style={{ letterSpacing: '0.2em' }}>
              The quick brown fox jumps over the lazy dog. 0123456789
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Word Spacing: Wide (0.25em)</h4>
            <p className="type-scale__body" style={{ wordSpacing: '0.25em' }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Small Caps</h4>
            <p className="type-scale__body" style={{ fontVariant: 'small-caps' }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">All Small Caps</h4>
            <p className="type-scale__body" style={{ fontVariantCaps: 'all-small-caps' }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Uppercase</h4>
            <p className="type-scale__body" style={{ textTransform: 'uppercase' }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Lowercase</h4>
            <p className="type-scale__body" style={{ textTransform: 'lowercase' }}>
              THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Capitalize</h4>
            <p className="type-scale__body" style={{ textTransform: 'capitalize' }}>
              the quick brown fox jumps over the lazy dog.
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Tabular Numbers (font-variant-numeric)</h4>
            <p className="type-scale__body" style={{ fontVariantNumeric: 'tabular-nums' }}>
              1,234,567.89 | 9,876,543.21 | 0,000,000.00
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Oldstyle Numbers (font-variant-numeric)</h4>
            <p className="type-scale__body" style={{ fontVariantNumeric: 'oldstyle-nums' }}>
              0123456789 — The year 1984 was significant.
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Diagonal Fractions</h4>
            <p className="type-scale__body" style={{ fontVariantNumeric: 'diagonal-fractions' }}>
              1/2, 1/4, 3/4, 1/3, 2/3, 1/8, 5/8
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">Ligatures (common)</h4>
            <p className="type-scale__body" style={{ fontVariantLigatures: 'common-ligatures' }}>
              fi fl ff ffi ffl — office, waffle, difficult
            </p>
          </div>

          <div className="type-scale__variant">
            <h4 className="type-scale__variant-label">No Ligatures</h4>
            <p className="type-scale__body" style={{ fontVariantLigatures: 'no-common-ligatures' }}>
              fi fl ff ffi ffl — office, waffle, difficult
            </p>
          </div>
        </section>
      )}

      {/* Code Block */}
      {showCodeBlock && (
        <section className="type-scale__section">
          <h3 className="type-scale__section-title">Code Block</h3>
          <pre className="type-scale__code">
            <code>{`function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
const result = fibonacci(10);
console.log(\`Fibonacci(10) = \${result}\`);

// Characters: {} [] () <> | \\ / @ # $ % ^ & * ~ \`
// Numbers: 0123456789
// Similar chars: 0O Il1 S5 Z2 B8`}</code>
          </pre>
        </section>
      )}

      {/* Character Set */}
      <section className="type-scale__section">
        <h3 className="type-scale__section-title">Character Set</h3>
        <p className="type-scale__body type-scale__charset">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789<br />
          !@#$%^&*()_+-=[]{}|;':",./&lt;&gt;?`~
        </p>
      </section>
    </div>
  );
};
