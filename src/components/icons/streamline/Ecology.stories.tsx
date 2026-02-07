import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Ecology',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Ecology',
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

export const CleanCars: Story = {
  args: {
    subcategoryName: "Clean Cars",
    categoryPath: "ecology/clean-cars",
    regularIcons: ["clean-bicycle.png","clean-car-cable-charge-1.png","clean-car-cable-charge.png","clean-car-cable.png","clean-car-charging-cable.png","clean-car-gas.png","clean-car-leaf-1.png","clean-car-leaf.png"],
    lightIcons: [],
  },
};

export const Deforestation: Story = {
  args: {
    subcategoryName: "Deforestation",
    categoryPath: "ecology/deforestation",
    regularIcons: ["deforestation-axe-forbidden.png","deforestation-cut-tree.png","deforestation-saw-forbidden.png"],
    lightIcons: [],
  },
};

export const EcologicalHouses: Story = {
  args: {
    subcategoryName: "Ecological Houses",
    categoryPath: "ecology/ecological-houses",
    regularIcons: ["eco-house-sun.png","eco-house.png"],
    lightIcons: [],
  },
};

export const Ecology: Story = {
  args: {
    subcategoryName: "Ecology",
    categoryPath: "ecology/ecology",
    regularIcons: ["ecology-globe-hand.png","ecology-globe-house.png","ecology-globe-leaf.png","ecology-globe-message-1.png","ecology-globe-message.png","ecology-globe-nature.png","ecology-human-mind-flower.png","ecology-human-mind.png","ecology-leaf-book-open.png","ecology-leaf-book.png","ecology-leaf-bulb-alternate.png","ecology-leaf-bulb.png","ecology-leaf-message.png","ecology-leaf-movie.png","ecology-leaf-settings.png","ecology-leaf-shield.png","ecology-leaf.png","ecology-plant-deal.png","ecology-plant-hand.png"],
    lightIcons: [],
  },
};

export const GlobalWarming: Story = {
  args: {
    subcategoryName: "Global Warming",
    categoryPath: "ecology/global-warming",
    regularIcons: ["global-warming-dead-plant.png","global-warming-globe-fire-1.png","global-warming-globe-fire.png","global-warming-high-temperature.png"],
    lightIcons: [],
  },
};

export const GmoChemicalFood: Story = {
  args: {
    subcategoryName: "Gmo Chemical Food",
    categoryPath: "ecology/gmo-chemical-food",
    regularIcons: ["gmo-food-apple-dna.png","gmo-food-apple.png","gmo-food-chicken-leg.png","gmo-food-corn-dna.png","gmo-food-lab-bag.png","gmo-food-leaf-dna.png","gmo-food-pear.png","gmo-food-steak.png"],
    lightIcons: [],
  },
};

export const NuclearFossilEnergy: Story = {
  args: {
    subcategoryName: "Nuclear Fossil Energy",
    categoryPath: "ecology/nuclear-fossil-energy",
    regularIcons: ["fossil-energy-barrel.png","fossil-energy-battery.png","fossil-energy-gas-can.png","fossil-energy-gas-latern.png","fossil-energy-plant.png","nuclear-energy-bin.png","nuclear-energy-message.png","nuclear-energy-plant.png","nuclear-energy-truck.png"],
    lightIcons: [],
  },
};

export const OrganicNonGmo: Story = {
  args: {
    subcategoryName: "Organic Non Gmo",
    categoryPath: "ecology/organic-non-gmo",
    regularIcons: ["non-gmo-dna.png","non-gmo-fertilizer.png","non-gmo-fire.png","non-gmo-injection.png","non-gmo-lab.png","non-gmo-organic-flask.png","non-gmo-spray.png"],
    lightIcons: [],
  },
};

export const PlantGrowthOrganicFretilizer: Story = {
  args: {
    subcategoryName: "Plant Growth Organic Fretilizer",
    categoryPath: "ecology/plant-growth-organic-fretilizer",
    regularIcons: ["organic-bag-leaf.png","organic-flask-1.png","organic-flask.png","organic-plant-grow-1.png","organic-plant-grow.png","organic-plant-root.png","organic-plant.png","organic-rain-growth.png","organic-seedling-growth.png","organic-sun-growth.png","organic-tree.png","organic-watering-plant.png","organic-worm.png"],
    lightIcons: [],
  },
};

export const Pollution: Story = {
  args: {
    subcategoryName: "Pollution",
    categoryPath: "ecology/pollution",
    regularIcons: ["pollution-barrel.png","pollution-co2-message.png","pollution-co2.png","pollution-drop-skull.png","pollution-faucet-water.png","pollution-fish.png","pollution-o2-message.png","pollution-o2.png","pollution-pm10.png","pollution-rain-skull.png","pollution-skull-1.png","pollution-skull.png","pollution-water.png"],
    lightIcons: [],
  },
};

export const Recycling: Story = {
  args: {
    subcategoryName: "Recycling",
    categoryPath: "ecology/recycling",
    regularIcons: ["recycling-bag-1.png","recycling-bottle.png","recycling-hand-trash.png","recycling-label.png","recycling-paper.png","recycling-refresh.png","recycling-sign.png","recycling-trash-bin-1.png","recycling-trash-bin-2.png"],
    lightIcons: [],
  },
};

export const RenewableEnergy: Story = {
  args: {
    subcategoryName: "Renewable Energy",
    categoryPath: "ecology/renewable-energy",
    regularIcons: ["renewable-energy-accumulator.png","renewable-energy-battery-charge-1.png","renewable-energy-battery-charge.png","renewable-energy-battery-leaf-1.png","renewable-energy-battery-leaf.png","renewable-energy-charging.png","renewable-energy-earth.png","renewable-energy-eco-barrel.png","renewable-energy-paper-turbine.png","renewable-energy-power-socket.png","renewable-energy-solar-electricity.png","renewable-energy-solar-monitor.png","renewable-energy-solar-panel.png","renewable-energy-solar-power.png","renewable-energy-solar-smartphone.png","renewable-energy-water-dam-1.png","renewable-energy-water-dam.png","renewable-energy-water-power.png","renewable-energy-wind-turbine-1.png","renewable-energy-wind-turbine-2.png","renewable-energy-wind-turbine.png"],
    lightIcons: [],
  },
};

export const Seasons: Story = {
  args: {
    subcategoryName: "Seasons",
    categoryPath: "ecology/seasons",
    regularIcons: ["season-autumn.png","season-spring.png","season-summer.png","season-winter.png"],
    lightIcons: [],
  },
};

export const WaterProtection: Story = {
  args: {
    subcategoryName: "Water Protection",
    categoryPath: "ecology/water-protection",
    regularIcons: ["water-protection-drop-1.png","water-protection-drop-hold.png","water-protection-drop.png","water-protection-faucet.png","water-protection-fish.png","water-protection-refresh.png","water-protection-tower.png"],
    lightIcons: [],
  },
};

export const WildlifeProtection: Story = {
  args: {
    subcategoryName: "Wildlife Protection",
    categoryPath: "ecology/wildlife-protection",
    regularIcons: ["wildlife-protection-hold.png","wildlife-protection-shield.png","wildlife-protection-tree-shield-1.png","wildlife-protection-tree-shield.png"],
    lightIcons: [],
  },
};
