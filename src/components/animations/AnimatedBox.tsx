import React from 'react';
import './AnimatedBox.css';

export interface AnimatedBoxProps {
  /**
   * Animation type
   */
  animation: 'bounce' | 'pulse' | 'spin' | 'slide' | 'fade';
  /**
   * Animation duration in seconds
   */
  duration?: number;
}

/**
 * Animated Box Component
 * Demonstrates CSS keyframe animations
 */
export const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  animation,
  duration = 2,
}) => {
  return (
    <div
      className={`animated-box animated-box--${animation}`}
      style={{ animationDuration: `${duration}s` }}
    >
      {animation}
    </div>
  );
};
