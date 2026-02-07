import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Building Construction',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Building Construction',
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

export const ArchitecturalFeatures: Story = {
  args: {
    subcategoryName: "Architectural Features",
    categoryPath: "building-construction/architectural-features",
    regularIcons: ["architecture-door-retro.png","architecture-door.png","architecture-fence-1.png","architecture-fence-2.png","architecture-fence.png","architecture-well.png","architecture-window-1.png","architecture-window.png"],
    lightIcons: [],
  },
};

export const Buildings: Story = {
  args: {
    subcategoryName: "Buildings",
    categoryPath: "building-construction/buildings",
    regularIcons: ["building-1.png","building-2.png","building-cloudy.png","building-daylight.png","building-flag.png","building-house.png","building-modern-1.png","building-modern-2.png","building-modern.png","building-nature.png","building-night.png","building.png","buildings-1.png","buildings-2.png","buildings-modern.png","buildings.png"],
    lightIcons: [],
  },
};

export const ConceptionProjects: Story = {
  args: {
    subcategoryName: "Conception Projects",
    categoryPath: "building-construction/conception-projects",
    regularIcons: ["project-blueprint-buildings.png","project-blueprint-create.png","project-blueprint-home.png","project-blueprint-idea.png","project-book-building.png","project-book-house.png","project-building-shopping.png","project-home-shopping.png","project-notes-buildings.png","project-notes-house.png","project-plan-pen.png"],
    lightIcons: [],
  },
};

export const Construction: Story = {
  args: {
    subcategoryName: "Construction",
    categoryPath: "building-construction/construction",
    regularIcons: ["construction-brick.png","construction-building.png","construction-cone.png","construction-drill.png","construction-fence.png","construction-house-1.png","construction-house.png","construction-mortar-machine.png","construction-paint.png","construction-paper-home.png","construction-pipe-1.png","construction-pipe.png","construction-shovel.png","construction-sign.png"],
    lightIcons: [],
  },
};

export const HeavyEquipment: Story = {
  args: {
    subcategoryName: "Heavy Equipment",
    categoryPath: "building-construction/heavy-equipment",
    regularIcons: ["heavy-equipment-cleaner-1.png","heavy-equipment-cleaner.png","heavy-equipment-excavator-1.png","heavy-equipment-flattener.png","heavy-equipment-hook.png","heavy-equipment-lift .png","heavy-equipment-lift-2.png","heavy-equipment-lift-hook-box.png","heavy-equipment-lift-hook.png","heavy-equipment-mortar-truck-1.png","heavy-equipment-mortar-truck-2.png","heavy-equipment-mortar-truck.png","heavy-equipment-tractor.png","heavy-equipment-truck.png","heavy-equipment-wood.png","heavy-equipment-wrecking-ball.png"],
    lightIcons: [],
  },
};

export const Houses: Story = {
  args: {
    subcategoryName: "Houses",
    categoryPath: "building-construction/houses",
    regularIcons: ["house-1.png","house-2.png","house-3.png","house-apartment.png","house-fire-1.png","house-fire.png","house-garage.png","house-heart.png","house-hurricane.png","house-modern.png","house-nature.png","house-retro.png","house-user.png","house.png"],
    lightIcons: [],
  },
};

export const ModernArchitecture: Story = {
  args: {
    subcategoryName: "Modern Architecture",
    categoryPath: "building-construction/modern-architecture",
    regularIcons: ["modern-architecture-1.png","modern-architecture-building-1.png","modern-architecture-building-2.png","modern-architecture-building.png","modern-architecture-buildings.png","modern-architecture-cloud.png","modern-architecture-high-cloud-building.png","modern-architecture-spiral.png","modern-architecture-top.png","modern-architecture-twin-building.png","modern-architecture.png"],
    lightIcons: [],
  },
};

export const Utilities: Story = {
  args: {
    subcategoryName: "Utilities",
    categoryPath: "building-construction/utilities",
    regularIcons: ["electricity-pillar.png","electricity-tower-1.png","electricity-tower.png","street-light.png","traffic-light.png"],
    lightIcons: [],
  },
};
