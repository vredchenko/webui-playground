import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Furniture Decoration',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Furniture Decoration',
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

export const Armchairs: Story = {
  args: {
    subcategoryName: "Armchairs",
    categoryPath: "furniture-decoration/armchairs",
    regularIcons: ["armchair-1.png","armchair-2.png","armchair-3.png","armchair-hanging.png","armchair-modern-1.png","armchair-modern-2.png","armchair-modern.png","armchair.png"],
    lightIcons: [],
  },
};

export const AsianInteriors: Story = {
  args: {
    subcategoryName: "Asian Interiors",
    categoryPath: "furniture-decoration/asian-interiors",
    regularIcons: ["asian-interior-boiler.png","asian-interior-bonsai-tree-1.png","asian-interior-bonsai-tree.png","asian-interior-door.png","asian-interior-eating-table.png","asian-interior-entrance.png","asian-interior-furniture.png","asian-interior-lamp.png","asian-interior-painting.png","asian-interior-stove.png","asian-interior-windows.png"],
    lightIcons: [],
  },
};

export const Beds: Story = {
  args: {
    subcategoryName: "Beds",
    categoryPath: "furniture-decoration/beds",
    regularIcons: ["bed-bunk.png","bed-double.png","bed-single.png","bed-window.png"],
    lightIcons: [],
  },
};

export const ChairsStools: Story = {
  args: {
    subcategoryName: "Chairs Stools",
    categoryPath: "furniture-decoration/chairs-stools",
    regularIcons: ["chair-1.png","chair-2.png","chair-3.png","chair-4.png","chair-5.png","chair-bar-1.png","chair-bar.png","chair-director.png","chair-modern.png","chair-retro.png","chair.png"],
    lightIcons: [],
  },
};

export const Consoles: Story = {
  args: {
    subcategoryName: "Consoles",
    categoryPath: "furniture-decoration/consoles",
    regularIcons: ["console-drawers.png","console-lamp.png","console-table.png","console.png"],
    lightIcons: [],
  },
};

export const Decoration: Story = {
  args: {
    subcategoryName: "Decoration",
    categoryPath: "furniture-decoration/decoration",
    regularIcons: ["decoration-bottle-1.png","decoration-bottle.png","decoration-cabin.png","decoration-cherry-blossom-vase.png","decoration-clock-retro.png","decoration-crystals.png","decoration-flower-pot.png","decoration-flower-vase.png","decoration-flowers-table.png","decoration-flowers.png","decoration-hanging-flowers.png"],
    lightIcons: [],
  },
};

export const DressersDrawers: Story = {
  args: {
    subcategoryName: "Dressers Drawers",
    categoryPath: "furniture-decoration/dressers-drawers",
    regularIcons: ["dresser-double-door-1.png","dresser-double-door.png","dresser-drawers-1.png","dresser-drawers-2.png","dresser-drawers-3.png","dresser-drawers-4.png","dresser-drawers-5.png","dresser-drawers-6.png","dresser-drawers.png","dresser-wardrobe-drawers.png","dresser-wardrobe-mirror.png","dresser-wardrobe.png","dresser.png"],
    lightIcons: [],
  },
};

export const Dressing: Story = {
  args: {
    subcategoryName: "Dressing",
    categoryPath: "furniture-decoration/dressing",
    regularIcons: ["dressing-hanger-1.png","dressing-hanger.png","dressing-hanging-rack-1.png","dressing-hanging-rack-2.png","dressing-hanging-rack.png","dressing-mirror-1.png","dressing-mirror.png"],
    lightIcons: [],
  },
};

export const Fireplaces: Story = {
  args: {
    subcategoryName: "Fireplaces",
    categoryPath: "furniture-decoration/fireplaces",
    regularIcons: ["fireplace-1.png","fireplace.png"],
    lightIcons: [],
  },
};

export const Kitchen: Story = {
  args: {
    subcategoryName: "Kitchen",
    categoryPath: "furniture-decoration/kitchen",
    regularIcons: ["kitchen-counter-1.png","kitchen-counter.png","kitchen-knife-set.png","kitchen-shelf.png","kitchen-storage.png","kitchen-table.png","kitchen-window.png"],
    lightIcons: [],
  },
};

export const NightStands: Story = {
  args: {
    subcategoryName: "Night Stands",
    categoryPath: "furniture-decoration/night-stands",
    regularIcons: ["night-stand-book.png","night-stand-lamp.png","night-stand-retro.png","night-stand.png"],
    lightIcons: [],
  },
};

export const Shelf: Story = {
  args: {
    subcategoryName: "Shelf",
    categoryPath: "furniture-decoration/shelf",
    regularIcons: ["shelf-books-1.png","shelf-books-round.png","shelf-books.png","shelf-drawers.png","shelf-tv-1.png","shelf-tv.png"],
    lightIcons: [],
  },
};

export const SofasBenches: Story = {
  args: {
    subcategoryName: "Sofas Benches",
    categoryPath: "furniture-decoration/sofas-benches",
    regularIcons: ["bench.png","sofa-couch.png","sofa-double-modern.png","sofa-double.png","sofa.png"],
    lightIcons: [],
  },
};

export const Stairs: Story = {
  args: {
    subcategoryName: "Stairs",
    categoryPath: "furniture-decoration/stairs",
    regularIcons: ["stairs-circular.png","stairs.png"],
    lightIcons: [],
  },
};

export const SteampunkDecoration: Story = {
  args: {
    subcategoryName: "Steampunk Decoration",
    categoryPath: "furniture-decoration/steampunk-decoration",
    regularIcons: ["steampunk-decoration-dia-de-los-muertos.png","steampunk-decoration-lamp.png","steampunk-decoration.png"],
    lightIcons: [],
  },
};

export const Tables: Story = {
  args: {
    subcategoryName: "Tables",
    categoryPath: "furniture-decoration/tables",
    regularIcons: ["table-candelabra.png","table-restaurant-beach-1.png","table-restaurant-beach.png","table-restaurant.png","table-retro.png"],
    lightIcons: [],
  },
};
