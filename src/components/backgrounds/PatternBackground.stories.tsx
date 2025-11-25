import type { Meta, StoryObj } from '@storybook/react';
import { PatternBackground } from './PatternBackground';

const meta = {
  title: 'Backgrounds',
  component: PatternBackground,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PatternBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// NOISE BACKGROUNDS
// =============================================================================

/**
 * Dark noise background using SVG feTurbulence filter.
 * Creates a subtle, low-res noise effect perfect for dark themes.
 */
export const DarkNoise: Story = {
  args: {
    background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    backgroundColor: '#1a1a1a',
    backgroundSize: '200px 200px',
    label: 'Dark Noise',
    source: 'CSS SVG feTurbulence',
    height: '250px',
  },
};

/**
 * Light noise background using SVG feTurbulence filter.
 * Subtle grain effect suitable for light themes.
 */
export const LightNoise: Story = {
  args: {
    background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    backgroundColor: '#f5f5f5',
    backgroundSize: '200px 200px',
    label: 'Light Noise',
    source: 'CSS SVG feTurbulence',
    height: '250px',
  },
};

// =============================================================================
// PAPER BACKGROUNDS
// =============================================================================

/**
 * Classic notebook paper with blue horizontal lines and red margin.
 * Pure CSS implementation - no external assets required.
 */
export const NotebookPaper: Story = {
  args: {
    background: `
      linear-gradient(90deg, transparent 39px, #f8d4d4 39px, #f8d4d4 41px, transparent 41px),
      repeating-linear-gradient(
        transparent,
        transparent 31px,
        #9fc5e8 31px,
        #9fc5e8 32px
      )
    `,
    backgroundColor: '#fefefe',
    backgroundSize: '100% 32px',
    label: 'Notebook Paper',
    source: 'Pure CSS',
    height: '250px',
  },
};

/**
 * Graph/squared paper with fine grid lines.
 * Perfect for technical or mathematical contexts.
 */
export const GraphPaper: Story = {
  args: {
    background: `
      linear-gradient(#e0e0e0 1px, transparent 1px),
      linear-gradient(90deg, #e0e0e0 1px, transparent 1px)
    `,
    backgroundColor: '#ffffff',
    backgroundSize: '20px 20px',
    label: 'Graph Paper',
    source: 'Pure CSS',
    height: '250px',
  },
};

/**
 * Engineering graph paper with major and minor grid lines.
 */
export const EngineeringPaper: Story = {
  args: {
    background: `
      linear-gradient(#bcd4bc 2px, transparent 2px),
      linear-gradient(90deg, #bcd4bc 2px, transparent 2px),
      linear-gradient(#d4e8d4 1px, transparent 1px),
      linear-gradient(90deg, #d4e8d4 1px, transparent 1px)
    `,
    backgroundColor: '#f4f9f4',
    backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
    label: 'Engineering Paper',
    source: 'Pure CSS',
    height: '250px',
  },
};

// =============================================================================
// CURATED WEB PATTERNS - Subtle Patterns / Transparent Textures
// These patterns are from the Subtle Patterns collection by Atle Mo (Toptal)
// Licensed under Creative Commons
// =============================================================================

/**
 * Subtle fabric-like texture.
 * From Subtle Patterns collection.
 */
export const CleanTextile: Story = {
  args: {
    background: `url("https://www.transparenttextures.com/patterns/clean-textile.png")`,
    backgroundColor: '#f8f8f8',
    label: 'Clean Textile',
    source: 'Subtle Patterns by Atle Mo',
    sourceUrl: 'https://www.toptal.com/designers/subtlepatterns/',
    height: '250px',
  },
};

/**
 * Dark asphalt-like noise texture.
 * From Subtle Patterns collection.
 */
export const AsfaltDark: Story = {
  args: {
    background: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
    backgroundColor: '#2c2c2c',
    label: 'Asfalt Dark',
    source: 'Subtle Patterns by Atle Mo',
    sourceUrl: 'https://www.toptal.com/designers/subtlepatterns/',
    height: '250px',
  },
};

/**
 * Light asphalt-like noise texture.
 * From Subtle Patterns collection.
 */
export const AsfaltLight: Story = {
  args: {
    background: `url("https://www.transparenttextures.com/patterns/asfalt-light.png")`,
    backgroundColor: '#f0f0f0',
    label: 'Asfalt Light',
    source: 'Subtle Patterns by Atle Mo',
    sourceUrl: 'https://www.toptal.com/designers/subtlepatterns/',
    height: '250px',
  },
};

/**
 * Subtle diagonal lines pattern.
 * From Subtle Patterns collection.
 */
export const DiagonalStriped: Story = {
  args: {
    background: `url("https://www.transparenttextures.com/patterns/diagonal-striped-brick.png")`,
    backgroundColor: '#f5f5f5',
    label: 'Diagonal Striped',
    source: 'Subtle Patterns by Atle Mo',
    sourceUrl: 'https://www.toptal.com/designers/subtlepatterns/',
    height: '250px',
  },
};

/**
 * Brushed metal aluminum effect.
 * From Subtle Patterns collection.
 */
export const BrushedAluminum: Story = {
  args: {
    background: `url("https://www.transparenttextures.com/patterns/brushed-alum.png")`,
    backgroundColor: '#e8e8e8',
    label: 'Brushed Aluminum',
    source: 'Subtle Patterns by Atle Mo',
    sourceUrl: 'https://www.toptal.com/designers/subtlepatterns/',
    height: '250px',
  },
};

/**
 * Natural paper texture with fibers.
 * From Subtle Patterns collection.
 */
export const PaperFibers: Story = {
  args: {
    background: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`,
    backgroundColor: '#f9f9f9',
    label: 'Paper Fibers',
    source: 'Subtle Patterns by Atle Mo',
    sourceUrl: 'https://www.toptal.com/designers/subtlepatterns/',
    height: '250px',
  },
};

// =============================================================================
// HERO PATTERNS - SVG Backgrounds by Steve Schoger
// Free repeatable SVG background patterns
// =============================================================================

/**
 * Topography contour lines pattern.
 * Clean, modern look inspired by topographic maps.
 */
export const Topography: Story = {
  args: {
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Cpath fill='none' stroke='%23d0d0d0' stroke-width='1' d='M0 300c0-165.69 134.31-300 300-300s300 134.31 300 300-134.31 300-300 300S0 465.69 0 300zm150 0c0-82.84 67.16-150 150-150s150 67.16 150 150-67.16 150-150 150S150 382.84 150 300zm75 0c0-41.42 33.58-75 75-75s75 33.58 75 75-33.58 75-75 75-75-33.58-75-75z'/%3E%3C/svg%3E")`,
    backgroundColor: '#fafafa',
    backgroundSize: '120px 120px',
    label: 'Topography',
    source: 'Hero Patterns by Steve Schoger',
    sourceUrl: 'https://heropatterns.com/',
    height: '250px',
  },
};

/**
 * Subtle circuit board pattern.
 * Modern, tech-inspired background.
 */
export const CircuitBoard: Story = {
  args: {
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='304' height='304' viewBox='0 0 304 304'%3E%3Cpath fill='%23404040' fill-opacity='0.15' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H googl5zm-95.8 0a5 5 0 1 1 0 2H18v46h-2V0h50.1zm-18 0a5 5 0 1 1 0 2H18V2h14.1zm30 0a5 5 0 1 1 0 2H66V2h30.1z'/%3E%3C/svg%3E")`,
    backgroundColor: '#1e1e1e',
    backgroundSize: '304px 304px',
    label: 'Circuit Board',
    source: 'Hero Patterns by Steve Schoger',
    sourceUrl: 'https://heropatterns.com/',
    height: '250px',
  },
};

/**
 * Subtle plus signs pattern.
 * Minimal, clean repeating pattern.
 */
export const PlusPattern: Story = {
  args: {
    background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cccccc' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundColor: '#ffffff',
    backgroundSize: '60px 60px',
    label: 'Plus Pattern',
    source: 'Hero Patterns by Steve Schoger',
    sourceUrl: 'https://heropatterns.com/',
    height: '250px',
  },
};

/**
 * Overlapping circles pattern.
 * Elegant, sophisticated repeating design.
 */
export const OverlappingCircles: Story = {
  args: {
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c0c0c0' stroke-width='1'%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='80' cy='40' r='30'/%3E%3Ccircle cx='0' cy='40' r='30'/%3E%3Ccircle cx='40' cy='80' r='30'/%3E%3Ccircle cx='40' cy='0' r='30'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundColor: '#fafafa',
    backgroundSize: '80px 80px',
    label: 'Overlapping Circles',
    source: 'Hero Patterns by Steve Schoger',
    sourceUrl: 'https://heropatterns.com/',
    height: '250px',
  },
};

/**
 * Hexagonal pattern.
 * Modern geometric background.
 */
export const Hexagons: Story = {
  args: {
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23888888' fill-opacity='0.15'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundColor: '#f5f5f5',
    backgroundSize: '28px 49px',
    label: 'Hexagons',
    source: 'Hero Patterns by Steve Schoger',
    sourceUrl: 'https://heropatterns.com/',
    height: '250px',
  },
};
