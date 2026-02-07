import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Users',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Users',
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

export const GeomerticCloseUpMultipleUsers: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Multiple Users",
    categoryPath: "users/geomertic-close-up-multiple-users",
    regularIcons: ["multiple-chat.png","multiple-man-woman-1.png","multiple-man-woman-2.png","multiple-man.png","multiple-neutral-1.png","multiple-neutral-2.png","multiple-neutral-circle.png","multiple-users-1.png","multiple-users-2.png","multiple-users-3.png","multiple-users-network.png","multiple-users-wifi.png","multiple-woman.png"],
    lightIcons: [],
  },
};

export const GeomerticCloseUpMultipleUsersActions: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Multiple Users Actions",
    categoryPath: "users/geomertic-close-up-multiple-users-actions",
    regularIcons: ["multiple-actions-add.png","multiple-actions-address.png","multiple-actions-alarm.png","multiple-actions-block.png","multiple-actions-cart.png","multiple-actions-chat.png","multiple-actions-check-1.png","multiple-actions-check-2.png","multiple-actions-coding.png","multiple-actions-credit-card.png","multiple-actions-download.png","multiple-actions-edit-1.png","multiple-actions-flag.png","multiple-actions-flash.png","multiple-actions-flight.png","multiple-actions-graduate.png","multiple-actions-heart.png","multiple-actions-home.png","multiple-actions-image.png","multiple-actions-information.png","multiple-actions-key.png","multiple-actions-laptop.png","multiple-actions-location.png","multiple-actions-lock.png","multiple-actions-mail.png","multiple-actions-mobilephone.png","multiple-actions-money.png","multiple-actions-monitor.png","multiple-actions-music.png","multiple-actions-player.png","multiple-actions-question.png","multiple-actions-refresh.png","multiple-actions-remove.png","multiple-actions-setting.png","multiple-actions-share-1.png","multiple-actions-share-2.png","multiple-actions-shield.png","multiple-actions-star.png","multiple-actions-subtract.png","multiple-actions-sync.png","multiple-actions-text.png","multiple-actions-time.png","multiple-actions-up-down.png","multiple-actions-upload.png","multiple-actions-video.png","multiple-actions-view.png","multiple-actions-warning.png","multiple-actions-wifi.png"],
    lightIcons: [],
  },
};

export const GeomerticCloseUpSingleUserActionsNeutral: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Single User Actions Neutral",
    categoryPath: "users/geomertic-close-up-single-user-actions-neutral",
    regularIcons: ["single-neutral-actions-add.png","single-neutral-actions-address.png","single-neutral-actions-alarm.png","single-neutral-actions-block.png","single-neutral-actions-cart.png","single-neutral-actions-chat.png","single-neutral-actions-check-1.png","single-neutral-actions-check-2.png","single-neutral-actions-coding.png","single-neutral-actions-credit-card.png","single-neutral-actions-download.png","single-neutral-actions-edit-1.png","single-neutral-actions-flag.png","single-neutral-actions-flash.png","single-neutral-actions-flight.png","single-neutral-actions-graduate.png","single-neutral-actions-heart.png","single-neutral-actions-home.png","single-neutral-actions-image.png","single-neutral-actions-information.png","single-neutral-actions-key.png","single-neutral-actions-laptop.png","single-neutral-actions-location.png","single-neutral-actions-lock.png","single-neutral-actions-mail.png","single-neutral-actions-mobilephone.png","single-neutral-actions-money.png","single-neutral-actions-monitor.png","single-neutral-actions-music.png","single-neutral-actions-player.png","single-neutral-actions-question.png","single-neutral-actions-refresh.png","single-neutral-actions-remove.png","single-neutral-actions-setting.png","single-neutral-actions-share-1.png","single-neutral-actions-share-2.png","single-neutral-actions-shield.png","single-neutral-actions-star.png","single-neutral-actions-subtract.png","single-neutral-actions-sync.png","single-neutral-actions-text.png","single-neutral-actions-time.png","single-neutral-actions-up-down.png","single-neutral-actions-upload.png","single-neutral-actions-video.png","single-neutral-actions-view.png","single-neutral-actions-warning.png","single-neutral-actions-wifi.png","single-neutral-actions.png"],
    lightIcons: [],
  },
};

