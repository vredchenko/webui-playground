import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Science',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Science',
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

export const Astronomy: Story = {
  args: {
    subcategoryName: "Astronomy",
    categoryPath: "science/astronomy",
    regularIcons: ["astronomy-comet.png","astronomy-constellation.png","astronomy-earth-rotation.png","astronomy-eclipse.png","astronomy-moon.png","astronomy-planet-ring-star.png","astronomy-planet-ring.png","astronomy-planet.png","astronomy-solar-system.png","astronomy-sun-eclipse.png","astronomy-telescope-stars.png","astronomy-telescope.png"],
    lightIcons: [],
  },
};

export const LabsExperiments: Story = {
  args: {
    subcategoryName: "Labs Experiments",
    categoryPath: "science/labs-experiments",
    regularIcons: ["lab-bottle-experiment.png","lab-flame-bottle.png","lab-flame-experiment.png","lab-flask-experiment.png","lab-protection-glasses.png","lab-tube-bottle.png","lab-tube-experiment.png","lab-tube.png","lab-tubes.png","lab-whisk-cup.png"],
    lightIcons: [],
  },
};

export const Science: Story = {
  args: {
    subcategoryName: "Science",
    categoryPath: "science/science",
    regularIcons: ["science-apple-gravity.png","science-apple-newton.png","science-atom-positive-negative.png","science-axis.png","science-bacteria.png","science-black-hole.png","science-brain.png","science-cells.png","science-dna.png","science-earth.png","science-elecricity-power.png","science-electricity.png","science-graph.png","science-magnet.png","science-molecule-1.png","science-molecule-strucutre.png","science-molecule.png","science-molecules.png","science-momentum.png","science-neurons.png","science-perspective.png","science-physics-law-1.png","science-physics-law.png","science-projection.png"],
    lightIcons: [],
  },
};

export const ScienceFiction: Story = {
  args: {
    subcategoryName: "Science Fiction",
    categoryPath: "science/science-fiction",
    regularIcons: ["science-fiction-alien-1.png","science-fiction-alien.png","science-fiction-robot.png","science-fiction-ship.png","science-fiction-ufo.png","science-fiction-weapon.png"],
    lightIcons: [],
  },
};

export const SpaceExploration: Story = {
  args: {
    subcategoryName: "Space Exploration",
    categoryPath: "science/space-exploration",
    regularIcons: ["space-antenna-satelite.png","space-astronaut-alternate.png","space-astronaut.png","space-base.png","space-earth.png","space-explore.png","space-moon-flag.png","space-rocket-1.png","space-rocket-2.png","space-rocket-base.png","space-rocket-earth.png","space-rocket-flying.png","space-rocket-launch.png","space-rocket.png","space-science.png","space-ship-1.png","space-ship.png","space-truck-satelite.png"],
    lightIcons: [],
  },
};
