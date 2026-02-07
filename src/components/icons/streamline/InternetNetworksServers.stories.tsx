import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Internet Networks Servers',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Internet Networks Servers',
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

export const Bluetooth: Story = {
  args: {
    subcategoryName: "Bluetooth",
    categoryPath: "internet-networks-servers/bluetooth",
    regularIcons: ["bluetooth-on.png","bluetooth-transfer-1.png","bluetooth-transfer.png","bluetooth.png"],
    lightIcons: [],
  },
};

export const Cloud: Story = {
  args: {
    subcategoryName: "Cloud",
    categoryPath: "internet-networks-servers/cloud",
    regularIcons: ["cloud-add.png","cloud-cash.png","cloud-check.png","cloud-clock.png","cloud-data-transfer.png","cloud-disable.png","cloud-download.png","cloud-file.png","cloud-flash.png","cloud-folder.png","cloud-image.png","cloud-loaded.png","cloud-loading-1.png","cloud-loading.png","cloud-lock.png","cloud-monitor-download.png","cloud-monitor-exchange.png","cloud-monitor-upload.png","cloud-monitor.png","cloud-music.png","cloud-off.png","cloud-phone-exchange.png","cloud-phone.png","cloud-photo.png","cloud-question.png","cloud-refresh.png","cloud-remove.png","cloud-search.png","cloud-server.png","cloud-settings.png","cloud-shield.png","cloud-smartphone-download.png","cloud-smartphone-upload.png","cloud-star.png","cloud-storage-drive.png","cloud-subtract.png","cloud-sync.png","cloud-text.png","cloud-upload.png","cloud-warning.png","cloud-wifi.png","cloud.png","home-to-cloud-sync.png"],
    lightIcons: [],
  },
};

export const DataTransfer: Story = {
  args: {
    subcategoryName: "Data Transfer",
    categoryPath: "internet-networks-servers/data-transfer",
    regularIcons: ["data-transfer-circle.png","data-transfer-diagonal-1.png","data-transfer-diagonal.png","data-transfer-ftp.png","data-transfer-horizontal.png","data-transfer-square-diagonal.png","data-transfer-square-horizontal.png","data-transfer-square-vertical.png","data-transfer-three-back-forth-back.png","data-transfer-vertical-diamond.png","data-transfer-vertical.png","data-transfer.png"],
    lightIcons: [],
  },
};

export const Network: Story = {
  args: {
    subcategoryName: "Network",
    categoryPath: "internet-networks-servers/network",
    regularIcons: ["bluetooth-on.png","bluetooth-transfer-1.png","bluetooth-transfer.png","bluetooth.png","connector-1.png","connector.png","ethernet-port.png","laptop-1.png","laptop-lock.png","laptop.png","monitor-antenna.png","monitor-exchange-arrow.png","monitor-lock.png","monitor-network.png","monitor-team.png","monitor-transfer-file.png","monitor-transfer-folder.png","monitor-transfer.png","monitor-transfer_1.png","monitor-users.png","monitor.png","network-1.png","network-arrow-sync.png","phone-antenna.png","phone-monitor-exchange.png","router-signal-1.png","router-signal-double.png","router-signal-tech.png","router-signal.png","signal-loading.png"],
    lightIcons: [],
  },
};

export const Servers: Story = {
  args: {
    subcategoryName: "Servers",
    categoryPath: "internet-networks-servers/servers",
    regularIcons: ["server-1.png","server-2.png","server-3.png","server-4.png","server-add-1.png","server-add.png","server-cash.png","server-check-1.png","server-check.png","server-choose.png","server-clock-1.png","server-clock.png","server-disable.png","server-download-1.png","server-download.png","server-edit-1.png","server-edit.png","server-hand.png","server-heart.png","server-information.png","server-lock-1.png","server-lock.png","server-mail.png","server-monitor-exchange.png","server-phone-exchange.png","server-question-1.png","server-question.png","server-refresh-1.png","server-refresh.png","server-remove-1.png","server-remove.png","server-search-1.png","server-search.png","server-server-exchange.png","server-settings-1.png","server-settings.png","server-share-1.png","server-share.png","server-star-1.png","server-star.png","server-subtract-1.png","server-subtract.png","server-sync-1.png","server-sync.png","server-upload-1.png","server-upload.png","server-warning-1.png","server-warning-500.png","server-warning.png","server.png"],
    lightIcons: [],
  },
};

export const UploadDownload: Story = {
  args: {
    subcategoryName: "Upload Download",
    categoryPath: "internet-networks-servers/upload-download",
    regularIcons: ["download-arrow-1.png","download-arrow-2.png","download-arrow.png","download-bottom.png","download-brackets.png","download-button.png","download-circle.png","download-dash-arrow-1.png","download-dash-arrow.png","download-menu.png","download-square-2.png","download-square-3.png","download-square.png","download-thick-bottom.png","download-thick-box.png","harddrive-download-1.png","harddrive-download-2.png","harddrive-download.png","harddrive-upload-1.png","harddrive-upload-2.png","harddrive-upload.png","laptop-download.png","laptop-upload.png","monitor-download.png","monitor-upload.png","upload-bottom.png","upload-brackets.png","upload-button.png","upload-circle.png","upload-dash-arrow-1.png","upload-dash-arrow.png","upload-menu.png","upload-square-2.png","upload-square-3.png","upload-square.png","upload-thick-bottom.png","upload-thick-box.png"],
    lightIcons: [],
  },
};

export const Wifi: Story = {
  args: {
    subcategoryName: "Wifi",
    categoryPath: "internet-networks-servers/wifi",
    regularIcons: ["wifi-add.png","wifi-cash.png","wifi-check.png","wifi-clock.png","wifi-coffee.png","wifi-delete.png","wifi-disable.png","wifi-download.png","wifi-heart.png","wifi-heart_1.png","wifi-laptop-1.png","wifi-laptop.png","wifi-lock.png","wifi-monitor-1.png","wifi-monitor.png","wifi-off.png","wifi-question.png","wifi-search.png","wifi-settings.png","wifi-star.png","wifi-subtract.png","wifi-sync.png","wifi-upload.png","wifi-warning.png","wifi.png"],
    lightIcons: [],
  },
};

export const Wireless: Story = {
  args: {
    subcategoryName: "Wireless",
    categoryPath: "internet-networks-servers/wireless",
    regularIcons: ["airplane-mode.png","antenna-2.png","antenna-house-connect.png","antenna-tower.png","antenna.png","house-signal.png","monitor-signal.png","network-signal.png"],
    lightIcons: [],
  },
};

export const WorldwideWeb: Story = {
  args: {
    subcategoryName: "Worldwide Web",
    categoryPath: "internet-networks-servers/worldwide-web",
    regularIcons: ["network-add.png","network-arrow.png","network-browser.png","network-cash.png","network-clock.png","network-disable.png","network-download.png","network-heart.png","network-information.png","network-live.png","network-lock.png","network-navigation.png","network-phone.png","network-pin.png","network-question.png","network-refresh.png","network-remove.png","network-search.png","network-settings.png","network-share.png","network-shield.png","network-star.png","network-subtract.png","network-sync.png","network-upload.png","network-user.png","network-users.png","network-warning.png","network-www.png"],
    lightIcons: [],
  },
};
