import React from 'react';
import './PatternBackground.css';

export interface PatternBackgroundProps {
  /**
   * CSS background property value (can be image URL, gradient, or pattern)
   */
  background: string;
  /**
   * Background size (defaults to 'auto' for tiled patterns)
   */
  backgroundSize?: string;
  /**
   * Optional label for the pattern
   */
  label?: string;
  /**
   * Optional source attribution
   */
  source?: string;
  /**
   * Optional source URL
   */
  sourceUrl?: string;
  /**
   * Height of the preview
   */
  height?: string;
  /**
   * Optional additional CSS for background
   */
  backgroundColor?: string;
}

/**
 * Pattern Background Showcase
 * Displays various tiled and pattern backgrounds
 */
export const PatternBackground: React.FC<PatternBackgroundProps> = ({
  background,
  backgroundSize = 'auto',
  label,
  source,
  sourceUrl,
  height = '200px',
  backgroundColor,
}) => {
  return (
    <div className="pattern-background">
      <div
        className="pattern-background__preview"
        style={{
          background,
          backgroundSize,
          backgroundColor,
          height,
        }}
      />
      {(label || source) && (
        <div className="pattern-background__info">
          {label && <div className="pattern-background__label">{label}</div>}
          {source && (
            <div className="pattern-background__source">
              Source:{' '}
              {sourceUrl ? (
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                  {source}
                </a>
              ) : (
                source
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
