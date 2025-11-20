import React from 'react';
import './HoverEffect.css';

export interface HoverEffectProps {
  /**
   * Effect type
   */
  effect: 'glow' | 'lift' | 'scale' | 'rotate' | 'blur';
  /**
   * Content to apply effect to
   */
  children: React.ReactNode;
}

/**
 * Hover Effect Showcase
 * Demonstrates various CSS hover effects
 */
export const HoverEffect: React.FC<HoverEffectProps> = ({ effect, children }) => {
  return (
    <div className={`hover-effect hover-effect--${effect}`}>
      {children}
    </div>
  );
};
