import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Design',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Design',
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

export const Align: Story = {
  args: {
    subcategoryName: "Align",
    categoryPath: "design/align",
    regularIcons: ["align-bottom-move.png","align-bottom.png","align-center.png","align-left-move.png","align-left-right.png","align-left.png","align-middle-move-horizontal.png","align-middle-move-vertical.png","align-middle.png","align-right-move.png","align-right.png","align-top-bottom.png","align-top-move.png","align-top.png"],
    lightIcons: [],
  },
};

export const ColorsPainting: Story = {
  args: {
    subcategoryName: "Colors Painting",
    categoryPath: "design/colors-painting",
    regularIcons: ["color-brush-2.png","color-brush-3.png","color-brush-paint-1.png","color-brush-paint.png","color-brush.png","color-bucket-1.png","color-bucket-brush.png","color-bucket.png","color-drop-off.png","color-drop-pick.png","color-painting-palette-1.png","color-painting-palette.png","color-palette-1.png","color-palette-2.png","color-palette-sample-1.png","color-palette-sample.png","color-palette.png","color-picker-1.png","color-picker-2.png","color-picker-3.png","color-picker-4.png","color-picker-5.png","color-picker.png","color-rolling-brush.png","color-spray.png","color-triangle.png","color-tube-painting.png","color-tube.png","color-tubes.png"],
    lightIcons: [],
  },
};

export const CropsArtboards: Story = {
  args: {
    subcategoryName: "Crops Artboards",
    categoryPath: "design/crops-artboards",
    regularIcons: ["artboard-add.png","artboard-circle.png","artboard-expand.png","artboard-image.png","artboard-shapes.png","artboard-shrink.png","artboard-subtract.png"],
    lightIcons: [],
  },
};

export const DesignFiles: Story = {
  args: {
    subcategoryName: "Design Files",
    categoryPath: "design/design-files",
    regularIcons: ["design-document-3ds-1.png","design-document-3ds.png","design-document-ai-1.png","design-document-ai.png","design-document-dwg-1.png","design-document-dwg.png","design-document-dxf-1.png","design-document-dxf.png","design-document-indd-1.png","design-document-indd.png","design-document-max-1.png","design-document-max.png","design-document-otf-1.png","design-document-otf.png","design-document-psd-1.png","design-document-psd.png","design-document-ttf-1.png","design-document-ttf.png","design-file-3ds-1.png","design-file-ai-1.png","design-file-dwg-1.png","design-file-dxf-1.png","design-file-indd-1.png","design-file-max-1.png","design-file-otf-1.png","design-file-pen.png","design-file-psd-1.png","design-file-pyramid.png","design-file-select.png","design-file-text-image.png","design-file-text.png","design-file-ttf-1.png","design-file-vector.png"],
    lightIcons: [],
  },
};

export const DesignProcess: Story = {
  args: {
    subcategoryName: "Design Process",
    categoryPath: "design/design-process",
    regularIcons: ["design-draw.png","design-drawing-board-education.png","design-drawing-board.png","design-monitor-pencil.png","design-pen-tool.png","design-shape-monitor.png","design-tool-fibonacci.png","design-tool-layout.png","design-tool-pen-1.png","design-tool-pen.png","design-tool-pen_1.png","design-tool-shape.png","design-tool-wireframe.png"],
    lightIcons: [],
  },
};

export const DesignTools: Story = {
  args: {
    subcategoryName: "Design Tools",
    categoryPath: "design/design-tools",
    regularIcons: ["design-tool-compass.png","design-tool-glue-1.png","design-tool-glue.png","design-tool-ink.png","design-tool-magic-wand.png","design-tool-magnet.png","design-tool-paper-glue.png","design-tool-pen-station.png","design-tool-pencil-ruler.png","design-tool-pens.png","design-tool-quill-1.png","design-tool-quill-2.png","design-tool-quill-3.png","design-tool-quill.png","design-tool-razor-cut.png","design-tool-selection-wand.png","design-tool-sharpener.png","design-tool-stamp.png"],
    lightIcons: [],
  },
};

export const Flip: Story = {
  args: {
    subcategoryName: "Flip",
    categoryPath: "design/flip",
    regularIcons: ["flip-left.png","flip-right.png","reflect-left.png","reflect-right.png"],
    lightIcons: [],
  },
};

