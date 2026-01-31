import type { Meta, StoryObj } from '@storybook/react';
import { UkrainianFonts } from './UkrainianFonts';

const meta = {
  title: 'Typography/UkrainianFonts',
  component: UkrainianFonts,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A collection of fonts by Ukrainian designers or with excellent Ukrainian/Cyrillic character support.

## Font Sources

### ux.pub (Ukrainian designers)
Fonts created by Ukrainian type designers, showcasing the country's typography culture.

### fontspace.com
Free fonts with Cyrillic/Ukrainian support from various international designers.

### ukrfonts.com
Ukrainian font repository with free Cyrillic fonts.

## Ukrainian Alphabet Specifics

The Ukrainian alphabet has 33 letters, including four unique characters not found in Russian:
- **Ґ ґ** (Ge with upturn) - unique to Ukrainian
- **Є є** (Ukrainian Ye) - sounds like "ye" in "yes"
- **І і** (Dotted I) - sounds like "ee" in "see"
- **Ї ї** (Yi) - sounds like "yee"

A good Ukrainian font must properly support these characters.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UkrainianFonts>;

export default meta;
type Story = StoryObj<typeof meta>;

// === Ukrainian Designers (ux.pub source) ===

export const Arsenal: Story = {
  args: {
    fontFamily: 'Arsenal, sans-serif',
    fontName: 'Arsenal',
    fontDescription: 'A neo-grotesque sans-serif with soft curves and humanist touches. Designed for comfortable reading in both Ukrainian and Latin scripts.',
    designer: 'Andriy Shevchenko',
    license: 'OFL',
    url: 'https://fonts.google.com/specimen/Arsenal',
    category: 'sans-serif',
    availableWeights: [400, 700],
    hasItalic: true,
  },
};

export const FixelDisplay: Story = {
  args: {
    fontFamily: '"Fixel Display", sans-serif',
    fontName: 'Fixel Display',
    fontDescription: 'A modern geometric sans-serif by MacPaw, the Ukrainian software company. Optimized for headlines and display use with excellent Cyrillic support.',
    designer: 'MacPaw',
    license: 'OFL',
    url: 'https://fixel.macpaw.com/',
    category: 'sans-serif',
    availableWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    hasItalic: true,
  },
};

export const FixelText: Story = {
  args: {
    fontFamily: '"Fixel Text", sans-serif',
    fontName: 'Fixel Text',
    fontDescription: 'The text-optimized variant of Fixel, designed for body copy and extended reading. Features refined letterforms for smaller sizes.',
    designer: 'MacPaw',
    license: 'OFL',
    url: 'https://fixel.macpaw.com/',
    category: 'sans-serif',
    availableWeights: [400, 500, 600, 700],
    hasItalic: false,
  },
};

export const Mariupol: Story = {
  args: {
    fontFamily: 'Mariupol, sans-serif',
    fontName: 'Mariupol',
    fontDescription: 'Named after the heroic Ukrainian city, this font embodies resilience and strength. A clean sans-serif with distinctive character.',
    designer: 'Andriy Shevchenko',
    license: 'Free',
    url: 'https://www.behance.net/andrij_shevchenko',
    category: 'sans-serif',
    availableWeights: [400, 500, 700],
    hasItalic: false,
  },
};

// === Fontspace.com Fonts ===

export const KyivMachine: Story = {
  args: {
    fontFamily: '"Kyiv Machine", sans-serif',
    fontName: 'Kyiv Machine',
    fontDescription: 'A mechanical, industrial-style display font inspired by Ukrainian capital Kyiv. Features angular, constructivist letterforms.',
    designer: 'Lukas Krakora',
    license: 'Freeware',
    url: 'https://www.fontspace.com/kyiv-machine-font-f87608',
    category: 'display',
    availableWeights: [400],
    hasItalic: false,
  },
};

export const KremlinMinister: Story = {
  args: {
    fontFamily: '"Kremlin Minister", serif',
    fontName: 'Kremlin Minister',
    fontDescription: 'A decorative Cyrillic font with classic Russian/Eastern European styling. Features ornate letterforms reminiscent of historical documents.',
    designer: 'Bolt Cutter Design',
    license: 'GPL',
    url: 'https://www.fontspace.com/kremlin-minister-font-f4871',
    category: 'decorative',
    availableWeights: [400, 700, 900],
    hasItalic: false,
  },
};

export const QuantumUkraine: Story = {
  args: {
    fontFamily: '"Quantum Ukraine", sans-serif',
    fontName: 'Quantum Ukraine',
    fontDescription: 'A futuristic display font with Ukrainian patriotic theme. Features modern, tech-inspired geometric letterforms.',
    designer: 'BROTHERSZZZ',
    license: 'Freeware',
    url: 'https://www.fontspace.com/quantum-ukraine-font-f95614',
    category: 'display',
    availableWeights: [400],
    hasItalic: false,
  },
};

export const STOR: Story = {
  args: {
    fontFamily: 'STOR, sans-serif',
    fontName: 'STOR',
    fontDescription: 'A bold, blocky display font with strong geometric shapes. Great for impactful headlines and posters.',
    designer: 'BROTHERSZZZ',
    license: 'Freeware',
    url: 'https://www.fontspace.com/stor-font-f91097',
    category: 'display',
    availableWeights: [400],
    hasItalic: false,
  },
};

// === ukrfonts.com Fonts ===

export const BebasNeueCyrillic: Story = {
  args: {
    fontFamily: '"Bebas Neue Cyrillic", sans-serif',
    fontName: 'Bebas Neue Cyrillic',
    fontDescription: 'The popular Bebas Neue font with extended Cyrillic character support. A condensed all-caps display font perfect for headlines.',
    designer: 'Ryoichi Tsunekawa (Cyrillic extension)',
    license: 'Free',
    url: 'https://ukrfonts.com/',
    category: 'display',
    availableWeights: [400],
    hasItalic: false,
  },
};

export const AncientKyiv: Story = {
  args: {
    fontFamily: '"Ancient Kyiv", serif',
    fontName: 'Ancient Kyiv',
    fontDescription: 'A historical Cyrillic font inspired by ancient Ukrainian manuscripts and early Slavic writing traditions.',
    designer: 'Unknown',
    license: 'Free',
    url: 'https://ukrfonts.com/',
    category: 'decorative',
    availableWeights: [400],
    hasItalic: false,
  },
};

export const ArtScript: Story = {
  args: {
    fontFamily: 'ArtScript, cursive',
    fontName: 'ArtScript',
    fontDescription: 'An elegant script font with flowing, calligraphic letterforms. Supports Ukrainian characters with artistic flair.',
    designer: 'Unknown',
    license: 'Free',
    url: 'https://ukrfonts.com/',
    category: 'script',
    availableWeights: [400],
    hasItalic: false,
  },
};

export const Yakutovych: Story = {
  args: {
    fontFamily: 'Yakutovych, serif',
    fontName: 'Yakutovych',
    fontDescription: 'Named after the famous Ukrainian artist Heorhiy Yakutovych, this decorative font reflects Ukrainian artistic heritage.',
    designer: 'Unknown',
    license: 'Free',
    url: 'https://ukrfonts.com/',
    category: 'decorative',
    availableWeights: [400],
    hasItalic: false,
  },
};

export const AbetkaKirnarskoho: Story = {
  args: {
    fontFamily: '"Abetka Kirnarskoho", sans-serif',
    fontName: 'Abetka Kirnarskoho',
    fontDescription: 'A playful, hand-drawn style font based on Ukrainian alphabet traditions. Great for children\'s books and casual designs.',
    designer: 'Unknown',
    license: 'Free',
    url: 'https://ukrfonts.com/',
    category: 'display',
    availableWeights: [400],
    hasItalic: false,
  },
};
