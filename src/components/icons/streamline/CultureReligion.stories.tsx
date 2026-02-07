import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Culture Religion',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Culture Religion',
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

export const AstrologyMagic: Story = {
  args: {
    subcategoryName: "Astrology Magic",
    categoryPath: "culture-religion/astrology-magic",
    regularIcons: ["astrology-aquarius.png","astrology-aries-1.png","astrology-aries.png","astrology-book.png","astrology-broom.png","astrology-cancer.png","astrology-cane.png","astrology-capricorn.png","astrology-david.png","astrology-gemini.png","astrology-leo.png","astrology-libra.png","astrology-pisces.png","astrology-saggitarius.png","astrology-scorpio.png","astrology-stars.png","astrology-taurus.png","astrology-tent.png","astrology-virgo.png"],
    lightIcons: [],
  },
};

export const HistoryFolklore: Story = {
  args: {
    subcategoryName: "History Folklore",
    categoryPath: "culture-religion/history-folklore",
    regularIcons: ["history-africa.png","history-alice-mad-hat.png","history-armor-shield.png","history-armor.png","history-babushka-1.png","history-babushka.png","history-caveman-symbols.png","history-chinese-dragon.png","history-chinese-lantern-1.png","history-chinese-lantern.png","history-chinese-urn.png","history-egyptian-mythology-1.png","history-empire.png","history-epgyptian-mythology.png","history-eye-mythology.png","history-fan.png","history-fish.png","history-geisha-1.png","history-geisha.png","history-indian-eagle.png","history-indian-feather.png","history-lamp-genie.png","history-middle-east.png","history-noah's-ark.png","history-piggy.png","history-seat.png","history-silk-bug.png","history-snakes.png","history-spartan-helmet.png","history-spartan-mask.png","history-sphinx-1.png","history-sphinx.png","history-spiral.png","history-triangle.png","history-urn.png","history-vase.png","history-witch-cauldron.png"],
    lightIcons: [],
  },
};

export const PrimitiveSymbols: Story = {
  args: {
    subcategoryName: "Primitive Symbols",
    categoryPath: "culture-religion/primitive-symbols",
    regularIcons: ["primitive-symbols-animal-1.png","primitive-symbols-animal.png","primitive-symbols-bull.png","primitive-symbols-group.png","primitive-symbols-man-1.png","primitive-symbols-man.png","primitive-symbols-mother.png","primitive-symbols-shaman.png","primitive-symbols-woman-1.png","primitive-symbols-woman.png"],
    lightIcons: [],
  },
};

export const Religion: Story = {
  args: {
    subcategoryName: "Religion",
    categoryPath: "culture-religion/religion",
    regularIcons: ["religion-angel-1.png","religion-angel.png","religion-ankh.png","religion-bible-1.png","religion-buddhism.png","religion-cao-dai-hand-1.png","religion-cao-dai-hands-2.png","religion-cao-dai.png","religion-christianity.png","religion-cross-necklace.png","religion-cross.png","religion-devil-head.png","religion-devil.png","religion-hand-1.png","religion-hand.png","religion-hands.png","religion-hexagram.png","religion-hinduism.png","religion-islam-hand.png","religion-islam-pray.png","religion-islam.png","religion-jainism.png","religion-peace-1.png","religion-peace.png","religion-shield-1.png","religion-shield.png","religion-shinto.png","religion-taoism.png","religion-wicca.png"],
    lightIcons: [],
  },
};
