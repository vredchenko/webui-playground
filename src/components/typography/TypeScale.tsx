import React from 'react';
import './TypeScale.css';

export interface TypeScaleProps {
  /**
   * Font family to demonstrate
   */
  fontFamily?: string;
}

/**
 * Typography Scale Demonstration
 * Shows a typographic scale from h1 to body text
 */
export const TypeScale: React.FC<TypeScaleProps> = ({
  fontFamily = 'system-ui, -apple-system, sans-serif'
}) => {
  return (
    <div className="type-scale" style={{ fontFamily }}>
      <h1 className="type-scale__h1">Heading 1</h1>
      <h2 className="type-scale__h2">Heading 2</h2>
      <h3 className="type-scale__h3">Heading 3</h3>
      <h4 className="type-scale__h4">Heading 4</h4>
      <h5 className="type-scale__h5">Heading 5</h5>
      <h6 className="type-scale__h6">Heading 6</h6>
      <p className="type-scale__body">
        Body text: The quick brown fox jumps over the lazy dog.
        Pack my box with five dozen liquor jugs.
      </p>
      <p className="type-scale__small">
        Small text: The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  );
};
