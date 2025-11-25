# Backgrounds

Tiled background patterns and textures.

## Included Patterns

### Noise Backgrounds
- **Dark Noise** - Low-res noise texture on dark background (SVG feTurbulence)
- **Light Noise** - Subtle grain on light background (SVG feTurbulence)

### Paper Backgrounds
- **Notebook Paper** - Classic ruled notebook with blue lines and red margin (CSS)
- **Graph Paper** - Fine grid paper (CSS)
- **Engineering Paper** - Major/minor grid lines (CSS)

### Curated Web Patterns
From [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/) by Atle Mo (CC licensed):
- Clean Textile
- Asfalt Dark
- Asfalt Light
- Diagonal Striped
- Brushed Aluminum
- Paper Fibers

From [Hero Patterns](https://heropatterns.com/) by Steve Schoger (free SVG patterns):
- Topography
- Circuit Board
- Plus Pattern
- Overlapping Circles
- Hexagons

## Usage

```tsx
import { PatternBackground } from './PatternBackground';

<PatternBackground
  background="url('pattern.png')"
  backgroundColor="#f5f5f5"
  label="My Pattern"
  source="Pattern Source"
  sourceUrl="https://example.com"
/>
```
