import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Phones Mobile Devices',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Phones Mobile Devices',
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

export const BluetoothWifi: Story = {
  args: {
    subcategoryName: "Bluetooth Wifi",
    categoryPath: "phones-mobile-devices/bluetooth-wifi",
    regularIcons: ["bluetooth-search.png","bluetooth-transfer.png","bluetooth.png","wifi-transfer-hand.png","wifi-transfer.png"],
    lightIcons: [],
  },
};

export const CellularNetwork: Story = {
  args: {
    subcategoryName: "Cellular Network",
    categoryPath: "phones-mobile-devices/cellular-network",
    regularIcons: ["cellular-network-3g.png","cellular-network-4g.png","cellular-network-5g.png","cellular-network-lte.png","cellular-network-wifi-3g.png","cellular-network-wifi-4g.png","cellular-network-wifi-5g.png","cellular-network-wifi-lte.png"],
    lightIcons: [],
  },
};

export const ChargingBattery: Story = {
  args: {
    subcategoryName: "Charging Battery",
    categoryPath: "phones-mobile-devices/charging-battery",
    regularIcons: ["charging-battery-almost-full.png","charging-battery-cable-1.png","charging-battery-eco.png","charging-battery-empty-1.png","charging-battery-empty.png","charging-battery-full-1.png","charging-battery-low-1.png","charging-battery-low-3.png","charging-battery-medium-1.png","charging-battery-medium.png","charging-cable.png","charging-flash-sync.png","charging-flash-wave.png","charging-flash-wifi.png","charging-flash.png","charging-light-idea.png","charging-wireless-charging-port.png","charging-wireless-charging.png"],
    lightIcons: [],
  },
};

export const ConnectDevices: Story = {
  args: {
    subcategoryName: "Connect Devices",
    categoryPath: "phones-mobile-devices/connect-devices",
    regularIcons: ["connect-device-cancel.png","connect-device-exchange.png"],
    lightIcons: [],
  },
};

export const ContentActions: Story = {
  args: {
    subcategoryName: "Content Actions",
    categoryPath: "phones-mobile-devices/content-actions",
    regularIcons: ["phone-action-add-user.png","phone-action-at.png","phone-action-bin.png","phone-action-camera.png","phone-action-cart.png","phone-action-cash.png","phone-action-check.png","phone-action-clock.png","phone-action-code.png","phone-action-credit-card.png","phone-action-data-transfer.png","phone-action-disable.png","phone-action-download.png","phone-action-edit-1.png","phone-action-edit.png","phone-action-email.png","phone-action-flash.png","phone-action-heart.png","phone-action-home.png","phone-action-image.png","phone-action-information.png","phone-action-location.png","phone-action-lock.png","phone-action-music.png","phone-action-navigation-pin.png","phone-action-play.png","phone-action-power-switch.png","phone-action-question.png","phone-action-record.png","phone-action-refresh.png","phone-action-remove-user.png","phone-action-ring.png","phone-action-search-1.png","phone-action-search.png","phone-action-settings.png","phone-action-share.png","phone-action-shield.png","phone-action-star.png","phone-action-sync.png","phone-action-text.png","phone-action-upload.png","phone-action-warning.png","phone-action-wifi.png"],
    lightIcons: [],
  },
};

export const FaxAnswerMachine: Story = {
  args: {
    subcategoryName: "Fax Answer Machine",
    categoryPath: "phones-mobile-devices/fax-answer-machine",
    regularIcons: ["answer-machine-paper.png","answer-machine.png","voice-mail.png"],
    lightIcons: [],
  },
};

export const ForbidenBroken: Story = {
  args: {
    subcategoryName: "Forbiden Broken",
    categoryPath: "phones-mobile-devices/forbiden-broken",
    regularIcons: ["forbidden-phone-off.png","phone-broken.png"],
    lightIcons: [],
  },
};

export const ForceTouchSqueezableGestures: Story = {
  args: {
    subcategoryName: "Force Touch Squeezable Gestures",
    categoryPath: "phones-mobile-devices/force-touch-squeezable-gestures",
    regularIcons: ["finger-tap-1.png","finger-tap.png","force-touch-double-tap.png","force-touch-press.png","force-touch-tap.png","slide-right-1.png","slide-right.png","squeeze-sides-1.png","squeeze-sides.png"],
    lightIcons: [],
  },
};

