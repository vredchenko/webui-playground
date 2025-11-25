import type { Meta, StoryObj } from '@storybook/react';
import { CodeFonts } from './CodeFonts';

const meta = {
  title: 'Typography/CodeFonts',
  component: CodeFonts,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Monospace fonts designed specifically for programming and code editing. These fonts prioritize
readability, character distinction, and often include programming ligatures.

## Key Features of Good Code Fonts

- **Monospace**: Fixed-width characters for proper alignment
- **Character distinction**: Clear difference between similar characters (0/O, 1/l/I)
- **Ligatures**: Optional combined glyphs for operators (=>, ==, !==)
- **Multiple weights**: Support for bold, light, and other weights
- **Italic variants**: For code comments and keywords

## JetBrains IDE Fonts

JetBrains uses **JetBrains Mono** as the default font in all their IDEs:
- IntelliJ IDEA
- WebStorm
- PyCharm
- PhpStorm
- Rider
- GoLand
- CLion
- DataGrip
- RubyMine

## Popular Code Fonts

### With Ligatures
- JetBrains Mono
- Fira Code
- Cascadia Code
- Victor Mono
- Iosevka
- Hasklig
- Monoid

### Classic Monospace
- Source Code Pro
- Hack
- Inconsolata
- Monaco
- Consolas
- Menlo
- Ubuntu Mono
- IBM Plex Mono
- Roboto Mono
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeFonts>;

export default meta;
type Story = StoryObj<typeof meta>;

// JetBrains Mono - the JetBrains IDE font
export const JetBrainsMono: Story = {
  args: {
    fontFamily: '"JetBrains Mono", monospace',
    fontName: 'JetBrains Mono',
    fontDescription: 'The free and open-source typeface for developers. Default font in all JetBrains IDEs. Features 138 code-specific ligatures.',
    hasLigatures: true,
    url: 'https://www.jetbrains.com/lp/mono/',
    creator: 'JetBrains (Philipp Nurullin & Konstantin Bulenkov)',
  },
};

// Fira Code - most popular ligature font
export const FiraCode: Story = {
  args: {
    fontFamily: '"Fira Code", monospace',
    fontName: 'Fira Code',
    fontDescription: 'Free monospaced font with programming ligatures, based on Fira Mono. One of the most popular choices for code editors.',
    hasLigatures: true,
    url: 'https://github.com/tonsky/FiraCode',
    creator: 'Nikita Prokopov',
  },
};

// Cascadia Code - Microsoft's code font
export const CascadiaCode: Story = {
  args: {
    fontFamily: '"Cascadia Code", "Cascadia Mono", monospace',
    fontName: 'Cascadia Code',
    fontDescription: 'Microsoft\'s default font for Windows Terminal and Visual Studio. Includes Cascadia Mono variant without ligatures.',
    hasLigatures: true,
    url: 'https://github.com/microsoft/cascadia-code',
    creator: 'Microsoft',
  },
};

// Source Code Pro - Adobe's classic
export const SourceCodePro: Story = {
  args: {
    fontFamily: '"Source Code Pro", monospace',
    fontName: 'Source Code Pro',
    fontDescription: 'Adobe\'s monospaced font family designed for coding environments. Clean and highly readable.',
    hasLigatures: false,
    url: 'https://github.com/adobe-fonts/source-code-pro',
    creator: 'Adobe (Paul D. Hunt)',
  },
};

// Hack
export const Hack: Story = {
  args: {
    fontFamily: 'Hack, monospace',
    fontName: 'Hack',
    fontDescription: 'A typeface designed for source code. Based on Bitstream Vera and DejaVu families with modifications for improved readability.',
    hasLigatures: false,
    url: 'https://sourcefoundry.org/hack/',
    creator: 'Source Foundry',
  },
};

// Inconsolata
export const Inconsolata: Story = {
  args: {
    fontFamily: 'Inconsolata, monospace',
    fontName: 'Inconsolata',
    fontDescription: 'A monospace font designed for printed code listings. Inspired by Consolas with improvements for screen readability.',
    hasLigatures: false,
    url: 'https://levien.com/type/myfonts/inconsolata.html',
    creator: 'Raph Levien',
  },
};

// Victor Mono
export const VictorMono: Story = {
  args: {
    fontFamily: '"Victor Mono", monospace',
    fontName: 'Victor Mono',
    fontDescription: 'A free programming font with semi-connected cursive italics and programming ligatures. Great for themes that style keywords in italic.',
    hasLigatures: true,
    url: 'https://rubjo.github.io/victor-mono/',
    creator: 'Rune Bjørnerås',
  },
};

// Iosevka
export const Iosevka: Story = {
  args: {
    fontFamily: 'Iosevka, monospace',
    fontName: 'Iosevka',
    fontDescription: 'Slender monospace font with many stylistic sets and variants. Highly customizable with an online builder.',
    hasLigatures: true,
    url: 'https://typeof.net/Iosevka/',
    creator: 'Belleve Invis',
  },
};

// IBM Plex Mono
export const IBMPlexMono: Story = {
  args: {
    fontFamily: '"IBM Plex Mono", monospace',
    fontName: 'IBM Plex Mono',
    fontDescription: 'IBM\'s corporate typeface monospace variant. Clean, neutral design with excellent character distinction.',
    hasLigatures: false,
    url: 'https://www.ibm.com/plex/',
    creator: 'IBM (Mike Abbink)',
  },
};

// Roboto Mono
export const RobotoMono: Story = {
  args: {
    fontFamily: '"Roboto Mono", monospace',
    fontName: 'Roboto Mono',
    fontDescription: 'Monospace addition to the Roboto family. Optimized for readability on screens across a wide variety of devices.',
    hasLigatures: false,
    url: 'https://fonts.google.com/specimen/Roboto+Mono',
    creator: 'Google (Christian Robertson)',
  },
};

// Ubuntu Mono
export const UbuntuMono: Story = {
  args: {
    fontFamily: '"Ubuntu Mono", monospace',
    fontName: 'Ubuntu Mono',
    fontDescription: 'Part of the Ubuntu font family. Distinctive look with excellent terminal readability.',
    hasLigatures: false,
    url: 'https://design.ubuntu.com/font/',
    creator: 'Dalton Maag',
  },
};

// Monaco
export const Monaco: Story = {
  args: {
    fontFamily: 'Monaco, monospace',
    fontName: 'Monaco',
    fontDescription: 'Apple\'s classic monospace font used in older macOS terminals and Xcode. Compact and highly legible.',
    hasLigatures: false,
    url: 'https://developer.apple.com/fonts/',
    creator: 'Apple (Susan Kare & Kris Holmes)',
  },
};

// Consolas
export const Consolas: Story = {
  args: {
    fontFamily: 'Consolas, monospace',
    fontName: 'Consolas',
    fontDescription: 'Microsoft\'s monospace font designed for Visual Studio. ClearType optimized with excellent character distinction.',
    hasLigatures: false,
    url: 'https://docs.microsoft.com/en-us/typography/font-list/consolas',
    creator: 'Microsoft (Luc(as) de Groot)',
  },
};

// Menlo
export const Menlo: Story = {
  args: {
    fontFamily: 'Menlo, monospace',
    fontName: 'Menlo',
    fontDescription: 'Apple\'s standard monospace font since Mac OS X Snow Leopard. Based on Bitstream Vera Sans Mono.',
    hasLigatures: false,
    url: 'https://developer.apple.com/fonts/',
    creator: 'Apple (based on Vera Sans Mono)',
  },
};

// Droid Sans Mono
export const DroidSansMono: Story = {
  args: {
    fontFamily: '"Droid Sans Mono", monospace',
    fontName: 'Droid Sans Mono',
    fontDescription: 'Part of the Droid font family designed for Android. Optimized for small screens and low resolution displays.',
    hasLigatures: false,
    url: 'https://fonts.google.com/specimen/Droid+Sans+Mono',
    creator: 'Ascender Corporation (Steve Matteson)',
  },
};

// Anonymous Pro
export const AnonymousPro: Story = {
  args: {
    fontFamily: '"Anonymous Pro", monospace',
    fontName: 'Anonymous Pro',
    fontDescription: 'A family of four fixed-width fonts designed for coding. Features clear distinction between similar characters.',
    hasLigatures: false,
    url: 'https://www.marksimonson.com/fonts/view/anonymous-pro',
    creator: 'Mark Simonson',
  },
};

// Fantasque Sans Mono
export const FantasqueSansMono: Story = {
  args: {
    fontFamily: '"Fantasque Sans Mono", monospace',
    fontName: 'Fantasque Sans Mono',
    fontDescription: 'A handwriting-like monospace font with a personality. Great for those who want something different.',
    hasLigatures: false,
    url: 'https://github.com/belluzj/fantasque-sans',
    creator: 'Jany Belluz',
  },
};

// Monoid
export const Monoid: Story = {
  args: {
    fontFamily: 'Monoid, monospace',
    fontName: 'Monoid',
    fontDescription: 'Customizable coding font optimized for extreme legibility. Very compact with large x-height.',
    hasLigatures: true,
    url: 'https://larsenwork.com/monoid/',
    creator: 'Andreas Larsen',
  },
};