export const GeomerticCloseUpSingleUserMan: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Single User Man",
    categoryPath: "users/geomertic-close-up-single-user-man",
    regularIcons: ["single-man-book.png","single-man-circle.png","single-man-focus.png","single-man-home.png","single-man-id-card.png","single-man-monitor.png","single-man-news.png","single-man-phone-book.png","single-man-podium.png","single-man-profile-picture.png","single-man-search.png","single-man-shield.png","single-man-vintage-tv.png","single-man.png"],
    lightIcons: [],
  },
};

export const GeomerticCloseUpSingleUserNeutral: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Single User Neutral",
    categoryPath: "users/geomertic-close-up-single-user-neutral",
    regularIcons: ["single-neutral-aim.png","single-neutral-book.png","single-neutral-circle.png","single-neutral-focus.png","single-neutral-folder-box.png","single-neutral-home.png","single-neutral-id-card-1.png","single-neutral-id-card-2.png","single-neutral-id-card-3.png","single-neutral-id-card-4.png","single-neutral-id-card-double.png","single-neutral-monitor.png","single-neutral-news.png","single-neutral-phone-book.png","single-neutral-podium.png","single-neutral-profile-picture.png","single-neutral-search.png","single-neutral-shield.png","single-neutral-vintage-tv.png","single-neutral.png"],
    lightIcons: [],
  },
};

export const GeomerticCloseUpSingleUserWoman: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Single User Woman",
    categoryPath: "users/geomertic-close-up-single-user-woman",
    regularIcons: ["single-woman-book.png","single-woman-circle.png","single-woman-focus.png","single-woman-home.png","single-woman-id-card.png","single-woman-monitor.png","single-woman-news.png","single-woman-phone-book.png","single-woman-podium.png","single-woman-profile-picture.png","single-woman-search.png","single-woman-shield.png","single-woman-vintage-tv.png","single-woman.png"],
    lightIcons: [],
  },
};

export const GeomerticCloseUpSingleUsersActionsMan: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Single Users Actions Man",
    categoryPath: "users/geomertic-close-up-single-users-actions-man",
    regularIcons: ["single-man-actions-add.png","single-man-actions-address.png","single-man-actions-alarm.png","single-man-actions-block.png","single-man-actions-cart.png","single-man-actions-chat.png","single-man-actions-check-1.png","single-man-actions-check-2.png","single-man-actions-coding.png","single-man-actions-credit-card.png","single-man-actions-download.png","single-man-actions-edit-1.png","single-man-actions-flag.png","single-man-actions-flash.png","single-man-actions-flight.png","single-man-actions-graduate.png","single-man-actions-heart.png","single-man-actions-home.png","single-man-actions-image.png","single-man-actions-information.png","single-man-actions-key.png","single-man-actions-laptop.png","single-man-actions-location.png","single-man-actions-lock.png","single-man-actions-mail.png","single-man-actions-mobilephone.png","single-man-actions-money.png","single-man-actions-monitor.png","single-man-actions-music.png","single-man-actions-player.png","single-man-actions-question.png","single-man-actions-refresh.png","single-man-actions-remove.png","single-man-actions-setting.png","single-man-actions-share-1.png","single-man-actions-share-2.png","single-man-actions-shield.png","single-man-actions-star.png","single-man-actions-subtract.png","single-man-actions-sync.png","single-man-actions-text.png","single-man-actions-time.png","single-man-actions-up-down.png","single-man-actions-upload.png","single-man-actions-video.png","single-man-actions-view.png","single-man-actions-warning.png","single-man-actions-wifi.png","single-man-actions.png"],
    lightIcons: [],
  },
};

