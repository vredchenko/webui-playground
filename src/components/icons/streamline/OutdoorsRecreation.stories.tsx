import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Outdoors Recreation',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Outdoors Recreation',
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

export const Beach: Story = {
  args: {
    subcategoryName: "Beach",
    categoryPath: "outdoors-recreation/beach",
    regularIcons: ["beach-palm-sunbed.png","beach-palm-water-1.png","beach-palm-water.png","beach-palm.png","beach-parasol-water-1.png","beach-parasol-water.png","beach-person-water-parasol.png","beach-sun-birds.png","beach-sunbed.png","beach-swim.png"],
    lightIcons: [],
  },
};

export const Camping: Story = {
  args: {
    subcategoryName: "Camping",
    categoryPath: "outdoors-recreation/camping",
    regularIcons: ["camping-rv.png","camping-shelter.png","camping-sleeping-bag.png","camping-tent-1.png","camping-tent-2.png","camping-tent-3.png","camping-tent-forest.png","camping-tent-map.png","camping-tent-person.png","camping-tent-sleep.png","camping-tent-small.png","camping-tent.png"],
    lightIcons: [],
  },
};

export const Canoe: Story = {
  args: {
    subcategoryName: "Canoe",
    categoryPath: "outdoors-recreation/canoe",
    regularIcons: ["canoe-1.png","canoe-2.png","canoe-3.png","canoe-paddles-1.png","canoe-paddles.png","canoe-person-1.png","canoe-person.png","canoe-single.png","canoe.png"],
    lightIcons: [],
  },
};

export const Diving: Story = {
  args: {
    subcategoryName: "Diving",
    categoryPath: "outdoors-recreation/diving",
    regularIcons: ["diving-boat.png","diving-diver.png","diving-fins.png","diving-gun.png","diving-mask-fish.png","diving-mask.png","diving-oxygen-tank.png","diving-oxygen.png"],
    lightIcons: [],
  },
};

export const Fishing: Story = {
  args: {
    subcategoryName: "Fishing",
    categoryPath: "outdoors-recreation/fishing",
    regularIcons: ["fishing-bait-fish.png","fishing-catch.png","fishing-fail.png","fishing-fish.png","fishing-hook-fish-1.png","fishing-hook-fish.png","fishing-line.png","fishing-lure.png"],
    lightIcons: [],
  },
};

export const LandmarksViewpoint: Story = {
  args: {
    subcategoryName: "Landmarks Viewpoint",
    categoryPath: "outdoors-recreation/landmarks-viewpoint",
    regularIcons: ["landmarks-monument.png","landmarks-statue-flag.png","landmarks-stone.png","landmarks-telescope-person.png","landmarks-view-point.png"],
    lightIcons: [],
  },
};

export const NauticalSports: Story = {
  args: {
    subcategoryName: "Nautical Sports",
    categoryPath: "outdoors-recreation/nautical-sports",
    regularIcons: ["nautic-sports-sailing-person.png","nautic-sports-sailing.png","nautic-sports-scooter-1.png","nautic-sports-scooter.png","nautic-sports-surfing-water.png","nautic-sports-surfing.png","nautic-sports-water-skiing.png"],
    lightIcons: [],
  },
};

export const OutdoorParks: Story = {
  args: {
    subcategoryName: "Outdoor Parks",
    categoryPath: "outdoors-recreation/outdoor-parks",
    regularIcons: ["outdoors-backpack-1.png","outdoors-backpack.png","outdoors-barbeque.png","outdoors-barn-bench.png","outdoors-bench-sit.png","outdoors-bird-house-1.png","outdoors-bird-house.png","outdoors-bird.png","outdoors-bubble-ball.png","outdoors-camp-fire-guitar.png","outdoors-camp-fire-make.png","outdoors-camp-fire-marshmallows.png","outdoors-camp-fire-roasting.png","outdoors-camp-fire.png","outdoors-camp-flame.png","outdoors-dog-house.png","outdoors-fire-camp.png","outdoors-flame-lantern.png","outdoors-flashlight-1.png","outdoors-flashlight-2.png","outdoors-flashlight.png","outdoors-horse.png","outdoors-kite-flying-cloud.png","outdoors-kite-flying.png","outdoors-machete.png","outdoors-mining.png","outdoors-nps.png","outdoors-pig-apple.png","outdoors-rope-1.png","outdoors-rope.png","outdoors-shelter-home.png","outdoors-shelter.png","outdoors-swiss-knife.png","outdoors-water-flask.png","outdoors-woodchopping-1.png","outdoors-woodchopping.png"],
    lightIcons: [],
  },
};

export const Sailing: Story = {
  args: {
    subcategoryName: "Sailing",
    categoryPath: "outdoors-recreation/sailing",
    regularIcons: ["sailing-archor.png","sailing-boat-1.png","sailing-boat-2.png","sailing-boat-3.png","sailing-boat-person.png","sailing-boat-water-1.png","sailing-boat-water.png","sailing-boat.png","sailing-finish-line.png"],
    lightIcons: [],
  },
};

export const Trekking: Story = {
  args: {
    subcategoryName: "Trekking",
    categoryPath: "outdoors-recreation/trekking",
    regularIcons: ["trekking-goal.png","trekking-map.png","trekking-mountain.png","trekking-person.png","trekking-shelter.png","trekking-stick.png"],
    lightIcons: [],
  },
};
