import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Technology',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Technology',
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

export const _3dPrinting: Story = {
  args: {
    subcategoryName: "3d Printing",
    categoryPath: "technology/3d-printing",
    regularIcons: ["3d-box-corner.png","3d-box-expand-corners.png","3d-box-expand.png","3d-pen-box.png","3d-pen-draw-box.png","3d-pen.png","3d-print-ball.png","3d-print-candy.png","3d-print-cash.png","3d-print-clock.png","3d-print-fail.png","3d-print-food.png","3d-print-monitor-1.png","3d-print-monitor.png","3d-print-reel.png","3d-print-settings.png","3d-print-success.png","3d-print-triangle-1.png","3d-print-triangle-2.png","3d-print-triangle.png","3d-print-tshirt.png","3d-print-warning.png","hand-hold-3d-box.png","user-3d-box.png"],
    lightIcons: [],
  },
};

export const ArtificialIntelligence: Story = {
  args: {
    subcategoryName: "Artificial Intelligence",
    categoryPath: "technology/artificial-intelligence",
    regularIcons: ["brain-1.png","brain-chip.png","brain-lightning.png","brain.png","dna.png","robot-2.png","robot-head-1.png","robot-head.png","robot.png","settings-human.png","settings-user.png"],
    lightIcons: [],
  },
};

export const AutomatedTranslation: Story = {
  args: {
    subcategoryName: "Automated Translation",
    categoryPath: "technology/automated-translation",
    regularIcons: ["chat-translate.png","phone-translate.png","speech-translate-1.png","speech-translate.png","translate.png"],
    lightIcons: [],
  },
};

export const Beacons: Story = {
  args: {
    subcategoryName: "Beacons",
    categoryPath: "technology/beacons",
    regularIcons: ["beacon-bluetooth.png","beacon-remote-house.png","beacon-remote-laptop.png","beacon-remote-monitor.png","beacon-remote-plane-1.png","beacon-remote-plane.png","beacon-remote-smartphone.png","beacon-remote-train.png","beacon-remote-vehicle.png","beacon-wireless-remote.png"],
    lightIcons: [],
  },
};

export const Drones: Story = {
  args: {
    subcategoryName: "Drones",
    categoryPath: "technology/drones",
    regularIcons: ["drone-1.png","drone-add.png","drone-camera.png","drone-controller-1.png","drone-controller.png","drone-height.png","drone-mail.png","drone-off.png","drone-picture.png","drone-remote.png","drone-restaurant.png","drone-video.png","drone.png"],
    lightIcons: [],
  },
};

export const FutureTechs: Story = {
  args: {
    subcategoryName: "Future Techs",
    categoryPath: "technology/future-techs",
    regularIcons: ["ankle-tracker.png","artificial-arm.png","bendable-phone-touch.png","bendable-phone.png","body-scanner.png","robot-1.png","user-polaroid.png","video-projector.png","virtual-box.png","virtual-tap-finger.png","virtual-touch-board.png","webcam.png"],
    lightIcons: [],
  },
};

export const SmartHouse: Story = {
  args: {
    subcategoryName: "Smart House",
    categoryPath: "technology/smart-house",
    regularIcons: ["smart-house-call.png","smart-house-car.png","smart-house-door-open.png","smart-house-door.png","smart-house-eye.png","smart-house-garage-1.png","smart-house-light-on.png","smart-house-light.png","smart-house-lock.png","smart-house-open-door.png","smart-house-open.png","smart-house-phone-cctv.png","smart-house-phone-connect.png","smart-house-phone-lock-1.png","smart-house-phone-lock.png","smart-house-phone-power-1.png","smart-house-phone-power.png","smart-house-phone-remote.png","smart-house-phone-sync.png","smart-house-phone.png","smart-house-power.png","smart-house-remote-alternate.png","smart-house-remote.png","smart-house-temperature.png","smart-house-timer.png","smart-house-unlock.png","smart-house-ventilator.png","smart-house-water.png","smart-house-window.png","smart-house.png"],
    lightIcons: [],
  },
};

export const VirtualReality: Story = {
  args: {
    subcategoryName: "Virtual Reality",
    categoryPath: "technology/virtual-reality",
    regularIcons: ["controller-360.png","vr-360-remote-controller.png","vr-controller-1.png","vr-controller-headphones.png","vr-controller.png","vr-globe.png","vr-headphones.png","vr-laptop-1.png","vr-laptop.png","vr-phone.png","vr-play-device-1.png","vr-play-device.png","vr-user-box-1.png","vr-user-box-human.png","vr-user-box.png","vr-user-controller.png","vr-user-globe-human.png","vr-user-headphones.png","vr-user-laptop.png","vr-user-play-1.png","vr-user-play.png","vr-video-1.png"],
    lightIcons: [],
  },
};
