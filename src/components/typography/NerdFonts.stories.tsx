import type { Meta, StoryObj } from '@storybook/react';
import { NerdFonts } from './NerdFonts';

const meta = {
  title: 'Typography/NerdFonts',
  component: NerdFonts,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Nerd Fonts is a project that patches developer targeted fonts with a high number of glyphs (icons).
It includes popular sets like Font Awesome, Devicons, Octicons, and more.

**Note:** You must have NerdFonts installed on your system to see the icons correctly.

## Popular NerdFonts (Patched Fonts)

- **JetBrainsMono Nerd Font** - JetBrains Mono with icons
- **FiraCode Nerd Font** - Fira Code with programming ligatures and icons
- **Hack Nerd Font** - Hack font with icons
- **CaskaydiaCove Nerd Font** - Cascadia Code with icons
- **SourceCodePro Nerd Font** - Adobe Source Code Pro with icons
- **UbuntuMono Nerd Font** - Ubuntu Mono with icons
- **Meslo Nerd Font** - Customized Menlo with icons
- **Inconsolata Nerd Font** - Inconsolata with icons
- **DroidSansMono Nerd Font** - Droid Sans Mono with icons
- **DejaVuSansMono Nerd Font** - DejaVu Sans Mono with icons
- **RobotoMono Nerd Font** - Roboto Mono with icons
- **Iosevka Nerd Font** - Iosevka with icons
- **VictorMono Nerd Font** - Victor Mono with icons
- **SpaceMono Nerd Font** - Space Mono with icons
- **Agave Nerd Font** - Agave with icons
- **BitstreamVeraSansMono Nerd Font** - Bitstream Vera Sans Mono with icons

Visit [nerdfonts.com](https://www.nerdfonts.com) to download.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NerdFonts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fontFamily: '"JetBrainsMono Nerd Font", "FiraCode Nerd Font", "Hack Nerd Font", monospace',
    fontName: 'NerdFont (Generic)',
  },
};

export const JetBrainsMonoNerdFont: Story = {
  args: {
    fontFamily: '"JetBrainsMono Nerd Font", monospace',
    fontName: 'JetBrainsMono Nerd Font',
  },
};

export const FiraCodeNerdFont: Story = {
  args: {
    fontFamily: '"FiraCode Nerd Font", monospace',
    fontName: 'FiraCode Nerd Font',
  },
};

export const HackNerdFont: Story = {
  args: {
    fontFamily: '"Hack Nerd Font", monospace',
    fontName: 'Hack Nerd Font',
  },
};

export const CaskaydiaCoveNerdFont: Story = {
  args: {
    fontFamily: '"CaskaydiaCove Nerd Font", monospace',
    fontName: 'CaskaydiaCove Nerd Font (Cascadia Code)',
  },
};

export const MesloNerdFont: Story = {
  args: {
    fontFamily: '"MesloLGS Nerd Font", "Meslo Nerd Font", monospace',
    fontName: 'Meslo Nerd Font',
  },
};

export const SourceCodeProNerdFont: Story = {
  args: {
    fontFamily: '"SauceCodePro Nerd Font", monospace',
    fontName: 'SourceCodePro Nerd Font (SauceCodePro)',
  },
};

export const IosevkaNerdFont: Story = {
  args: {
    fontFamily: '"Iosevka Nerd Font", monospace',
    fontName: 'Iosevka Nerd Font',
  },
};

export const InconsolataNerdFont: Story = {
  args: {
    fontFamily: '"Inconsolata Nerd Font", monospace',
    fontName: 'Inconsolata Nerd Font',
  },
};

export const UbuntuMonoNerdFont: Story = {
  args: {
    fontFamily: '"UbuntuMono Nerd Font", monospace',
    fontName: 'UbuntuMono Nerd Font',
  },
};

export const RobotoMonoNerdFont: Story = {
  args: {
    fontFamily: '"RobotoMono Nerd Font", monospace',
    fontName: 'RobotoMono Nerd Font',
  },
};

export const VictorMonoNerdFont: Story = {
  args: {
    fontFamily: '"VictorMono Nerd Font", monospace',
    fontName: 'VictorMono Nerd Font',
  },
};
