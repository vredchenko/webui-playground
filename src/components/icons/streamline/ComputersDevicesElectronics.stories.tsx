import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Computers Devices Electronics',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Computers Devices Electronics',
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

export const Arduino: Story = {
  args: {
    subcategoryName: "Arduino",
    categoryPath: "computers-devices-electronics/arduino",
    regularIcons: ["arduino-circuit.png","arduino-plus-minus-1.png","arduino-plus-minus.png"],
    lightIcons: [],
  },
};

export const Cables: Story = {
  args: {
    subcategoryName: "Cables",
    categoryPath: "computers-devices-electronics/cables",
    regularIcons: ["cable-split.png","power-adapter.png","thunderbolt-cable.png","usb-cable-1.png","usb-cable.png","usb-port-1.png","usb-type-c.png"],
    lightIcons: [],
  },
};

export const CdRom: Story = {
  args: {
    subcategoryName: "Cd Rom",
    categoryPath: "computers-devices-electronics/cd-rom",
    regularIcons: ["cd-box.png","cd-broken.png","cd-burn.png","cd-partition.png","cd-rom.png","cd.png"],
    lightIcons: [],
  },
};

export const DesktopActions: Story = {
  args: {
    subcategoryName: "Desktop Actions",
    categoryPath: "computers-devices-electronics/desktop-actions",
    regularIcons: ["monitor-add.png","monitor-approve.png","monitor-bug.png","monitor-cash.png","monitor-clock.png","monitor-disable.png","monitor-download.png","monitor-edit.png","monitor-find.png","monitor-flash.png","monitor-heart.png","monitor-lock.png","monitor-question.png","monitor-refresh.png","monitor-remove.png","monitor-settings.png","monitor-share.png","monitor-star.png","monitor-subtract.png","monitor-sync.png","monitor-upload.png","monitor-warning.png"],
    lightIcons: [],
  },
};

export const DesktopComputers: Story = {
  args: {
    subcategoryName: "Desktop Computers",
    categoryPath: "computers-devices-electronics/desktop-computers",
    regularIcons: ["desktop-computer-1.png","desktop-computer-2.png","desktop-computer-3.png","desktop-computer-pc.png","desktop-computer.png","desktop-monitor-approve.png","desktop-monitor-back.png","desktop-monitor-clock.png","desktop-monitor-download.png","desktop-monitor-keyboard.png","desktop-monitor-lock-1.png","desktop-monitor-lock-2.png","desktop-monitor-lock.png","desktop-monitor-remove.png","desktop-monitor-settings.png","desktop-monitor-smiley-1.png","desktop-monitor-smiley.png","desktop-monitor-upload.png","desktop-monitor-warning.png","monitor-1.png","monitor.png"],
    lightIcons: [],
  },
};

export const Electronics: Story = {
  args: {
    subcategoryName: "Electronics",
    categoryPath: "computers-devices-electronics/electronics",
    regularIcons: ["electronics-LED-light.png","electronics-NPN-bipolar-transistor.png","electronics-battery.png","electronics-capacitor-1.png","electronics-capacitor-2.png","electronics-capacitor.png","electronics-crystal-diode.png","electronics-diode.png","electronics-fuse.png","electronics-ground.png","electronics-integrated-circuit.png","electronics-light-emitting-diode.png","electronics-motor.png","electronics-resistor.png","electronics-resistor_1.png","electronics-rocker-switch.png","electronics-shottkey-diode.png","electronics-single-cell-battery.png","electronics-switch.png","electronics-transister.png","electronics-tunnel-diode.png","electronics-vacuum-tube.png","electronics-variable-capacitor.png","electronics-zener-diode.png"],
    lightIcons: [],
  },
};

export const FloppyDisks: Story = {
  args: {
    subcategoryName: "Floppy Disks",
    categoryPath: "computers-devices-electronics/floppy-disks",
    regularIcons: ["floppy-disk-1.png","floppy-disk-3.png","floppy-disk.png"],
    lightIcons: [],
  },
};

export const HardDrives: Story = {
  args: {
    subcategoryName: "Hard Drives",
    categoryPath: "computers-devices-electronics/hard-drives",
    regularIcons: ["hard-drive-1.png","hard-drive.png","turntable.png"],
    lightIcons: [],
  },
};

export const KeyboardMouse: Story = {
  args: {
    subcategoryName: "Keyboard Mouse",
    categoryPath: "computers-devices-electronics/keyboard-mouse",
    regularIcons: ["keyboard-2.png","keyboard-gaming.png","keyboard-usb.png","keyboard-wireless-1.png","keyboard-wireless-2.png","keyboard-wireless.png","keyboard.png","mouse-remote.png","mouse-smart.png","mouse.png","touchpad.png"],
    lightIcons: [],
  },
};

export const LaptopActions: Story = {
  args: {
    subcategoryName: "Laptop Actions",
    categoryPath: "computers-devices-electronics/laptop-actions",
    regularIcons: ["laptop-add.png","laptop-approve.png","laptop-bug.png","laptop-cash.png","laptop-clock.png","laptop-disable.png","laptop-download.png","laptop-edit.png","laptop-flash.png","laptop-heart.png","laptop-lock-2.png","laptop-question.png","laptop-refresh.png","laptop-remove.png","laptop-search.png","laptop-settings.png","laptop-share.png","laptop-star.png","laptop-subtract.png","laptop-sync.png","laptop-upload.png","laptop-warning.png"],
    lightIcons: [],
  },
};

