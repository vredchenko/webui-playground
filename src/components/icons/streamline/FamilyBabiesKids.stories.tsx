import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Family Babies Kids',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Family Babies Kids',
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

export const Babies: Story = {
  args: {
    subcategoryName: "Babies",
    categoryPath: "family-babies-kids/babies",
    regularIcons: ["baby-1.png","baby-boy.png","baby-girl.png","baby-heart.png","baby-hold-hands.png","baby-hold.png","baby-mother.png","baby-newborn.png","baby-stork.png","baby-trolley.png","baby.png"],
    lightIcons: [],
  },
};

export const BabyCare: Story = {
  args: {
    subcategoryName: "Baby Care",
    categoryPath: "family-babies-kids/baby-care",
    regularIcons: ["baby-care-bib.png","baby-care-body.png","baby-care-bottle.png","baby-care-clothes.png","baby-care-cot-mobile-crib.png","baby-care-cot-mobile.png","baby-care-diaper.png","baby-care-pacifier.png","baby-care-trolley-1.png","baby-care-trolley.png"],
    lightIcons: [],
  },
};

export const EducationalToys: Story = {
  args: {
    subcategoryName: "Educational Toys",
    categoryPath: "family-babies-kids/educational-toys",
    regularIcons: ["educative-toys-alphabet.png","educative-toys-counting-1.png","educative-toys-counting-2.png","educative-toys-counting.png","educative-toys-house.png","educative-toys-maths.png","educative-toys-music.png"],
    lightIcons: [],
  },
};

export const Family: Story = {
  args: {
    subcategoryName: "Family",
    categoryPath: "family-babies-kids/family",
    regularIcons: ["family-add-new-member.png","family-child.png","family-father.png","family-grandfather.png","family-grandmother.png","family-heart.png","family-hold.png","family-home-1.png","family-home.png","family-mother.png","family-umbrella-protect.png"],
    lightIcons: [],
  },
};

export const OutdoorActivities: Story = {
  args: {
    subcategoryName: "Outdoor Activities",
    categoryPath: "family-babies-kids/outdoor-activities",
    regularIcons: ["family-outdoors-playhouse-swing.png","family-outdoors-playhouse.png","family-outdoors-slide.png","family-outdoors-swing-tree.png","family-outdoors-swing.png","family-outdoors-teeter.png","family-outdoors-tree-house.png"],
    lightIcons: [],
  },
};

export const Toys: Story = {
  args: {
    subcategoryName: "Toys",
    categoryPath: "family-babies-kids/toys",
    regularIcons: ["toy.png","toys-ball.png","toys-balloon.png","toys-beach-ball.png","toys-building.png","toys-car-push.png","toys-car.png","toys-castle.png","toys-caterpillar.png","toys-clown.png","toys-dinosaur.png","toys-duck.png","toys-fidget-spinner.png","toys-finger.png","toys-furby.png","toys-hand-ghost.png","toys-lego.png","toys-ping-pong.png","toys-propeller-hat.png","toys-racquet.png","toys-rocking-horse-1.png","toys-rocking-horse.png","toys-teddy-bear.png","toys-train.png"],
    lightIcons: [],
  },
};
