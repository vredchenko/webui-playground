import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Lamps Lights Fire',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Lamps Lights Fire',
          '',
          '100,000+ icons by [Streamline](https://streamlinehq.com). Free under [CC Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (linkware).',
          '',
          'Showing 96px PNG variants in Regular styles.',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StreamlineIconGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CeilingLamps: Story = {
  args: {
    subcategoryName: "Ceiling Lamps",
    categoryPath: "lamps-lights-fire/ceiling-lamps",
    regularIcons: ["ceiling-ball-chandelier-retro-1.png","ceiling-ball-chandelier-retro.png","ceiling-lamp-1.png","ceiling-lamp-2.png","ceiling-lamp-ball-chandelier.png","ceiling-lamp-chandelier.png","ceiling-lamp-double.png","ceiling-lamp-three.png","ceiling-lamp.png"],
    lightIcons: [],
  },
};

export const LightBubbles: Story = {
  args: {
    subcategoryName: "Light Bubbles",
    categoryPath: "lamps-lights-fire/light-bubbles",
    regularIcons: ["light-bulb-1.png","light-bulb-eco.png","light-bulb-shine.png","light-bulb.png"],
    lightIcons: [],
  },
};

export const LighterMatchesCandles: Story = {
  args: {
    subcategoryName: "Lighter Matches Candles",
    categoryPath: "lamps-lights-fire/lighter-matches-candles",
    regularIcons: ["candle.png","lantern-1.png","lantern.png","lighter.png","match-fire-1.png","match-fire-alternate.png","match-fire.png","matches-fire.png","table-candles.png","torch.png"],
    lightIcons: [],
  },
};

export const SmartLighting: Story = {
  args: {
    subcategoryName: "Smart Lighting",
    categoryPath: "lamps-lights-fire/smart-lighting",
    regularIcons: ["smart-light-connect.png","smart-light-signal.png","smart-light-smartphone.png","smart-light-wifi-1.png","smart-light-wifi.png"],
    lightIcons: [],
  },
};

export const StandingLamps: Story = {
  args: {
    subcategoryName: "Standing Lamps",
    categoryPath: "lamps-lights-fire/standing-lamps",
    regularIcons: ["standing-lamp-1.png","standing-lamp-double.png","standing-lamp.png"],
    lightIcons: [],
  },
};

export const TableLamps: Story = {
  args: {
    subcategoryName: "Table Lamps",
    categoryPath: "lamps-lights-fire/table-lamps",
    regularIcons: ["table-lamp-1.png","table-lamp-2.png","table-lamp-3.png","table-lamp-4.png","table-lamp-colorful.png","table-lamp-hanging-1.png","table-lamp-hanging.png","table-lamp-retro-1.png","table-lamp-retro.png","table-lamp-square.png","table-lamp.png"],
    lightIcons: [],
  },
};
