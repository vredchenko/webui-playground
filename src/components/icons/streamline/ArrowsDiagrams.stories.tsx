import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Arrows Diagrams',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Arrows Diagrams',
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

export const Arrows: Story = {
  args: {
    subcategoryName: "Arrows",
    categoryPath: "arrows-diagrams/arrows",
    regularIcons: ["arrow-button-circle-down-1.png","arrow-button-circle-down.png","arrow-button-circle-left-1.png","arrow-button-circle-left.png","arrow-button-circle-right-1.png","arrow-button-circle-right.png","arrow-button-circle-up-1.png","arrow-button-circle-up.png","arrow-button-down-1.png","arrow-button-down-2.png","arrow-button-down-3.png","arrow-button-down.png","arrow-button-left-1.png","arrow-button-left-2.png","arrow-button-left-3.png","arrow-button-left.png","arrow-button-right-1.png","arrow-button-right-2.png","arrow-button-right-3.png","arrow-button-right.png","arrow-button-up-1.png","arrow-button-up-2.png","arrow-button-up-3.png","arrow-button-up.png","arrow-circle-down.png","arrow-circle-left.png","arrow-circle-right.png","arrow-circle-up.png","arrow-corner-left.png","arrow-corner-right.png","arrow-dot-corner-down-left.png","arrow-dot-corner-down-right.png","arrow-dot-corner-left-1.png","arrow-dot-corner-right-1.png","arrow-dot-down-1.png","arrow-dot-down.png","arrow-dot-left-1.png","arrow-dot-left.png","arrow-dot-right-1.png","arrow-dot-right.png","arrow-dot-up-1.png","arrow-dot-up.png","arrow-double-down-1.png","arrow-double-down.png","arrow-double-left-1.png","arrow-double-left.png","arrow-double-right-1.png","arrow-double-right.png","arrow-double-up-1.png","arrow-double-up.png","arrow-down-1.png","arrow-down-2.png","arrow-down.png","arrow-left-1.png","arrow-left-2.png","arrow-left-x.png","arrow-left.png","arrow-rectangle-down-1.png","arrow-rectangle-down-2.png","arrow-rectangle-down.png","arrow-rectangle-left-1.png","arrow-rectangle-left-2.png","arrow-rectangle-left.png","arrow-rectangle-right-1.png","arrow-rectangle-right-2.png","arrow-rectangle-right.png","arrow-rectangle-up-1.png","arrow-rectangle-up-2.png","arrow-rectangle-up.png","arrow-right-1.png","arrow-right-2.png","arrow-right-x.png","arrow-right.png","arrow-thick-circle-bottom-left-corner-1.png","arrow-thick-circle-bottom-left-corner-2.png","arrow-thick-circle-bottom-left-corner.png","arrow-thick-circle-bottom-right-corner-1.png","arrow-thick-circle-bottom-right-corner-2.png","arrow-thick-circle-bottom-right-corner.png","arrow-thick-circle-down-1.png","arrow-thick-circle-down-2.png","arrow-thick-circle-down.png","arrow-thick-circle-left-1.png","arrow-thick-circle-left-2.png","arrow-thick-circle-left.png","arrow-thick-circle-right-1.png","arrow-thick-circle-right-2.png","arrow-thick-circle-right.png","arrow-thick-circle-up-1.png","arrow-thick-circle-up-2.png","arrow-thick-circle-up.png","arrow-thick-dot-corner-down-left.png","arrow-thick-dot-corner-down-right.png","arrow-thick-dot-down.png","arrow-thick-dot-left.png","arrow-thick-dot-right.png","arrow-thick-dot-up.png","arrow-thick-down-1.png","arrow-thick-down-2.png","arrow-thick-down-3.png","arrow-thick-down-4.png","arrow-thick-down.png","arrow-thick-left bottom-corner-1.png","arrow-thick-left-1.png","arrow-thick-left-2.png","arrow-thick-left-3.png","arrow-thick-left-4.png","arrow-thick-left-bottom-corner-2.png","arrow-thick-left-bottom-corner-3.png","arrow-thick-left-bottom-corner-4.png","arrow-thick-left-bottom-corner.png","arrow-thick-left.png","arrow-thick-right bottom-corner-1.png","arrow-thick-right-1.png","arrow-thick-right-2.png","arrow-thick-right-3.png","arrow-thick-right-4.png","arrow-thick-right-bottom-corner-2.png","arrow-thick-right-bottom-corner-3.png","arrow-thick-right-bottom-corner-4.png","arrow-thick-right-bottom-corner.png","arrow-thick-right.png","arrow-thick-up-1.png","arrow-thick-up-2.png","arrow-thick-up-3.png","arrow-thick-up-4.png","arrow-thick-up.png","arrow-up-1.png","arrow-up-2.png","arrow-up.png"],
    lightIcons: [],
  },
};

export const Diagrams: Story = {
  args: {
    subcategoryName: "Diagrams",
    categoryPath: "arrows-diagrams/diagrams",
    regularIcons: ["diagram-all-direction-expand.png","diagram-arrow-bend-down.png","diagram-arrow-bow.png","diagram-arrow-corner-point-left.png","diagram-arrow-corner-point-right.png","diagram-arrow-dash-corner-left-up.png","diagram-arrow-dash-corner-point-left.png","diagram-arrow-dash-corner-point-right.png","diagram-arrow-dash-corner-right-down.png","diagram-arrow-dash-down-1.png","diagram-arrow-dash-down.png","diagram-arrow-dash-left.png","diagram-arrow-dash-right.png","diagram-arrow-dash-up-1.png","diagram-arrow-dash-up.png","diagram-arrow-diagonal-1.png","diagram-arrow-diagonal.png","diagram-arrow-down-1.png","diagram-arrow-down-right-corner.png","diagram-arrow-down.png","diagram-arrow-left.png","diagram-arrow-right.png","diagram-arrow-up-1.png","diagram-arrow-up-and-right.png","diagram-arrow-up-left-corner.png","diagram-arrow-up.png","diagram-curve-down.png","diagram-curve-rise-dash.png","diagram-curve-rise.png","diagram-curve-up-1.png","diagram-curve-up.png","diagram-curvy-both-direction.png","diagram-curvy.png","diagram-dash-circle.png","diagram-dash-down-fast.png","diagram-dash-fast-up.png","diagram-dash-rise-steady.png","diagram-dash-steady-up.png","diagram-dash-up-steady.png","diagram-dash-up-then-down.png","diagram-dash-wave-down.png","diagram-down.png","diagram-fall-down.png","diagram-fall-fast-dash.png","diagram-fall-fast.png","diagram-fall-rise-steady.png","diagram-fast-up.png","diagram-increase.png","diagram-lower-steady.png","diagram-merge-down.png","diagram-round.png","diagram-snake-arrow.png","diagram-split-horizontal.png","diagram-split-vertical.png","diagram-steady-and-fall.png","diagram-steady-down-1.png","diagram-steady-down.png","diagram-steady-rise.png","diagram-up-double.png","diagram-up-then-down.png","diagram-up.png","diagram-wave-both-direction.png","diagram-wave-down.png","diagram-zig-zag-fall.png"],
    lightIcons: [],
  },
};
