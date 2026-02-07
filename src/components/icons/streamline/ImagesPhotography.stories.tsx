import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Images Photography',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Images Photography',
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
    categoryPath: "images-photography/accessories",
    regularIcons: ["photography-equipment-bag.png","photography-equipment-battery.png","photography-equipment-cable.png","photography-equipment-film-print.png","photography-equipment-film.png","photography-equipment-remote-shutter.png","photography-equipment-retro-film.png","photography-equipment-tripod.png"],
    lightIcons: [],
  },
};

export const CameraSettings: Story = {
  args: {
    subcategoryName: "Camera Settings",
    categoryPath: "images-photography/camera-settings",
    regularIcons: ["camera-settings-flip-1.png","camera-settings-flip.png","camera-settings-focus.png","camera-settings-frame.png","camera-settings-pin.png","camera-settings-rotate-1.png","camera-settings-rotate.png"],
    lightIcons: [],
  },
};

export const Cameras: Story = {
  args: {
    subcategoryName: "Cameras",
    categoryPath: "images-photography/cameras",
    regularIcons: ["camera-1.png","camera-2.png","camera-carry.png","camera-display-1.png","camera-display.png","camera-double.png","camera-flash.png","camera-lens.png","camera-retro.png","camera-tripod-1.png","camera-tripod.png","camera.png"],
    lightIcons: [],
  },
};

export const Composition: Story = {
  args: {
    subcategoryName: "Composition",
    categoryPath: "images-photography/composition",
    regularIcons: ["composition-16-to-9.png","composition-4-to-3.png","composition-focus-square.png","composition-focus.png","composition-frame-man.png","composition-frame-woman.png","composition-hand-frame.png","composition-horizontal.png","composition-layout-1.png","composition-layout-2.png","composition-layout-3.png","composition-layout.png","composition-man.png","composition-net.png","composition-oval.png","composition-vertical.png","composition-window-man-1.png","composition-window-man.png","composition-window-woman-1.png","composition-window-woman.png","composition-woman.png"],
    lightIcons: [],
  },
};

export const Focus: Story = {
  args: {
    subcategoryName: "Focus",
    categoryPath: "images-photography/focus",
    regularIcons: ["focus-1.png","focus-auto-1.png","focus-auto.png","focus-camera-auto.png","focus-close.png","focus-cross.png","focus-e.png","focus-eye.png","focus-flower.png","focus-frame-target.png","focus-frame.png","focus-landscape.png","focus-m.png","focus-off.png","focus.png"],
    lightIcons: [],
  },
};

export const ImageFiles: Story = {
  args: {
    subcategoryName: "Image Files",
    categoryPath: "images-photography/image-files",
    regularIcons: ["image-document-bmp-1.png","image-document-bmp.png","image-document-eps-1.png","image-document-eps.png","image-document-gif-1.png","image-document-gif.png","image-document-jpg-1.png","image-document-jpg.png","image-document-png-1.png","image-document-png.png","image-document-svg-1.png","image-document-svg.png","image-document-tiff-1.png","image-document-tiff.png","image-file-add.png","image-file-bmp.png","image-file-camera.png","image-file-check.png","image-file-clock.png","image-file-disable.png","image-file-dollar.png","image-file-download.png","image-file-edit.png","image-file-eps.png","image-file-gif.png","image-file-heart.png","image-file-home.png","image-file-info.png","image-file-jpg.png","image-file-landscape.png","image-file-light.png","image-file-lock.png","image-file-png.png","image-file-question.png","image-file-refresh.png","image-file-remove.png","image-file-search.png","image-file-settings.png","image-file-share.png","image-file-shutter.png","image-file-star.png","image-file-subtract.png","image-file-svg.png","image-file-sync.png","image-file-tiff.png","image-file-upload.png","image-file-warning.png"],
    lightIcons: [],
  },
};

export const Lenses: Story = {
  args: {
    subcategoryName: "Lenses",
    categoryPath: "images-photography/lenses",
    regularIcons: ["lens-circle.png","lens-horizontal.png","lens-shade-1.png","lens-shade.png","lens-shutter-1.png","lens-shutter.png","lens-vertical.png"],
    lightIcons: [],
  },
};