export const MobilePhones: Story = {
  args: {
    subcategoryName: "Mobile Phones",
    categoryPath: "phones-mobile-devices/mobile-phones",
    regularIcons: ["mobile-phone-blackberry-1.png","mobile-phone-blackberry-2.png","mobile-phone-blackberry.png","mobile-phone-horizontal.png","mobile-phone.png","phone-chatting.png","phone-hand-hold-1.png","phone-hand-hold.png","phone-type.png"],
    lightIcons: [],
  },
};

export const Phone: Story = {
  args: {
    subcategoryName: "Phone",
    categoryPath: "phones-mobile-devices/phone",
    regularIcons: ["phone-book.png","phone-booth.png","phone-circle.png","phone-dial.png","phone-incoming-call.png","phone-landline.png","phone-off.png","phone-retro-1.png","phone-retro.png","phone-ring.png","phone.png"],
    lightIcons: [],
  },
};

export const PhoneActions: Story = {
  args: {
    subcategoryName: "Phone Actions",
    categoryPath: "phones-mobile-devices/phone-actions",
    regularIcons: ["phone-actions-24-support-1.png","phone-actions-24-support.png","phone-actions-add-1.png","phone-actions-add.png","phone-actions-bluetooth-1.png","phone-actions-bluetooth.png","phone-actions-call-1.png","phone-actions-call.png","phone-actions-clock-1.png","phone-actions-clock.png","phone-actions-forward-1.png","phone-actions-info.png","phone-actions-lock-1.png","phone-actions-lock.png","phone-actions-menu-1.png","phone-actions-menu.png","phone-actions-merge-1.png","phone-actions-merge.png","phone-actions-missed-call-1.png","phone-actions-missed-call.png","phone-actions-next.png","phone-actions-off-1.png","phone-actions-off.png","phone-actions-pause-1.png","phone-actions-pause.png","phone-actions-question-1.png","phone-actions-question.png","phone-actions-receive-1.png","phone-actions-receive.png","phone-actions-record-1.png","phone-actions-record.png","phone-actions-refresh-1.png","phone-actions-refresh.png","phone-actions-remove-1.png","phone-actions-remove.png","phone-actions-restaurant-1.png","phone-actions-restaurant.png","phone-actions-ring.png","phone-actions-ringing.png","phone-actions-smile-1.png","phone-actions-smile.png","phone-actions-split-1.png","phone-actions-split.png","phone-actions-subtract-1.png","phone-actions-subtract.png","phone-actions-voice-mail.png","phone-actions-wait-1.png","phone-actions-wait.png","phone-actions-warning-1.png"],
    lightIcons: [],
  },
};

export const PhoneCameraSelfies: Story = {
  args: {
    subcategoryName: "Phone Camera Selfies",
    categoryPath: "phones-mobile-devices/phone-camera-selfies",
    regularIcons: ["phone-camera-shoot.png","phone-double-camera-1.png","phone-double-camera.png","phone-selfie-front-1.png","phone-selfie-front.png","phone-selfie-man.png","phone-selfie-shoot.png","phone-selfie-woman.png"],
    lightIcons: [],
  },
};

export const QrCode: Story = {
  args: {
    subcategoryName: "Qr Code",
    categoryPath: "phones-mobile-devices/qr-code",
    regularIcons: ["mobile-qr-code.png","qr-code-scan.png"],
    lightIcons: [],
  },
};

export const RotateScrollExpand: Story = {
  args: {
    subcategoryName: "Rotate Scroll Expand",
    categoryPath: "phones-mobile-devices/rotate-scroll-expand",
    regularIcons: ["phone-expand-1.png","phone-expand.png","phone-horizontal.png","phone-lock-horizontal.png","phone-lock-left.png","phone-rotate-1.png","phone-rotate.png","phone-scroll.png"],
    lightIcons: [],
  },
};

export const Signal: Story = {
  args: {
    subcategoryName: "Signal",
    categoryPath: "phones-mobile-devices/signal",
    regularIcons: ["signal-full.png","signal-low.png","signal-medium.png","signal-no.png"],
    lightIcons: [],
  },
};

export const SimCard: Story = {
  args: {
    subcategoryName: "Sim Card",
    categoryPath: "phones-mobile-devices/sim-card",
    regularIcons: ["sim-card.png"],
    lightIcons: [],
  },
};

export const Vibrate: Story = {
  args: {
    subcategoryName: "Vibrate",
    categoryPath: "phones-mobile-devices/vibrate",
    regularIcons: ["phone-vibrate-1.png","phone-vibrate.png"],
    lightIcons: [],
  },
};