export const GeomerticCloseUpSingleUsersActionsWoman: Story = {
  args: {
    subcategoryName: "Geomertic Close Up Single Users Actions Woman",
    categoryPath: "users/geomertic-close-up-single-users-actions-woman",
    regularIcons: ["single-woman-actions-add.png","single-woman-actions-address.png","single-woman-actions-alarm.png","single-woman-actions-block.png","single-woman-actions-cart.png","single-woman-actions-chat.png","single-woman-actions-check-1.png","single-woman-actions-check-2.png","single-woman-actions-coding.png","single-woman-actions-credit-card.png","single-woman-actions-download.png","single-woman-actions-edit-1.png","single-woman-actions-email.png","single-woman-actions-flag.png","single-woman-actions-flash.png","single-woman-actions-flight.png","single-woman-actions-graduate.png","single-woman-actions-heart.png","single-woman-actions-home.png","single-woman-actions-image.png","single-woman-actions-information.png","single-woman-actions-key.png","single-woman-actions-laptop.png","single-woman-actions-location.png","single-woman-actions-lock.png","single-woman-actions-mobilephone.png","single-woman-actions-money.png","single-woman-actions-monitor.png","single-woman-actions-music.png","single-woman-actions-player.png","single-woman-actions-question.png","single-woman-actions-refresh.png","single-woman-actions-remove.png","single-woman-actions-setting.png","single-woman-actions-share-1.png","single-woman-actions-share-2.png","single-woman-actions-shield.png","single-woman-actions-star.png","single-woman-actions-subtract.png","single-woman-actions-sync.png","single-woman-actions-text.png","single-woman-actions-time.png","single-woman-actions-up-down.png","single-woman-actions-upload.png","single-woman-actions-video.png","single-woman-actions-view.png","single-woman-actions-warning.png","single-woman-actions-wifi.png","single-woman-actions.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodyGenderSymbols: Story = {
  args: {
    subcategoryName: "Geometric Full Body Gender Symbols",
    categoryPath: "users/geometric-full-body-gender-symbols",
    regularIcons: ["gender-bisexual.png","gender-female.png","gender-gay.png","gender-hetero.png","gender-lesbian.png","gender-male.png","gender-transgender.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodyMan: Story = {
  args: {
    subcategoryName: "Geometric Full Body Man",
    categoryPath: "users/geometric-full-body-man",
    regularIcons: ["single-man-aim.png","single-man-briefcase.png","single-man-chat.png","single-man-check.png","single-man-circle.png","single-man-decrease.png","single-man-flag-1.png","single-man-flag-2.png","single-man-heart.png","single-man-hierachy.png","single-man-idea.png","single-man-increase.png","single-man-mail.png","single-man-megaphone.png","single-man-money.png","single-man-process.png","single-man-question.png","single-man-setting.png","single-man-shield.png","single-man-shopping-bag.png","single-man-statics-1.png","single-man-statics-2.png","single-man-statics-3.png","single-man-time.png","single-man.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodyMultipleUsers: Story = {
  args: {
    subcategoryName: "Geometric Full Body Multiple Users",
    categoryPath: "users/geometric-full-body-multiple-users",
    regularIcons: ["multiple-circle.png","multiple-home.png","multiple-man-woman-1.png","multiple-man-woman-2.png","multiple-man-woman-4.png","multiple-neutral-1.png","multiple-neutral-2.png","multiple-users-1.png","multiple-woman-1.png","multiple-woman-2.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodyMultipleUsersActions: Story = {
  args: {
    subcategoryName: "Geometric Full Body Multiple Users Actions",
    categoryPath: "users/geometric-full-body-multiple-users-actions",
    regularIcons: ["multiple-actions-add.png","multiple-actions-address.png","multiple-actions-alarm.png","multiple-actions-block.png","multiple-actions-cart.png","multiple-actions-chat.png","multiple-actions-check-1.png","multiple-actions-check-2.png","multiple-actions-coding.png","multiple-actions-credit-card.png","multiple-actions-download.png","multiple-actions-edit-1.png","multiple-actions-flag.png","multiple-actions-flash.png","multiple-actions-flight.png","multiple-actions-graduate.png","multiple-actions-heart.png","multiple-actions-home.png","multiple-actions-image.png","multiple-actions-information.png","multiple-actions-key.png","multiple-actions-laptop.png","multiple-actions-location.png","multiple-actions-lock.png","multiple-actions-mail.png","multiple-actions-mobilephone.png","multiple-actions-money.png","multiple-actions-monitor.png","multiple-actions-music.png","multiple-actions-player.png","multiple-actions-question.png","multiple-actions-refresh.png","multiple-actions-remove.png","multiple-actions-setting.png","multiple-actions-share-1.png","multiple-actions-share-2.png","multiple-actions-shield.png","multiple-actions-star.png","multiple-actions-subtract.png","multiple-actions-sync.png","multiple-actions-text.png","multiple-actions-time.png","multiple-actions-up-down.png","multiple-actions-upload.png","multiple-actions-video.png","multiple-actions-view.png","multiple-actions-warning.png","multiple-actions-wifi.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodySingleUserActionsMan: Story = {
  args: {
    subcategoryName: "Geometric Full Body Single User Actions Man",
    categoryPath: "users/geometric-full-body-single-user-actions-man",
    regularIcons: ["single-man-actions-add.png","single-man-actions-address.png","single-man-actions-alarm.png","single-man-actions-block.png","single-man-actions-cart.png","single-man-actions-chat.png","single-man-actions-check-1.png","single-man-actions-check-2.png","single-man-actions-coding.png","single-man-actions-credit-card.png","single-man-actions-download.png","single-man-actions-edit-1.png","single-man-actions-flag.png","single-man-actions-flash.png","single-man-actions-flight.png","single-man-actions-graduate.png","single-man-actions-heart.png","single-man-actions-home.png","single-man-actions-image.png","single-man-actions-information.png","single-man-actions-key.png","single-man-actions-laptop.png","single-man-actions-location.png","single-man-actions-lock.png","single-man-actions-mail.png","single-man-actions-mobilephone.png","single-man-actions-money.png","single-man-actions-monitor.png","single-man-actions-music.png","single-man-actions-player.png","single-man-actions-process.png","single-man-actions-question.png","single-man-actions-refresh.png","single-man-actions-remove.png","single-man-actions-setting.png","single-man-actions-share-1.png","single-man-actions-share-2.png","single-man-actions-shield.png","single-man-actions-star.png","single-man-actions-subtract.png","single-man-actions-sync.png","single-man-actions-text.png","single-man-actions-time.png","single-man-actions-up-down.png","single-man-actions-upload.png","single-man-actions-video.png","single-man-actions-view.png","single-man-actions-warning.png","single-man-actions-wifi.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodySingleUserActionsNeutral: Story = {
  args: {
    subcategoryName: "Geometric Full Body Single User Actions Neutral",
    categoryPath: "users/geometric-full-body-single-user-actions-neutral",
    regularIcons: ["single-neutral-actions-add.png","single-neutral-actions-address.png","single-neutral-actions-alarm.png","single-neutral-actions-block.png","single-neutral-actions-cart.png","single-neutral-actions-chat.png","single-neutral-actions-check-1.png","single-neutral-actions-check-2.png","single-neutral-actions-coding.png","single-neutral-actions-credit-card.png","single-neutral-actions-download.png","single-neutral-actions-edit-1.png","single-neutral-actions-flag.png","single-neutral-actions-flash.png","single-neutral-actions-flight.png","single-neutral-actions-graduate.png","single-neutral-actions-heart.png","single-neutral-actions-home.png","single-neutral-actions-image.png","single-neutral-actions-information.png","single-neutral-actions-key.png","single-neutral-actions-laptop.png","single-neutral-actions-location.png","single-neutral-actions-lock.png","single-neutral-actions-mail.png","single-neutral-actions-mobilephone.png","single-neutral-actions-money.png","single-neutral-actions-monitor.png","single-neutral-actions-music.png","single-neutral-actions-player.png","single-neutral-actions-process.png","single-neutral-actions-question.png","single-neutral-actions-refresh.png","single-neutral-actions-remove.png","single-neutral-actions-setting.png","single-neutral-actions-share-1.png","single-neutral-actions-share-2.png","single-neutral-actions-shield.png","single-neutral-actions-star.png","single-neutral-actions-subtract.png","single-neutral-actions-sync.png","single-neutral-actions-text.png","single-neutral-actions-time.png","single-neutral-actions-up-down.png","single-neutral-actions-upload.png","single-neutral-actions-video.png","single-neutral-actions-view.png","single-neutral-actions-warning.png","single-neutral-actions-wifi.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodySingleUserActionsWoman: Story = {
  args: {
    subcategoryName: "Geometric Full Body Single User Actions Woman",
    categoryPath: "users/geometric-full-body-single-user-actions-woman",
    regularIcons: ["single-woman-actions-add.png","single-woman-actions-address.png","single-woman-actions-alarm.png","single-woman-actions-block.png","single-woman-actions-cart.png","single-woman-actions-chat.png","single-woman-actions-check-1.png","single-woman-actions-check-2.png","single-woman-actions-coding.png","single-woman-actions-credit-card.png","single-woman-actions-download.png","single-woman-actions-edit-1.png","single-woman-actions-flag.png","single-woman-actions-flash.png","single-woman-actions-flight.png","single-woman-actions-graduate.png","single-woman-actions-heart.png","single-woman-actions-home.png","single-woman-actions-image.png","single-woman-actions-information.png","single-woman-actions-key.png","single-woman-actions-laptop.png","single-woman-actions-location.png","single-woman-actions-lock.png","single-woman-actions-mail.png","single-woman-actions-mobilephone.png","single-woman-actions-money.png","single-woman-actions-monitor.png","single-woman-actions-music.png","single-woman-actions-player.png","single-woman-actions-process.png","single-woman-actions-question.png","single-woman-actions-refresh.png","single-woman-actions-remove.png","single-woman-actions-setting.png","single-woman-actions-share-1.png","single-woman-actions-share-2.png","single-woman-actions-shield.png","single-woman-actions-star.png","single-woman-actions-subtract.png","single-woman-actions-sync.png","single-woman-actions-text.png","single-woman-actions-time.png","single-woman-actions-up-down.png","single-woman-actions-upload.png","single-woman-actions-video.png","single-woman-actions-view.png","single-woman-actions-warning.png","single-woman-actions-wifi.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodySingleUserNeutral: Story = {
  args: {
    subcategoryName: "Geometric Full Body Single User Neutral",
    categoryPath: "users/geometric-full-body-single-user-neutral",
    regularIcons: ["single-neutral-aim.png","single-neutral-briefcase.png","single-neutral-chat.png","single-neutral-check.png","single-neutral-circle.png","single-neutral-decrease.png","single-neutral-expand.png","single-neutral-find.png","single-neutral-flag-1.png","single-neutral-flag-2.png","single-neutral-focus.png","single-neutral-heart.png","single-neutral-hierachy.png","single-neutral-home.png","single-neutral-idea.png","single-neutral-increase.png","single-neutral-mail.png","single-neutral-megaphone.png","single-neutral-money.png","single-neutral-process.png","single-neutral-protect.png","single-neutral-question.png","single-neutral-rotate.png","single-neutral-setting.png","single-neutral-shield.png","single-neutral-shopping-bag.png","single-neutral-static-3.png","single-neutral-statics-1.png","single-neutral-statics-2.png","single-neutral-time.png","single-neutral-up-down.png","single-neutral.png"],
    lightIcons: [],
  },
};

export const GeometricFullBodyWoman: Story = {
  args: {
    subcategoryName: "Geometric Full Body Woman",
    categoryPath: "users/geometric-full-body-woman",
    regularIcons: ["single-woman-aim.png","single-woman-briefcase.png","single-woman-chat.png","single-woman-check.png","single-woman-circle.png","single-woman-decrease.png","single-woman-flag-1.png","single-woman-flag-2.png","single-woman-heart.png","single-woman-hierachy.png","single-woman-idea.png","single-woman-increase.png","single-woman-mail.png","single-woman-megaphone.png","single-woman-money.png","single-woman-process.png","single-woman-question.png","single-woman-setting.png","single-woman-shield.png","single-woman-shopping-bag.png","single-woman-statics-1.png","single-woman-statics-3.png","single-woman-statis-2.png","single-woman-time.png","single-woman.png"],
    lightIcons: [],
  },
};
