import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Landmarks',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Landmarks',
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

export const Bridges: Story = {
  args: {
    subcategoryName: "Bridges",
    categoryPath: "landmarks/bridges",
    regularIcons: ["bridge-1.png","bridge-2.png","bridge-golden-gate.png","bridge.png"],
    lightIcons: [],
  },
};

export const HistoricalBuildings: Story = {
  args: {
    subcategoryName: "Historical Buildings",
    categoryPath: "landmarks/historical-buildings",
    regularIcons: ["historical-building-castle-1.png","historical-building-castle.png","historical-building-pillar.png","historical-building-tower.png"],
    lightIcons: [],
  },
};

export const LandmarksTheAmericas: Story = {
  args: {
    subcategoryName: "Landmarks   The Americas",
    categoryPath: "landmarks/landmarks---the-americas",
    regularIcons: ["landmark-brooklyn-bridge.png","landmark-christ-the reedemer.png","landmark-chrysler.png","landmark-cn-tower.png","landmark-easter-island-moi.png","landmark-empire-state.png","landmark-mesoamerican-pyramid.png","landmark-one-world-trade-center.png","landmark-statue-of-liberty.png","landmark-totem-pole.png"],
    lightIcons: [],
  },
};

export const LandmarksAsiaAustralia: Story = {
  args: {
    subcategoryName: "Landmarks Asia Australia",
    categoryPath: "landmarks/landmarks-asia-australia",
    regularIcons: ["landmark-angkor-wat.png","landmark-bagan.png","landmark-buddha-statue.png","landmark-chinese-pagoda-1.png","landmark-chinese-pagoda-2.png","landmark-chinese-pagoda.png","landmark-chinese-wall.png","landmark-forbidden-city.png","landmark-japan-castle-1.png","landmark-japan-castle.png","landmark-japan-shrine.png","landmark-mountain.png","landmark-pagoda.png","landmark-shrine-of-itsukushima.png","landmark-sydney-opera-house-1.png","landmark-sydney-opera-house.png","landmark-volcano.png","landmark-wat-phra-kaew.png"],
    lightIcons: [],
  },
};

export const LandmarksEurope: Story = {
  args: {
    subcategoryName: "Landmarks Europe",
    categoryPath: "landmarks/landmarks-europe",
    regularIcons: ["landmark-berlin-cathedral.png","landmark-bridge.png","landmark-buckingham-palace.png","landmark-cologne-cathedral.png","landmark-colosseum-1.png","landmark-colosseum.png","landmark-eiffel-tower.png","landmark-gate.png","landmark-london-bridge.png","landmark-london-eye-1.png","landmark-london-eye.png","landmark-london-tower.png","landmark-louvre.png","landmark-merlion-statue.png","landmark-netherlands-windmill-1.png","landmark-netherlands-windmill.png","landmark-notre-dame.png","landmark-pisa-tower.png","landmark-rialto-bridge.png","landmark-saint-basil's-cathderal.png","landmark-stonehenge.png","landmark-tower.png","landmark-triumph-gate.png"],
    lightIcons: [],
  },
};

export const LandmarksMiddleEastIndia: Story = {
  args: {
    subcategoryName: "Landmarks Middle East India",
    categoryPath: "landmarks/landmarks-middle-east-india",
    regularIcons: ["landmark-golden-temple.png","landmark-hagia-sophia.png","landmark-pyramid-sphinx.png","landmark-pyramid.png","landmark-taj-mahal.png"],
    lightIcons: [],
  },
};

export const OfficialBuildings: Story = {
  args: {
    subcategoryName: "Official Buildings",
    categoryPath: "landmarks/official-buildings",
    regularIcons: ["official-building-1.png","official-building-2.png","official-building-3.png","official-building.png"],
    lightIcons: [],
  },
};

export const Parks: Story = {
  args: {
    subcategoryName: "Parks",
    categoryPath: "landmarks/parks",
    regularIcons: ["park-bench-light.png","park-bench.png","park-fonutain-1.png","park-fountain.png"],
    lightIcons: [],
  },
};

export const VariousBuildings: Story = {
  args: {
    subcategoryName: "Various Buildings",
    categoryPath: "landmarks/various-buildings",
    regularIcons: ["anchor.png","church.png","fishing.png","igloo-1.png","igloo.png","lighthouse-bird.png","lighthouse.png","tower.png","water-dam.png"],
    lightIcons: [],
  },
};
