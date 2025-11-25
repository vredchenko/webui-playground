import type { Meta, StoryObj } from '@storybook/react';
import { DyslexicFonts } from './DyslexicFonts';

const meta = {
  title: 'Typography/DyslexicFonts',
  component: DyslexicFonts,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Fonts designed to improve readability for people with dyslexia. These fonts feature unique design
elements like weighted bottoms, distinct letter shapes, and wider spacing to reduce visual confusion.

## Research Notes

While these fonts are designed with dyslexia in mind, research shows mixed results:
- The British Dyslexia Association recommends sans-serif fonts like Arial and Comic Sans
- Studies suggest individual preference varies significantly
- Key factors: clear letter shapes, adequate spacing, and open counters

## Available Dyslexic-Friendly Fonts

### Open Source / Free
- **OpenDyslexic** - Most popular free option, weighted bottoms, unique letter shapes
- **Lexie Readable** - Similar to Comic Sans but more mature, designed by Keith Bates
- **Sylexiad** - Research-based, designed specifically for dyslexic readers

### Commercial
- **Dyslexie** - Award-winning Dutch typeface by Christian Boer
- **Read Regular** - Designed by Natascha Frensch

### Recommended Standard Fonts
The British Dyslexia Association also recommends these standard fonts:
- Arial
- Comic Sans
- Verdana
- Tahoma
- Century Gothic
- Trebuchet
- Calibri
- Open Sans
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DyslexicFonts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OpenDyslexic: Story = {
  args: {
    fontFamily: 'OpenDyslexic, "Comic Sans MS", sans-serif',
    fontName: 'OpenDyslexic',
    fontDescription: 'A free typeface designed against common symptoms of dyslexia. Features weighted bottoms and unique letter shapes to help prevent letter rotation and confusion.',
    isOpenSource: true,
    url: 'https://opendyslexic.org',
  },
};

export const LexieReadable: Story = {
  args: {
    fontFamily: '"Lexie Readable", "Lexia Readable", "Comic Sans MS", sans-serif',
    fontName: 'Lexie Readable',
    fontDescription: 'A more mature alternative to Comic Sans, designed by Keith Bates at K-Type. Optimized for legibility at small sizes.',
    isOpenSource: true,
    url: 'https://www.k-type.com/fonts/lexie-readable/',
  },
};

export const Dyslexie: Story = {
  args: {
    fontFamily: 'Dyslexie, "Comic Sans MS", sans-serif',
    fontName: 'Dyslexie Font',
    fontDescription: 'An award-winning typeface designed by Dutch graphic designer Christian Boer, who has dyslexia himself. Each letter has a unique form and weighted bottom.',
    isOpenSource: false,
    url: 'https://dyslexiefont.com',
  },
};

export const ComicSans: Story = {
  args: {
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    fontName: 'Comic Sans MS',
    fontDescription: 'While often criticized for aesthetic reasons, Comic Sans is recommended by the British Dyslexia Association due to its clear, informal letter shapes and good spacing.',
    isOpenSource: false,
    url: 'https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide',
  },
};

export const Arial: Story = {
  args: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontName: 'Arial',
    fontDescription: 'A clean sans-serif font recommended by the British Dyslexia Association. Widely available and readable at various sizes.',
    isOpenSource: false,
    url: 'https://www.bdadyslexia.org.uk',
  },
};

export const Verdana: Story = {
  args: {
    fontFamily: 'Verdana, Geneva, sans-serif',
    fontName: 'Verdana',
    fontDescription: 'Designed by Matthew Carter for screen readability. Features wide letter spacing and large x-height, making it easier to read.',
    isOpenSource: false,
    url: 'https://www.bdadyslexia.org.uk',
  },
};

export const Tahoma: Story = {
  args: {
    fontFamily: 'Tahoma, Geneva, sans-serif',
    fontName: 'Tahoma',
    fontDescription: 'A humanist sans-serif with clear letterforms and good spacing. Recommended for dyslexic readers.',
    isOpenSource: false,
    url: 'https://www.bdadyslexia.org.uk',
  },
};

export const CenturyGothic: Story = {
  args: {
    fontFamily: '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
    fontName: 'Century Gothic',
    fontDescription: 'A geometric sans-serif with clear, round letterforms. Good for headings and body text.',
    isOpenSource: false,
    url: 'https://www.bdadyslexia.org.uk',
  },
};

export const Trebuchet: Story = {
  args: {
    fontFamily: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", sans-serif',
    fontName: 'Trebuchet MS',
    fontDescription: 'A humanist sans-serif designed by Vincent Connare. Features distinctive letterforms that aid readability.',
    isOpenSource: false,
    url: 'https://www.bdadyslexia.org.uk',
  },
};

export const OpenSans: Story = {
  args: {
    fontFamily: '"Open Sans", sans-serif',
    fontName: 'Open Sans',
    fontDescription: 'A humanist sans-serif designed by Steve Matteson. Available on Google Fonts, optimized for legibility across print and web.',
    isOpenSource: true,
    url: 'https://fonts.google.com/specimen/Open+Sans',
  },
};

export const Atkinson: Story = {
  args: {
    fontFamily: '"Atkinson Hyperlegible", sans-serif',
    fontName: 'Atkinson Hyperlegible',
    fontDescription: 'Designed by the Braille Institute, focuses on letterform distinction to increase character recognition, aiding low-vision readers and those with dyslexia.',
    isOpenSource: true,
    url: 'https://brailleinstitute.org/freefont',
  },
};