export const GraphicTablets: Story = {
  args: {
    subcategoryName: "Graphic Tablets",
    categoryPath: "design/graphic-tablets",
    regularIcons: ["graphic-tablet-draw-1.png","graphic-tablet-draw.png","graphic-tablet-drawing-pen.png","graphic-tablet-intous-draw.png","graphic-tablet-pen.png"],
    lightIcons: [],
  },
};

export const GridsRulers: Story = {
  args: {
    subcategoryName: "Grids Rulers",
    categoryPath: "design/grids-rulers",
    regularIcons: ["grid-artboard.png","grid-dot.png","grid-guides.png","grid-monitor.png","grid-perspective.png","grid-ruler-1.png","grid-ruler.png","perspective-grid.png","ruler-triangle.png","ruler.png"],
    lightIcons: [],
  },
};

export const Layers: Story = {
  args: {
    subcategoryName: "Layers",
    categoryPath: "design/layers",
    regularIcons: ["layers-1.png","layers-back.png","layers-front.png","layers-grid-add.png","layers-grid-check.png","layers-grid-disable.png","layers-grid-download.png","layers-grid-hide.png","layers-grid-lock.png","layers-grid-magnet.png","layers-grid-remove.png","layers-grid-settings.png","layers-grid-subtract.png","layers-grid-upload.png","layers-grid-warning.png","layers-hide.png","layers-lock.png","layers-off.png","layers-select-front.png","layers-select.png","layers-show.png","layers-stacked.png","layers.png"],
    lightIcons: [],
  },
};

export const Pathfinder: Story = {
  args: {
    subcategoryName: "Pathfinder",
    categoryPath: "design/pathfinder",
    regularIcons: ["pathfinder-divide.png","pathfinder-exclude.png","pathfinder-intersect.png","pathfinder-merge.png","pathfinder-minus-back.png","pathfinder-minus-front.png","pathfinder-outline.png"],
    lightIcons: [],
  },
};

export const Reorder: Story = {
  args: {
    subcategoryName: "Reorder",
    categoryPath: "design/reorder",
    regularIcons: ["reorder-down.png","reorder-up.png"],
    lightIcons: [],
  },
};

export const Resize: Story = {
  args: {
    subcategoryName: "Resize",
    categoryPath: "design/resize",
    regularIcons: ["resize-expand-arrow.png","resize-expand-corner-1.png","resize-expand-corner.png","resize-expand-sides.png","resize-expand.png","resize-shrink.png"],
    lightIcons: [],
  },
};

export const Rotate: Story = {
  args: {
    subcategoryName: "Rotate",
    categoryPath: "design/rotate",
    regularIcons: ["rotate-angle.png","rotate-back.png","rotate-forward.png","rotate-front.png","rotate-horizontal.png","rotate-vertical.png","rotate.png"],
    lightIcons: [],
  },
};

export const Shapes: Story = {
  args: {
    subcategoryName: "Shapes",
    categoryPath: "design/shapes",
    regularIcons: ["shape-circle-add.png","shape-cube.png","shape-cylinder.png","shape-peg-top.png","shape-pyramid.png","shape-rhomboid.png","shape-square-add.png","shape-triangle-circle.png","shape-triangle.png","shapes.png"],
    lightIcons: [],
  },
};

export const Transform: Story = {
  args: {
    subcategoryName: "Transform",
    categoryPath: "design/transform",
    regularIcons: ["transform-direct-select.png","transform-inside.png","transform-left.png","transform-right.png","transform-shrink.png"],
    lightIcons: [],
  },
};

export const Vectors: Story = {
  args: {
    subcategoryName: "Vectors",
    categoryPath: "design/vectors",
    regularIcons: ["vectors-add-anchor.png","vectors-anchor-circle.png","vectors-anchor-rectangle.png","vectors-anchor-square-1.png","vectors-anchor-square.png","vectors-anchor-triangle.png","vectors-line-path.png","vectors-path-corner.png","vectors-path-flat.png","vectors-pen-1.png","vectors-pen-add-1.png","vectors-pen-add.png","vectors-pen-anchor.png","vectors-pen-draw.png","vectors-pen-flat.png","vectors-pen-new-anchor.png","vectors-pen-subtract-1.png","vectors-pen-subtract.png","vectors-pen.png","vectors-square-link-broken.png","vectors-square-link.png"],
    lightIcons: [],
  },
};
