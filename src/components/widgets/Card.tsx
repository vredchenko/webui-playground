import React from 'react';
import './Card.css';

export interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card variant
   */
  variant?: 'default' | 'elevated' | 'outlined';
  /**
   * Optional image URL
   */
  image?: string;
}

/**
 * Card Component
 * Flexible container for content
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  image,
}) => {
  return (
    <div className={`card card--${variant}`}>
      {image && (
        <div className="card__image">
          <img src={image} alt={title || 'Card image'} />
        </div>
      )}
      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        <div className="card__body">{children}</div>
      </div>
    </div>
  );
};
