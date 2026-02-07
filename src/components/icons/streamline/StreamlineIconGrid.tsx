import './StreamlineIconGrid.css';

export interface StreamlineIconGridProps {
  /** Display name for the subcategory, e.g. "Alerts" */
  subcategoryName: string;
  /** Path segment for icon URLs, e.g. "interface-essential/alerts" */
  categoryPath: string;
  /** PNG filenames for Light style (may be empty if no Light variant exists) */
  lightIcons: string[];
  /** PNG filenames for Regular style */
  regularIcons: string[];
}

function humanizeName(filename: string): string {
  return filename
    .replace(/\.png$/, '')
    .replace(/-/g, ' ');
}

function IconSection({
  title,
  style,
  categoryPath,
  icons,
}: {
  title: string;
  style: 'light' | 'regular';
  categoryPath: string;
  icons: string[];
}) {
  if (icons.length === 0) return null;

  return (
    <div className="streamline-icon-grid__section">
      <h3 className="streamline-icon-grid__section-title">
        {title} ({icons.length})
      </h3>
      <div className="streamline-icon-grid__grid">
        {icons.map((filename) => (
          <div key={filename} className="streamline-icon-grid__item">
            <img
              className="streamline-icon-grid__icon"
              src={`/icons/streamline/${style}/${categoryPath}/${filename}`}
              alt={humanizeName(filename)}
              loading="lazy"
            />
            <span className="streamline-icon-grid__name">
              {humanizeName(filename)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StreamlineIconGrid({
  subcategoryName,
  categoryPath,
  lightIcons,
  regularIcons,
}: StreamlineIconGridProps) {
  const totalCount = lightIcons.length + regularIcons.length;

  return (
    <div className="streamline-icon-grid">
      <h2 className="streamline-icon-grid__title">{subcategoryName}</h2>
      <p className="streamline-icon-grid__subtitle">
        {totalCount} icon{totalCount !== 1 ? 's' : ''}
        {lightIcons.length > 0 && regularIcons.length > 0
          ? ' across Light and Regular styles'
          : regularIcons.length > 0
            ? ' — Regular style'
            : ' — Light style'}
      </p>

      <div className="streamline-icon-grid__sections">
        <IconSection
          title="Regular"
          style="regular"
          categoryPath={categoryPath}
          icons={regularIcons}
        />
        <IconSection
          title="Light"
          style="light"
          categoryPath={categoryPath}
          icons={lightIcons}
        />
      </div>

      <div className="streamline-icon-grid__attribution">
        Icons by{' '}
        <a href="https://streamlinehq.com" target="_blank" rel="noopener noreferrer">
          Streamline
        </a>{' '}
        — free under{' '}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC Attribution 4.0
        </a>{' '}
        (linkware).
      </div>
    </div>
  );
}
