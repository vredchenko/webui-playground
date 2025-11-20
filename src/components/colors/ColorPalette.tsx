import React from 'react';
import './ColorPalette.css';

export interface ColorSwatchProps {
  name: string;
  hex: string;
}

export interface ColorPaletteProps {
  /**
   * Palette name
   */
  title?: string;
  /**
   * Array of color swatches
   */
  colors: ColorSwatchProps[];
}

/**
 * Color Palette Display
 * Shows a collection of color swatches with names and hex values
 */
export const ColorPalette: React.FC<ColorPaletteProps> = ({ title, colors }) => {
  return (
    <div className="color-palette">
      {title && <h3 className="color-palette__title">{title}</h3>}
      <div className="color-palette__grid">
        {colors.map((color) => (
          <div key={color.hex} className="color-swatch">
            <div
              className="color-swatch__preview"
              style={{ backgroundColor: color.hex }}
            />
            <div className="color-swatch__info">
              <div className="color-swatch__name">{color.name}</div>
              <div className="color-swatch__hex">{color.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
