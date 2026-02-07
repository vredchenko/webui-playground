import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Tools Construction',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Tools Construction',
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

export const ClampsJacks: Story = {
  args: {
    subcategoryName: "Clamps Jacks",
    categoryPath: "tools-construction/clamps-jacks",
    regularIcons: ["clamp-expand-1.png","clamp-machine.png","clamp-press-1.png","clamp-press.png","clamps-expand.png","jackclamp.png"],
    lightIcons: [],
  },
};

export const Equipment: Story = {
  args: {
    subcategoryName: "Equipment",
    categoryPath: "tools-construction/equipment",
    regularIcons: ["equipment-cement-cart.png","equipment-cement.png","equipment-hammer-stone.png","equipment-ladder.png","equipment-machine-track.png","equipment-pressure-measure.png","equipment-safety-mask.png"],
    lightIcons: [],
  },
};

export const Hardware: Story = {
  args: {
    subcategoryName: "Hardware",
    categoryPath: "tools-construction/hardware",
    regularIcons: ["hardware-drill-carbide.png","hardware-hammer-nail-hit.png","hardware-hammer-nail.png","hardware-nail-round-head.png","hardware-nail.png","hardware-nails.png","hardware-nut-round.png","hardware-nut.png","hardware-nuts-1.png","hardware-nuts-round.png","hardware-nuts.png","hardware-wench-screw.png"],
    lightIcons: [],
  },
};

export const Materials: Story = {
  args: {
    subcategoryName: "Materials",
    categoryPath: "tools-construction/materials",
    regularIcons: ["material-brick.png","material-fabric.png","material-isolation.png","material-stone.png","material-tile-roof-1.png","material-tile-roof.png","material-tile.png"],
    lightIcons: [],
  },
};

export const MeasuresLevels: Story = {
  args: {
    subcategoryName: "Measures Levels",
    categoryPath: "tools-construction/measures-levels",
    regularIcons: ["measure-caliber-1.png","measure-caliber.png","measure-construction.png","measure-ruler-corner.png","measure-ruler-divider.png","measure-ruler.png"],
    lightIcons: [],
  },
};

export const PowerTools: Story = {
  args: {
    subcategoryName: "Power Tools",
    categoryPath: "tools-construction/power-tools",
    regularIcons: ["power-tools-circular-saw.png","power-tools-drill.png","power-tools-electric-saw-1.png","power-tools-electric-saw.png","power-tools-wood-cutter-1.png","power-tools-wood-cutter.png"],
    lightIcons: [],
  },
};

export const Safety: Story = {
  args: {
    subcategoryName: "Safety",
    categoryPath: "tools-construction/safety",
    regularIcons: ["safety-helmet-1.png","safety-helmet-mine-1.png","safety-helmet-mine.png","safety-helmet.png","safety-helmlet-mine-light.png"],
    lightIcons: [],
  },
};

export const Tools: Story = {
  args: {
    subcategoryName: "Tools",
    categoryPath: "tools-construction/tools",
    regularIcons: ["tools-axe-hold.png","tools-axe.png","tools-box-1.png","tools-box.png","tools-crescent-double.png","tools-crescent-wench.png","tools-flattener-square.png","tools-flattener-triangle-1.png","tools-flattener-triangle.png","tools-gasket-1.png","tools-gasket.png","tools-glue-gun.png","tools-hammer-1.png","tools-hammer-2.png","tools-hammer-3.png","tools-hammer-hold.png","tools-hammer.png","tools-keys.png","tools-nail-gun.png","tools-palette-spatula.png","tools-palette-trowel.png","tools-pickaxe.png","tools-pliers.png","tools-pry-bar.png","tools-saw.png","tools-screwdriver-1.png","tools-shovel.png","tools-slip-joint-pliers.png","tools-vice-grip.png","tools-wench-1.png","tools-wench-2.png","tools-wench-hold.png","tools-wench-screwdriver.png","tools-wench.png","tools-wheel-unscrew.png","tools-wood-saw.png"],
    lightIcons: [],
  },
};
