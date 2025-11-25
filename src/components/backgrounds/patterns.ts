/**
 * Background pattern definitions
 * These are CSS-ready background values for various patterns
 */

// SVG-based noise pattern (dark) - creates a tiled noise effect
export const darkNoiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// SVG-based noise pattern (light) - creates a tiled noise effect
export const lightNoiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

/**
 * Notebook paper with blue lines - pure CSS pattern
 */
export const notebookPaperCss = `
  repeating-linear-gradient(
    transparent,
    transparent 31px,
    #9ac2e5 31px,
    #9ac2e5 32px
  ),
  linear-gradient(
    90deg,
    #f8d8d8 0px,
    #f8d8d8 1px,
    transparent 1px
  )
`;

export const notebookPaperBackground = '#fefefe';

/**
 * Graph/squared paper - CSS grid pattern
 */
export const graphPaperCss = `
  linear-gradient(#e8e8e8 1px, transparent 1px),
  linear-gradient(90deg, #e8e8e8 1px, transparent 1px)
`;

export const graphPaperLargeCss = `
  linear-gradient(#d0d0d0 2px, transparent 2px),
  linear-gradient(90deg, #d0d0d0 2px, transparent 2px),
  linear-gradient(#e8e8e8 1px, transparent 1px),
  linear-gradient(90deg, #e8e8e8 1px, transparent 1px)
`;

/**
 * Pattern presets ready for use
 */
export const patterns = {
  darkNoise: {
    background: darkNoiseSvg,
    backgroundColor: '#1a1a1a',
    backgroundSize: '200px 200px',
    label: 'Dark Noise',
    source: 'CSS SVG feTurbulence',
  },
  lightNoise: {
    background: lightNoiseSvg,
    backgroundColor: '#f5f5f5',
    backgroundSize: '200px 200px',
    label: 'Light Noise',
    source: 'CSS SVG feTurbulence',
  },
  notebookPaper: {
    background: notebookPaperCss,
    backgroundColor: notebookPaperBackground,
    backgroundSize: '100% 32px, 40px 100%',
    label: 'Notebook Paper',
    source: 'Pure CSS',
  },
  graphPaper: {
    background: graphPaperCss,
    backgroundColor: '#ffffff',
    backgroundSize: '20px 20px',
    label: 'Graph Paper',
    source: 'Pure CSS',
  },
  graphPaperLarge: {
    background: graphPaperLargeCss,
    backgroundColor: '#ffffff',
    backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
    label: 'Graph Paper (Large Grid)',
    source: 'Pure CSS',
  },
} as const;
