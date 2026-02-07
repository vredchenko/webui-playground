import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Holidays',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Holidays',
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

export const ChrismasNewYear: Story = {
  args: {
    subcategoryName: "Chrismas New Year",
    categoryPath: "holidays/chrismas-new-year",
    regularIcons: ["christmas-angel.png","christmas-bells-1.png","christmas-bells.png","christmas-candle.png","christmas-door-wreath-1.png","christmas-door-wreath.png","christmas-flower.png","christmas-gift.png","christmas-lights.png","christmas-mistletoe.png","christmas-postcard-1.png","christmas-postcard-2.png","christmas-postcard-envelope.png","christmas-postcard.png","christmas-santa.png","christmas-sled.png","christmas-snow-globe.png","christmas-snow.png","christmas-snowflake.png","christmas-snowman.png","christmas-sock.png","christmas-star.png","christmas-sugar-cane.png","christmas-tree-ornament.png","christmas-tree-ornaments-1.png","christmas-tree-ornaments-gift.png","christmas-tree-ornaments.png","christmas-tree-top-star.png","christmas-tree-top.png","christmas-tree.png"],
    lightIcons: [],
  },
};

export const Easter: Story = {
  args: {
    subcategoryName: "Easter",
    categoryPath: "holidays/easter",
    regularIcons: ["easter-egg-basket.png","easter-egg-bunny.png","easter-egg-decoration.png","easter-egg-ribbon.png","easter-egg.png"],
    lightIcons: [],
  },
};

export const Halloween: Story = {
  args: {
    subcategoryName: "Halloween",
    categoryPath: "holidays/halloween",
    regularIcons: ["halloween-bat-fly.png","halloween-bat.png","halloween-broom.png","halloween-calendar-ghost.png","halloween-calendar-skull.png","halloween-calendar-tree.png","halloween-cauldron-mix.png","halloween-cauldron.png","halloween-figure-1.png","halloween-figure.png","halloween-graveyard.png","halloween-grim-reaper.png","halloween-hand.png","halloween-lips-vampire.png","halloween-pumpkin.png","halloween-spider.png","halloween-vampire.png","halloween-voodoo-doll.png","halloween-web.png"],
    lightIcons: [],
  },
};
