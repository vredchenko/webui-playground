import React from 'react';
import './GradientBackground.css';

export interface GradientBackgroundProps {
  /**
   * CSS gradient string
   */
  gradient: string;
  /**
   * Optional label for the gradient
   */
  label?: string;
  /**
   * Height of the preview
   */
  height?: string;
}

/**
 * Gradient Background Showcase
 * Displays various CSS gradient backgrounds
 */
export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  gradient,
  label,
  height = '200px',
}) => {
  return (
    <div className="gradient-background">
      <div
        className="gradient-background__preview"
        style={{ background: gradient, height }}
      />
      {label && <div className="gradient-background__label">{label}</div>}
    </div>
  );
};
