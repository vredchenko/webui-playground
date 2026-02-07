import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Clothes Footwear Accessories',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Clothes Footwear Accessories',
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

export const Accessories: Story = {
  args: {
    subcategoryName: "Accessories",
    categoryPath: "clothes-footwear-accessories/accessories",
    regularIcons: ["accessories-cane.png","accessories-earrings-oriental.png","accessories-earrings.png","accessories-hand-fan.png","accessories-necklace-1.png","accessories-necklace-pendant.png","accessories-necklace.png","accessories-ribbon-tie.png","accessories-tie.png","accessories-umbrella-1.png","accessories-umbrella.png","accessories-watch.png","accessories-winter-gloves.png"],
    lightIcons: [],
  },
};

export const Bags: Story = {
  args: {
    subcategoryName: "Bags",
    categoryPath: "clothes-footwear-accessories/bags",
    regularIcons: ["bag-carry.png","bag-elegant.png","bag-handle.png","bag-purse.png","bag-school.png"],
    lightIcons: [],
  },
};

export const Beanies: Story = {
  args: {
    subcategoryName: "Beanies",
    categoryPath: "clothes-footwear-accessories/beanies",
    regularIcons: ["beanie-winter-1.png","beanie-winter-2.png","beanie-winter-3.png","beanie-winter.png","beanie.png"],
    lightIcons: [],
  },
};

export const Caps: Story = {
  args: {
    subcategoryName: "Caps",
    categoryPath: "clothes-footwear-accessories/caps",
    regularIcons: ["cap-1.png","cap-2.png","cap-3.png","cap-4.png","cap-sunglasses.png","cap.png"],
    lightIcons: [],
  },
};

export const ClothesDesign: Story = {
  args: {
    subcategoryName: "Clothes Design",
    categoryPath: "clothes-footwear-accessories/clothes-design",
    regularIcons: ["clothes-design-animal-skin.png","clothes-design-button.png","clothes-design-needle-yarn.png","clothes-design-needle.png","clothes-design-pin-cushion.png","clothes-design-pin.png","clothes-design-sewing-machine.png","clothes-design-tape-measure.png","clothes-design-thread-boots.png","clothes-design-thread.png"],
    lightIcons: [],
  },
};

export const DressSkirts: Story = {
  args: {
    subcategoryName: "Dress Skirts",
    categoryPath: "clothes-footwear-accessories/dress-skirts",
    regularIcons: ["dress-1.png","dress-2.png","dress.png","skirt-1.png","skirt.png"],
    lightIcons: [],
  },
};

export const Footwear: Story = {
  args: {
    subcategoryName: "Footwear",
    categoryPath: "clothes-footwear-accessories/footwear",
    regularIcons: ["footwear-boots-cowboy.png","footwear-boots-female.png","footwear-boots.png","footwear-flip-flops.png","footwear-heels-1.png","footwear-heels-ankle.png","footwear-heels.png","footwear-open-heels.png","footwear-slippers.png","footwear-sneakers-1.png","footwear-sneakers.png","footwear-sock.png","footwear-winter-boots.png"],
    lightIcons: [],
  },
};

export const Glasses: Story = {
  args: {
    subcategoryName: "Glasses",
    categoryPath: "clothes-footwear-accessories/glasses",
    regularIcons: ["glasses-monocle-moustache.png","glasses-monocle.png","glasses-retro-1.png","glasses-retro.png","glasses-ski-1.png","glasses-ski-2.png","glasses-ski.png","glasses-sun-1.png","glasses-sun-circle.png","glasses-sun.png","glasses.png"],
    lightIcons: [],
  },
};

export const Hats: Story = {
  args: {
    subcategoryName: "Hats",
    categoryPath: "clothes-footwear-accessories/hats",
    regularIcons: ["hat-1.png","hat-architect.png","hat-cowboy-1.png","hat-cowboy.png","hat-feather.png","hat-gentleman.png","hat-lady-1.png","hat-lady-cowboy.png","hat-lady.png","hat-retro-1.png","hat-retro.png","hat-sombrero.png","hat-winter.png","hat.png"],
    lightIcons: [],
  },
};

export const ShirtsSweaterTop: Story = {
  args: {
    subcategoryName: "Shirts Sweater Top",
    categoryPath: "clothes-footwear-accessories/shirts-sweater-top",
    regularIcons: ["blazer-1.png","blazer.png","hoodie.png","shirt-male.png","shirt-plain.png","shirt.png","sweater-1.png","sweater.png","t-shirt.png","tank-top-female-1.png","tank-top-female-2.png","tank-top-female.png","tank-top-pattern.png","tank-top.png","tux.png","vest-1.png","vest-female.png","vest-male.png","vest.png"],
    lightIcons: [],
  },
};

export const TrousersShirts: Story = {
  args: {
    subcategoryName: "Trousers Shirts",
    categoryPath: "clothes-footwear-accessories/trousers-shirts",
    regularIcons: ["shorts-1.png","shorts-2.png","shorts.png","trousers-calves-1.png","trousers-calves-2.png","trousers-calves.png","trousers-jeans.png"],
    lightIcons: [],
  },
};

export const Underwear: Story = {
  args: {
    subcategoryName: "Underwear",
    categoryPath: "clothes-footwear-accessories/underwear",
    regularIcons: ["underwear-bikini-bottom.png","underwear-bikini.png","underwear-boxers.png","underwear-bra-1.png","underwear-bra-lace.png","underwear-bra.png","underwear-briefs-male .png","underwear-corset-1.png","underwear-corset.png","underwear-female-set.png","underwear-shorts-male-1.png","underwear-shorts-male.png"],
    lightIcons: [],
  },
};