export const LightModes: Story = {
  args: {
    subcategoryName: "Light Modes",
    categoryPath: "images-photography/light-modes",
    regularIcons: ["light-mode-bright-dark-1.png","light-mode-bright-dark-2.png","light-mode-bright-dark.png","light-mode-bright.png","light-mode-brightness.png","light-mode-bw.png","light-mode-cloudy.png","light-mode-dark-light.png","light-mode-exposure.png","light-mode-flash-auto.png","light-mode-flash-off.png","light-mode-flash-on.png","light-mode-flash.png","light-mode-hdr-off.png","light-mode-hdr.png","light-mode-home.png","light-mode-night-man.png","light-mode-night-woman.png","light-mode-night.png","light-mode-sunny-man-alternate.png","light-mode-sunny-man.png","light-mode-sunny-woman.png","light-mode-sunny.png"],
    lightIcons: [],
  },
};

export const Lights: Story = {
  args: {
    subcategoryName: "Lights",
    categoryPath: "images-photography/lights",
    regularIcons: ["photography-equipment-flash-light.png","photography-equipment-light-1.png","photography-equipment-light-2.png","photography-equipment-light-3.png","photography-equipment-light-umbrella.png","photography-equipment-light.png","photography-equipment-lights-background.png"],
    lightIcons: [],
  },
};

export const Masks: Story = {
  args: {
    subcategoryName: "Masks",
    categoryPath: "images-photography/masks",
    regularIcons: ["mask-bubble.png","mask-circle.png","mask-diamond.png","mask-heart-double.png","mask-heart.png","mask-oval.png","mask-square.png","mask-star.png","mask-triangle.png"],
    lightIcons: [],
  },
};

export const ModernCameras: Story = {
  args: {
    subcategoryName: "Modern Cameras",
    categoryPath: "images-photography/modern-cameras",
    regularIcons: ["action-camera.png","camera-glasses.png","go-pro.png"],
    lightIcons: [],
  },
};

export const Pictures: Story = {
  args: {
    subcategoryName: "Pictures",
    categoryPath: "images-photography/pictures",
    regularIcons: ["picture-double-landscape.png","picture-double-shapes.png","picture-double.png","picture-flower-1.png","picture-flower.png","picture-landscape.png","picture-polaroid-album-1.png","picture-polaroid-four.png","picture-polaroid-human.png","picture-polaroid-landscape.png","picture-polaroid-woman.png","picture-polaroid.png","picture-stack-human.png","picture-stack-landscape.png","picture-sun.png"],
    lightIcons: [],
  },
};

export const PicturesFrames: Story = {
  args: {
    subcategoryName: "Pictures Frames",
    categoryPath: "images-photography/pictures-frames",
    regularIcons: ["photo-frame-hang.png","photo-frame-human.png","photo-frame-landscape.png"],
    lightIcons: [],
  },
};

export const RetouchingEnhancing: Story = {
  args: {
    subcategoryName: "Retouching Enhancing",
    categoryPath: "images-photography/retouching-enhancing",
    regularIcons: ["retouch-face.png","retouch-graph.png","retouch-landscape.png","retouch-magic-wand.png","retouch-patch.png","retouch-select.png","retouch-smile.png","retouch-sticker.png","retouch-triangle.png"],
    lightIcons: [],
  },
};

export const TakingPictures: Story = {
  args: {
    subcategoryName: "Taking Pictures",
    categoryPath: "images-photography/taking-pictures",
    regularIcons: ["taking-pictures-cameras.png","taking-pictures-circle.png","taking-pictures-human.png","taking-pictures-man.png","taking-pictures-square.png","taking-pictures-woman.png"],
    lightIcons: [],
  },
};

export const Timer: Story = {
  args: {
    subcategoryName: "Timer",
    categoryPath: "images-photography/timer",
    regularIcons: ["timer-0.png","timer-10.png","timer-3.png","timer.png"],
    lightIcons: [],
  },
};

export const TransferingPictures: Story = {
  args: {
    subcategoryName: "Transfering Pictures",
    categoryPath: "images-photography/transfering-pictures",
    regularIcons: ["transfer-pictures-laptop.png","transfer-pictures-smartphone.png"],
    lightIcons: [],
  },
};

export const VintageCameras: Story = {
  args: {
    subcategoryName: "Vintage Cameras",
    categoryPath: "images-photography/vintage-cameras",
    regularIcons: ["vintage-camera-flash-1.png","vintage-camera-flash.png","vintage-camera-foldable.png","vintage-camera-polaroid.png","vintage-camera.png"],
    lightIcons: [],
  },
};