export const LaptopComputers: Story = {
  args: {
    subcategoryName: "Laptop Computers",
    categoryPath: "computers-devices-electronics/laptop-computers",
    regularIcons: ["laptop-1.png","laptop-2.png","laptop-lock-1.png","laptop-lock.png","laptop-smiley-1.png","laptop-smiley.png","laptop.png"],
    lightIcons: [],
  },
};

export const Memory: Story = {
  args: {
    subcategoryName: "Memory",
    categoryPath: "computers-devices-electronics/memory",
    regularIcons: ["computer-ram.png","flash-drive-lock.png","flash-drive.png","sd-card-add.png","sd-card-check.png","sd-card-disable.png","sd-card-download.png","sd-card-question.png","sd-card-refresh.png","sd-card-remove.png","sd-card-settings.png","sd-card-subtract.png","sd-card-sync.png","sd-card-upload.png","sd-card-warning.png","sd-card.png"],
    lightIcons: [],
  },
};

export const MicroprocessorChips: Story = {
  args: {
    subcategoryName: "Microprocessor Chips",
    categoryPath: "computers-devices-electronics/microprocessor-chips",
    regularIcons: ["computer-chip-2.png","computer-chip-32.png","computer-chip-4.png","computer-chip-64.png","computer-chip-8.png","computer-chip-core.png","computer-chip-fire.png","computer-chip-flash.png","computer-chip-search.png","computer-chip-shield.png","computer-chip.png","microchip-board.png"],
    lightIcons: [],
  },
};

export const PowerSupply: Story = {
  args: {
    subcategoryName: "Power Supply",
    categoryPath: "computers-devices-electronics/power-supply",
    regularIcons: ["battery-charge.png","charger-1.png","charger.png","socket-box.png","usb-port.png","wall-socket-1.png","wall-socket.png"],
    lightIcons: [],
  },
};

export const ScanPrint: Story = {
  args: {
    subcategoryName: "Scan Print",
    categoryPath: "computers-devices-electronics/scan-print",
    regularIcons: ["printer.png","scanner.png"],
    lightIcons: [],
  },
};

export const Screens: Story = {
  args: {
    subcategoryName: "Screens",
    categoryPath: "computers-devices-electronics/screens",
    regularIcons: ["screen-1.png","screen-curved.png","screen.png"],
    lightIcons: [],
  },
};

export const SmartWatches: Story = {
  args: {
    subcategoryName: "Smart Watches",
    categoryPath: "computers-devices-electronics/smart-watches",
    regularIcons: ["smart-watch-circle-bell.png","smart-watch-circle-brightness.png","smart-watch-circle-cash.png","smart-watch-circle-dumbbell.png","smart-watch-circle-flash.png","smart-watch-circle-graph-line.png","smart-watch-circle-graph.png","smart-watch-circle-heart.png","smart-watch-circle-home.png","smart-watch-circle-location.png","smart-watch-circle-mail.png","smart-watch-circle-microphone.png","smart-watch-circle-missed-call.png","smart-watch-circle-music.png","smart-watch-circle-navigation.png","smart-watch-circle-play.png","smart-watch-circle-power.png","smart-watch-circle-ringing.png","smart-watch-circle-sleep.png","smart-watch-circle-sound.png","smart-watch-circle-star.png","smart-watch-circle-target.png","smart-watch-circle-temperature.png","smart-watch-circle-text.png","smart-watch-circle-wifi.png","smart-watch-circle.png","smart-watch-square-alternate.png","smart-watch-square-app.png","smart-watch-square-bell.png","smart-watch-square-brightness.png","smart-watch-square-cash.png","smart-watch-square-data.png","smart-watch-square-download.png","smart-watch-square-dumbbell.png","smart-watch-square-email.png","smart-watch-square-flash.png","smart-watch-square-graph-line.png","smart-watch-square-graph.png","smart-watch-square-heart.png","smart-watch-square-house.png","smart-watch-square-location.png","smart-watch-square-microphone.png","smart-watch-square-missed-call.png","smart-watch-square-music.png","smart-watch-square-navigation.png","smart-watch-square-play.png","smart-watch-square-power.png","smart-watch-square-ringing.png","smart-watch-square-settings.png","smart-watch-square-sleep.png","smart-watch-square-sound.png","smart-watch-square-star.png","smart-watch-square-temperature.png","smart-watch-square-text.png","smart-watch-square-upload.png","smart-watch-square-wifi.png","smart-watch-square.png","smart-watch-wrist.png"],
    lightIcons: [],
  },
};

export const TabletsKindle: Story = {
  args: {
    subcategoryName: "Tablets Kindle",
    categoryPath: "computers-devices-electronics/tablets-kindle",
    regularIcons: ["kindle-1.png","kindle-hold.png","kindle.png","tablet-1.png","tablet-touch-1.png","tablet-touch.png","tablet.png"],
    lightIcons: [],
  },
};

export const Webcam: Story = {
  args: {
    subcategoryName: "Webcam",
    categoryPath: "computers-devices-electronics/webcam",
    regularIcons: ["webcam-1.png","webcam-2.png","webcam.png"],
    lightIcons: [],
  },
};
