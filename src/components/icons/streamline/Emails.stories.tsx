import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Emails',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Emails',
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

export const Drawers: Story = {
  args: {
    subcategoryName: "Drawers",
    categoryPath: "emails/drawers",
    regularIcons: ["drawer-cash.png","drawer-download.png","drawer-envelope.png","drawer-file.png","drawer-heart.png","drawer-home.png","drawer-image.png","drawer-music.png","drawer-open.png","drawer-play.png","drawer-send.png","drawer-skull.png","drawer-upload.png"],
    lightIcons: [],
  },
};

export const EmailActions: Story = {
  args: {
    subcategoryName: "Email Actions",
    categoryPath: "emails/email-actions",
    regularIcons: ["email-action-add.png","email-action-at.png","email-action-cash.png","email-action-check.png","email-action-clock.png","email-action-disable.png","email-action-download-1.png","email-action-download.png","email-action-edit.png","email-action-heart-1.png","email-action-heart.png","email-action-home.png","email-action-image.png","email-action-lock.png","email-action-music.png","email-action-play.png","email-action-read-document.png","email-action-read.png","email-action-receive.png","email-action-remove.png","email-action-reply-1.png","email-action-reply-2.png","email-action-reply-all-1.png","email-action-reply-all.png","email-action-reply.png","email-action-search-1.png","email-action-search.png","email-action-send-1.png","email-action-send-2.png","email-action-send.png","email-action-settings.png","email-action-share.png","email-action-skull.png","email-action-star.png","email-action-subtract.png","email-action-sync-1.png","email-action-sync.png","email-action-unread.png","email-action-upload-1.png","email-action-upload.png","email-action-warning.png"],
    lightIcons: [],
  },
};

export const Envelopes: Story = {
  args: {
    subcategoryName: "Envelopes",
    categoryPath: "emails/envelopes",
    regularIcons: ["envelope-back-front.png","envelope-letter.png","envelope-pigeon.png","envelope-postcard.png","envelope-sealed.png","envelope-ups.png","envelope.png"],
    lightIcons: [],
  },
};

export const Mailbox: Story = {
  args: {
    subcategoryName: "Mailbox",
    categoryPath: "emails/mailbox",
    regularIcons: ["mailbox-full.png","mailbox-house.png","mailbox-in.png","mailbox-post-1.png","mailbox-post.png"],
    lightIcons: [],
  },
};

export const ReadEmail: Story = {
  args: {
    subcategoryName: "Read Email",
    categoryPath: "emails/read-email",
    regularIcons: ["read-email-at-1.png","read-email-at.png","read-email-circle.png","read-email-hand.png","read-email-laptop.png","read-email-letter.png","read-email-monitor.png","read-email-target.png"],
    lightIcons: [],
  },
};

export const SendEmail: Story = {
  args: {
    subcategoryName: "Send Email",
    categoryPath: "emails/send-email",
    regularIcons: ["send-email-1.png","send-email-2.png","send-email-envelope.png","send-email-fly.png","send-email-monitor.png","send-email.png"],
    lightIcons: [],
  },
};

export const Stamps: Story = {
  args: {
    subcategoryName: "Stamps",
    categoryPath: "emails/stamps",
    regularIcons: ["stamps-famous.png","stamps-image.png","stamps-mail.png"],
    lightIcons: [],
  },
};
