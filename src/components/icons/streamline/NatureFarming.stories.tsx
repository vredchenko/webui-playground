import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Nature Farming',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Nature Farming',
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

export const AgriculturalMachinary: Story = {
  args: {
    subcategoryName: "Agricultural Machinary",
    categoryPath: "nature-farming/agricultural-machinary",
    regularIcons: ["agriculture-machine-disk-plow.png","agriculture-machine-harraw.png","agriculture-machine-harvester-1.png","agriculture-machine-harvester-storage.png","agriculture-machine-harvester.png","agriculture-machine-plow-1.png","agriculture-machine-plow-2.png","agriculture-machine-plow-3.png","agriculture-machine-plow-4.png","agriculture-machine-plow.png","agriculture-machine-plowing.png","agriculture-machine-rottary-tiller.png","agriculture-machine-seeder-1.png","agriculture-machine-seeder-2.png","agriculture-machine-seeder-3.png","agriculture-machine-seeder.png","agriculture-machine-tractor-1.png","agriculture-machine-tractor-2.png","agriculture-machine-tractor.png","agriculture-machine.png"],
    lightIcons: [],
  },
};

export const Farming: Story = {
  args: {
    subcategoryName: "Farming",
    categoryPath: "nature-farming/farming",
    regularIcons: ["farming-barn-1.png","farming-barn-2.png","farming-barn-silo.png","farming-barn-sun.png","farming-barn.png","farming-farmer-crops.png","farming-farmer-work.png","farming-farmer.png","farming-field-sun.png","farming-grow-crops.png","farming-hay.png","farming-milk-cow.png","farming-scarecrow.png","farming-sell-vegetable.png","farming-sickle.png","farming-wheat.png","farming-wind-cock.png"],
    lightIcons: [],
  },
};

export const Flowers: Story = {
  args: {
    subcategoryName: "Flowers",
    categoryPath: "nature-farming/flowers",
    regularIcons: ["flower-1.png","flower-2.png","flower-3.png","flower-pot.png","flower-rose.png","flower-roses.png","flower.png"],
    lightIcons: [],
  },
};

export const Gardening: Story = {
  args: {
    subcategoryName: "Gardening",
    categoryPath: "nature-farming/gardening",
    regularIcons: ["gardening-boots.png","gardening-cultivator.png","gardening-digging-fork.png","gardening-glove.png","gardening-hand-sprinkler.png","gardening-house-1.png","gardening-house.png","gardening-lawn-mower-1.png","gardening-lawn-mower.png","gardening-pot.png","gardening-pots.png","gardening-scissors-1.png","gardening-scissors.png","gardening-seed-bag.png","gardening-seed-hand.png","gardening-spirinkler.png","gardening-sprinkle-bottle-1.png","gardening-sprinkle-bottle.png","gardening-tools-1.png","gardening-tools.png","gardening-watering-can.png","gardening-watering-pipe.png"],
    lightIcons: [],
  },
};

export const Outdoors: Story = {
  args: {
    subcategoryName: "Outdoors",
    categoryPath: "nature-farming/outdoors",
    regularIcons: ["outdoors-bird-house-1.png","outdoors-bird-house.png","outdoors-landscape-meadow.png","outdoors-landscape.png","outdoors-sun-plants.png","outdoors-tree-gate.png","outdoors-tree-road.png","outdoors-tree-valley.png","outdoors-watch-house.png","outdoors-water-birds.png","outdoors-water-sun.png"],
    lightIcons: [],
  },
};

export const Plants: Story = {
  args: {
    subcategoryName: "Plants",
    categoryPath: "nature-farming/plants",
    regularIcons: ["plant-1.png","plant-2.png","plant-bamboo.png","plant-bonsai-1.png","plant-bonsai.png","plant-cacti.png","plant-cactus.png","plant-flower.png","plant-flowers.png","plant-pot-1.png","plant-pot-2.png","plant-pot-3.png","plant-pot.png","plant-sad.png","plant-smile.png","plant.png"],
    lightIcons: [],
  },
};

export const Trees: Story = {
  args: {
    subcategoryName: "Trees",
    categoryPath: "nature-farming/trees",
    regularIcons: ["tree-1.png","tree-2.png","tree-christmas.png","tree-cloud.png","tree-log.png","tree-two.png","tree.png","trees-camp-fire.png","trees-chop.png","trees-hive.png","trees-log.png","trees.png"],
    lightIcons: [],
  },
};
