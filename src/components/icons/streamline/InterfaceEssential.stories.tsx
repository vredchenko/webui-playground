import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Interface Essential',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Interface Essential',
          '',
          '100,000+ icons by [Streamline](https://streamlinehq.com). Free under [CC Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (linkware).',
          '',
          'Showing 96px PNG variants in Regular and Light styles.',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StreamlineIconGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  args: {
    subcategoryName: "Alert",
    categoryPath: "interface-essential/alert",
    regularIcons: ["alarm-bell-check.png","alarm-bell-disable.png","alarm-bell-off.png","alarm-bell-ring.png","alarm-bell-sleep.png","alarm-bell-timer.png","alarm-bell.png","alarm-clock.png"],
    lightIcons: ["alarm-bell-1.png","alarm-bell-check-1.png","alarm-bell-check.png","alarm-bell-disable-1.png","alarm-bell-disable.png","alarm-bell-off.png","alarm-bell-ring-1.png","alarm-bell-ring.png","alarm-bell-sleep-1.png","alarm-bell-sleep.png","alarm-bell-timer-1.png","alarm-bell-timer.png","alarm-bell.png","alarm-clock-1.png","alarm-clock.png"],
  },
};

export const Alerts: Story = {
  args: {
    subcategoryName: "Alerts",
    categoryPath: "interface-essential/alerts",
    regularIcons: ["alert-circle.png","alert-diamond.png","alert-message-laptop.png","alert-triangle.png","alert-user.png","information-circle.png","question-circle.png","radioactive-circle.png","radioactive.png","stop-sign.png"],
    lightIcons: ["alert-circle.png","alert-diamond.png","alert-message-laptop.png","alert-triangle.png","alert-user.png","information-circle.png","question-circle.png","radioactive-circle.png","radioactive.png","stop-sign.png"],
  },
};

export const CellFormating: Story = {
  args: {
    subcategoryName: "Cell Formating",
    categoryPath: "interface-essential/cell-formating",
    regularIcons: ["cell-border-bottom.png","cell-border-center.png","cell-border-frame.png","cell-border-full.png","cell-border-horizontal-vertical.png","cell-border-left.png","cell-border-none.png","cell-border-right.png","cell-border-top.png"],
    lightIcons: ["cell-border-bottom.png","cell-border-center.png","cell-border-frame.png","cell-border-full.png","cell-border-horizontal-vertical.png","cell-border-left.png","cell-border-none.png","cell-border-right.png","cell-border-top.png"],
  },
};

export const Connect: Story = {
  args: {
    subcategoryName: "Connect",
    categoryPath: "interface-essential/connect",
    regularIcons: ["flash-1.png","flash-off.png","flash.png"],
    lightIcons: ["flash-1.png","flash-off.png","flash.png"],
  },
};

export const Controls: Story = {
  args: {
    subcategoryName: "Controls",
    categoryPath: "interface-essential/controls",
    regularIcons: ["brightness-1.png","brightness.png","setting-slider-horizontal.png","setting-slider-vertical.png","settings-brightness.png","settings-off.png","settings-on.png","settings-slider-desktop-horizontal.png","settings-slider-desktop-vertical.png","settings-slider.png","settings-sound.png","settings-toggle-horizontal.png","settings-toggle-vertical.png","settings-vertical.png","sound.png","switch-off-1.png","switch-on-1.png","volume-down.png","volume-up.png","volume.png"],
    lightIcons: ["brightness-1.png","brightness.png","setting-slider-horizontal.png","setting-slider-vertical.png","settings-brightness.png","settings-horizontal.png","settings-off.png","settings-on.png","settings-slider-desktop-horizontal.png","settings-slider-desktop-vertical.png","settings-slider.png","settings-sound.png","settings-toggle-horizontal.png","settings-toggle-vertical.png","settings-vertical-1.png","settings-vertical.png","sound.png","switch-off-1.png","switch-off.png","switch-on-1.png","switch-on.png","volume-down.png","volume-up.png","volume.png"],
  },
};

export const CopyPaste: Story = {
  args: {
    subcategoryName: "Copy Paste",
    categoryPath: "interface-essential/copy-paste",
    regularIcons: ["copy-paste.png","scissors-2.png","scissors.png"],
    lightIcons: ["copy-paste-1.png","copy-paste.png","scissors-1.png","scissors-2.png","scissors.png"],
  },
};

export const Dashboard: Story = {
  args: {
    subcategoryName: "Dashboard",
    categoryPath: "interface-essential/dashboard",
    regularIcons: ["browser-gauge-1.png","browser-gauge.png","gauge-dashboard-1.png","gauge-dashboard.png","layout-corners-dashboard-1.png","layout-corners-dashboard.png","layout-dashboard-1.png","layout-dashboard.png","pie-line-graph-desktop.png","pie-line-graph.png"],
    lightIcons: ["browser-gauge-1.png","browser-gauge.png","gauge-dashboard-1.png","gauge-dashboard.png","layout-corners-dashboard-1.png","layout-corners-dashboard.png","layout-dashboard-1.png","layout-dashboard.png","pie-line-graph-desktop.png","pie-line-graph.png"],
  },
};

export const DateCalendar: Story = {
  args: {
    subcategoryName: "Date Calendar",
    categoryPath: "interface-essential/date-calendar",
    regularIcons: ["calendar-1.png","calendar-2.png","calendar-3.png","calendar-add-1.png","calendar-add.png","calendar-block.png","calendar-cash-1.png","calendar-cash.png","calendar-check-1.png","calendar-check.png","calendar-clock.png","calendar-date.png","calendar-disable-1.png","calendar-disable.png","calendar-download.png","calendar-edit-1.png","calendar-edit.png","calendar-favorite-1.png","calendar-favorite-heart-1.png","calendar-favorite-heart.png","calendar-favorite.png","calendar-home.png","calendar-information.png","calendar-lock-1.png","calendar-lock.png","calendar-plane.png","calendar-question.png","calendar-refresh.png","calendar-remove.png","calendar-school.png","calendar-search-1.png","calendar-search.png","calendar-setting.png","calendar-share.png","calendar-shield.png","calendar-skull.png","calendar-sync.png","calendar-upload.png","calendar-warning.png","calendar.png"],
    lightIcons: ["calendar-1.png","calendar-2.png","calendar-3.png","calendar-add-1.png","calendar-add.png","calendar-block.png","calendar-cash-1.png","calendar-cash.png","calendar-check-1.png","calendar-check.png","calendar-clock.png","calendar-date.png","calendar-disable-1.png","calendar-disable.png","calendar-download.png","calendar-edit-1.png","calendar-edit.png","calendar-favorite-1.png","calendar-favorite-heart-1.png","calendar-favorite-heart.png","calendar-favorite.png","calendar-home.png","calendar-information.png","calendar-lock-1.png","calendar-lock.png","calendar-plane.png","calendar-question.png","calendar-refresh.png","calendar-remove.png","calendar-school.png","calendar-search-1.png","calendar-search.png","calendar-setting.png","calendar-share.png","calendar-shield.png","calendar-skull.png","calendar-sync.png","calendar-upload.png","calendar-warning.png","calendar.png"],
  },
};

export const Delete: Story = {
  args: {
    subcategoryName: "Delete",
    categoryPath: "interface-essential/delete",
    regularIcons: ["atomic-bomb.png","bin-1-alternate.png","bin-1.png","bin-2-alternate.png","bin-2.png","bin-paper-1.png","bin-paper-2.png","bin-paper.png","bin.png","delete-1.png","delete-2.png","delete.png","disable.png","skull-1.png","skull-2.png","skull.png"],
    lightIcons: ["atomic-bomb.png","bin-1.png","bin-2.png","bin-paper-1.png","bin-paper-2.png","bin-paper.png","bin.png","delete-1.png","delete-2.png","delete.png","disable.png","skull-1.png","skull-2.png","skull.png"],
  },
};

export const Edit: Story = {
  args: {
    subcategoryName: "Edit",
    categoryPath: "interface-essential/edit",
    regularIcons: ["pen-write-paper.png","pen-write.png","pencil-1.png","pencil-2.png","pencil-circle.png","pencil-write-2.png","pencil-write.png","pencil.png","quill-circle.png","quill-write.png"],
    lightIcons: ["pen-write-paper.png","pen-write.png","pencil-1.png","pencil-2.png","pencil-circle.png","pencil-write-1.png","pencil-write-2.png","pencil-write.png","pencil.png","quill-circle-1.png","quill-circle.png","quill-write-1.png","quill-write.png"],
  },
};

export const ExpandRetract: Story = {
  args: {
    subcategoryName: "Expand Retract",
    categoryPath: "interface-essential/expand-retract",
    regularIcons: ["expand-1.png","expand-2.png","expand-3.png","expand-5.png","expand-6.png","expand-7.png","expand-8.png","expand-full.png","expand.png","shrink-1.png","shrink-2.png","shrink-4.png","shrink.png","touch-up-1.png","touch-up.png"],
    lightIcons: ["expand-1.png","expand-2.png","expand-3.png","expand-4.png","expand-5.png","expand-6.png","expand-7.png","expand-8.png","expand-full.png","expand.png","shrink-1.png","shrink-2.png","shrink-3.png","shrink-4.png","shrink.png","touch-up-1.png","touch-up.png"],
  },
};

export const Faceid: Story = {
  args: {
    subcategoryName: "Faceid",
    categoryPath: "interface-essential/faceid",
    regularIcons: ["face-id-1.png","face-id-2.png","face-id-3.png","face-id-4.png","face-id-5.png","face-id-6.png","face-id-7.png","face-id-8.png","face-id-9.png","face-id-approved.png","face-id-scan-1.png","face-id-scan.png","face-id-smartphone.png","face-id.png"],
    lightIcons: ["face-id-1.png","face-id-10.png","face-id-2.png","face-id-3.png","face-id-4.png","face-id-5.png","face-id-6.png","face-id-7.png","face-id-8.png","face-id-9.png","face-id-approved.png","face-id-scan-1.png","face-id-scan.png","face-id-smartphone.png","face-id.png"],
  },
};

export const Filter: Story = {
  args: {
    subcategoryName: "Filter",
    categoryPath: "interface-essential/filter",
    regularIcons: ["filter-1.png","filter-2.png","filter-text.png","filter.png"],
    lightIcons: ["filter-1.png","filter-2.png","filter-text.png","filter.png"],
  },
};

export const Flip: Story = {
  args: {
    subcategoryName: "Flip",
    categoryPath: "interface-essential/flip",
    regularIcons: ["flip-vertical-down.png","flip-vertical-up.png","reflect-down.png","reflect-up.png"],
    lightIcons: ["flip-vertical-down.png","flip-vertical-up.png","reflect-down.png","reflect-up.png"],
  },
};

export const FormEdition: Story = {
  args: {
    subcategoryName: "Form Edition",
    categoryPath: "interface-essential/form-edition",
    regularIcons: ["checklist-pen.png","checklist.png","paper-write.png","pen-write-1.png","pencil-write-3.png","task-checklist-add.png","task-checklist-check.png","task-checklist-remove.png","task-checklist-write.png","task-checklist.png","typing.png"],
    lightIcons: ["checklist-pen.png","checklist.png","paper-write.png","pen-write-1.png","pencil-write-3.png","task-checklist-add.png","task-checklist-check.png","task-checklist-remove.png","task-checklist-write.png","task-checklist.png","typing.png"],
  },
};

export const FormValidation: Story = {
  args: {
    subcategoryName: "Form Validation",
    categoryPath: "interface-essential/form-validation",
    regularIcons: ["check-1.png","check-2.png","check-badge.png","check-button.png","check-circle-1.png","check-circle.png","check-double-1.png","check-double.png","check-shield.png","check-square.png","close.png","cursor-choose-1.png","cursor-choose.png","remove-badge.png","remove-button.png","remove-circle.png","remove-shield.png","remove-square.png"],
    lightIcons: ["check-1.png","check-2.png","check-badge.png","check-button.png","check-circle-1.png","check-circle.png","check-double-1.png","check-double.png","check-shield.png","check-square.png","check.png","close.png","cursor-choose-1.png","cursor-choose.png","remove-badge.png","remove-button.png","remove-circle.png","remove-shield.png","remove-square.png"],
  },
};

export const Help: Story = {
  args: {
    subcategoryName: "Help",
    categoryPath: "interface-essential/help",
    regularIcons: ["browser-user-help-message.png","headphones-customer-support-human-1.png","headphones-customer-support-human.png","headphones-customer-support-question.png","headphones-customer-support.png","help-question-network.png","help-wheel.png","laptop-help-message.png","question-help-message.png","question-help-square.png","user-question.png"],
    lightIcons: ["browser-user-help-message.png","headphones-customer-support-human-1.png","headphones-customer-support-human.png","headphones-customer-support-question.png","headphones-customer-support.png","help-question-network.png","help-wheel.png","laptop-help-message.png","question-help-circle.png","question-help-message.png","question-help-square.png","user-question.png"],
  },
};

export const HierachyOrganization: Story = {
  args: {
    subcategoryName: "Hierachy Organization",
    categoryPath: "interface-essential/hierachy-organization",
    regularIcons: ["hierarchy-1.png","hierarchy-10.png","hierarchy-2.png","hierarchy-3.png","hierarchy-4.png","hierarchy-5.png","hierarchy-6.png","hierarchy-7.png","hierarchy-8.png","hierarchy-9.png","hierarchy-files.png","hierarchy.png"],
    lightIcons: ["hierarchy-1.png","hierarchy-10.png","hierarchy-2.png","hierarchy-3.png","hierarchy-4.png","hierarchy-5.png","hierarchy-6.png","hierarchy-7.png","hierarchy-8.png","hierarchy-9.png","hierarchy-files-1.png","hierarchy-files.png","hierarchy.png"],
  },
};

export const Home: Story = {
  args: {
    subcategoryName: "Home",
    categoryPath: "interface-essential/home",
    regularIcons: ["bird-house.png","house-1.png","house-2.png","house-3.png","house-4.png","house-chimney-1.png","house-chimney-2.png","house-chimney.png","house-entrance.png","house.png"],
    lightIcons: ["bird-house.png","house-1.png","house-2.png","house-3.png","house-4.png","house-chimney-1.png","house-chimney-2.png","house-chimney.png","house-entrance.png","house.png"],
  },
};

export const IrisScan: Story = {
  args: {
    subcategoryName: "Iris Scan",
    categoryPath: "interface-essential/iris-scan",
    regularIcons: ["iris-scan-1.png","iris-scan-2.png","iris-scan-approved-1.png","iris-scan-approved-alternate.png","iris-scan-approved.png","iris-scan-denied.png","iris-scan-lock.png","iris-scan-search.png","iris-scan-smartphone.png","iris-scan-user.png","iris-scan.png"],
    lightIcons: ["iris-scan-1.png","iris-scan-2.png","iris-scan-approved-1.png","iris-scan-approved.png","iris-scan-denied.png","iris-scan-lock.png","iris-scan-search.png","iris-scan-smartphone.png","iris-scan-user.png","iris-scan.png"],
  },
};

export const Keyboard: Story = {
  args: {
    subcategoryName: "Keyboard",
    categoryPath: "interface-essential/keyboard",
    regularIcons: ["keyboard-alt.png","keyboard-arrow-bottom-left.png","keyboard-arrow-bottom-right.png","keyboard-arrow-down.png","keyboard-arrow-left.png","keyboard-arrow-next.png","keyboard-arrow-previous.png","keyboard-arrow-return-1.png","keyboard-arrow-return.png","keyboard-arrow-right.png","keyboard-arrow-top-left.png","keyboard-arrow-top-right.png","keyboard-arrow-up.png","keyboard-asterisk-1.png","keyboard-asterisk-2.png","keyboard-asterisk-3.png","keyboard-asterisk.png","keyboard-button-direction.png","keyboard-button.png","keyboard-command.png","keyboard-delete.png","keyboard-eject.png","keyboard-option.png","keyboard-page-down.png","keyboard-page-up.png","keyboard-power-off.png","keyboard-return-1.png","keyboard-return.png","keyboard-shift-1.png","keyboard-shift.png"],
    lightIcons: ["keyboard-alt.png","keyboard-arrow-bottom-left.png","keyboard-arrow-bottom-right.png","keyboard-arrow-down.png","keyboard-arrow-left.png","keyboard-arrow-next.png","keyboard-arrow-previous.png","keyboard-arrow-return-1.png","keyboard-arrow-return.png","keyboard-arrow-right.png","keyboard-arrow-top-left.png","keyboard-arrow-top-right.png","keyboard-arrow-up.png","keyboard-asterisk-1.png","keyboard-asterisk-2.png","keyboard-asterisk-3.png","keyboard-asterisk.png","keyboard-button-direction.png","keyboard-button.png","keyboard-command.png","keyboard-delete.png","keyboard-eject.png","keyboard-option.png","keyboard-page-down.png","keyboard-page-up.png","keyboard-power-off.png","keyboard-return-1.png","keyboard-return.png","keyboard-shift-1.png","keyboard-shift.png"],
  },
};

export const Keyboardid: Story = {
  args: {
    subcategoryName: "Keyboardid",
    categoryPath: "interface-essential/keyboardid",
    regularIcons: ["dial-finger-1.png","dial-pad.png"],
    lightIcons: ["dial-finger-1.png","dial-finger.png","dial-pad.png"],
  },
};

export const Layouts: Story = {
  args: {
    subcategoryName: "Layouts",
    categoryPath: "interface-essential/layouts",
    regularIcons: ["layout-1.png","layout-2.png","layout-3.png","layout-4.png","layout-5.png","layout-6.png","layout-agenda.png","layout-array-1.png","layout-array.png","layout-bullets.png","layout-column.png","layout-headline.png","layout-left.png","layout-module-1.png","layout-module-2.png","layout-module.png","layout-none.png","layout-right.png","layout-three-columns.png","layout-top.png","layout-two-colums.png","layout.png"],
    lightIcons: ["layout-1.png","layout-2.png","layout-3.png","layout-4.png","layout-5.png","layout-6.png","layout-agenda.png","layout-array-1.png","layout-array.png","layout-bullets.png","layout-column.png","layout-content.png","layout-headline.png","layout-left.png","layout-module-1.png","layout-module-2.png","layout-module.png","layout-none.png","layout-right.png","layout-three-columns.png","layout-top.png","layout-two-colums.png","layout.png"],
  },
};

export const LinkUnlink: Story = {
  args: {
    subcategoryName: "Link Unlink",
    categoryPath: "interface-essential/link-unlink",
    regularIcons: ["attachment-1.png","attachment.png","hyperlink-2.png","hyperlink-3.png","hyperlink-circle.png","hyperlink.png","link-broken-1.png","link-broken-2.png","link-broken.png"],
    lightIcons: ["attachment-1.png","attachment.png","hyperlink-1.png","hyperlink-2.png","hyperlink-3.png","hyperlink-circle.png","hyperlink.png","link-broken-1.png","link-broken-2.png","link-broken.png"],
  },
};

export const Lists: Story = {
  args: {
    subcategoryName: "Lists",
    categoryPath: "interface-essential/lists",
    regularIcons: ["list-add.png","list-bullets-1.png","list-bullets.png","list-numbers.png","list-remove.png","list-stars.png"],
    lightIcons: ["list-add.png","list-bullets-1.png","list-bullets.png","list-numbers.png","list-remove.png","list-stars.png"],
  },
};

export const Loading: Story = {
  args: {
    subcategoryName: "Loading",
    categoryPath: "interface-essential/loading",
    regularIcons: ["loading-1.png","loading-2.png","loading-3.png","loading-bar-1.png","loading-bar.png","loading-circle-1.png","loading-circle-2.png","loading-circle.png","loading-half.png","loading-line-1.png","loading-line.png","loading.png"],
    lightIcons: ["loading-1.png","loading-2.png","loading-3.png","loading-bar-1.png","loading-bar.png","loading-circle-1.png","loading-circle-2.png","loading-circle.png","loading-half.png","loading-line-1.png","loading-line.png","loading.png"],
  },
};

export const LockUnlock: Story = {
  args: {
    subcategoryName: "Lock Unlock",
    categoryPath: "interface-essential/lock-unlock",
    regularIcons: ["door-lock.png","door-password-lock.png","hand-give-lock.png","key-lock-1.png","key-lock.png","keyhole-circle.png","keyhole-square.png","lock-1.png","lock-2.png","lock-3.png","lock-4.png","lock-5.png","lock-6.png","lock-7.png","lock-8.png","lock-circle-1.png","lock-circle.png","lock-hierarchy.png","lock-network.png","lock-password.png","lock-shield.png","lock-unlock-1.png","lock-unlock-2.png","lock-unlock-3.png","lock-unlock-4.png","lock-unlock.png","lock.png","touch-finger-lock.png"],
    lightIcons: ["door-lock.png","door-password-lock.png","hand-give-lock.png","key-lock-1.png","key-lock.png","keyhole-circle.png","keyhole-square.png","lock-1.png","lock-2.png","lock-3.png","lock-4.png","lock-5.png","lock-6.png","lock-7.png","lock-8.png","lock-circle-1.png","lock-circle.png","lock-hierarchy.png","lock-network.png","lock-password-1.png","lock-password.png","lock-shield.png","lock-unlock-1.png","lock-unlock-2.png","lock-unlock-3.png","lock-unlock-4.png","lock-unlock.png","lock.png","touch-finger-lock.png"],
  },
};

export const LoginLogout: Story = {
  args: {
    subcategoryName: "Login Logout",
    categoryPath: "interface-essential/login-logout",
    regularIcons: ["exit-1.png","exit.png","login-1.png","login-2.png","login-3.png","login-key-1.png","login-key-2.png","login-key.png","login-keys.png","login-lock.png","login.png","logout-1.png","logout-2.png","logout.png","user-logout.png"],
    lightIcons: ["exit-1.png","exit.png","login-1.png","login-2.png","login-3.png","login-key-1.png","login-key-2.png","login-key.png","login-keys.png","login-lock.png","login.png","logout-1.png","logout-2.png","logout.png","user-logout.png"],
  },
};

export const Menu: Story = {
  args: {
    subcategoryName: "Menu",
    categoryPath: "interface-essential/menu",
    regularIcons: ["navigation-menu-1.png","navigation-menu-2.png","navigation-menu-3.png","navigation-menu-4.png","navigation-menu-horizontal-1.png","navigation-menu-horizontal-2.png","navigation-menu-horizontal.png","navigation-menu-vertical.png","navigation-menu.png"],
    lightIcons: ["navigation-menu-1.png","navigation-menu-2.png","navigation-menu-3.png","navigation-menu-4.png","navigation-menu-horizontal-1.png","navigation-menu-horizontal-2.png","navigation-menu-horizontal.png","navigation-menu-vertical.png","navigation-menu.png"],
  },
};

export const Move: Story = {
  args: {
    subcategoryName: "Move",
    categoryPath: "interface-essential/move",
    regularIcons: ["cross-over.png","cursor-move-direction.png","cursor-move-down.png","cursor-move-left.png","cursor-move-right.png","cursor-move-target-down.png","cursor-move-target-left.png","cursor-move-target-right.png","cursor-move-target-up.png","cursor-move-up.png","direction-button-1.png","direction-button-2.png","direction-button-3.png","direction-button-arrows.png","direction-button-square.png","direction-button.png","move- shrink-vertical.png","move- top-right.png","move-back.png","move-bottom-left.png","move-bottom-right.png","move-down-1.png","move-down.png","move-expand-vertical.png","move-left-1.png","move-left-right.png","move-left.png","move-right-1.png","move-right.png","move-to-bottom.png","move-to-top.png","move-top-left.png","move-up-1.png","move-up.png","scroll-horizontal-1.png","scroll-horizontal.png","scroll-vertical-1.png","scroll-vertical.png"],
    lightIcons: ["cross-over.png","cursor-move-direction.png","cursor-move-down.png","cursor-move-left.png","cursor-move-right.png","cursor-move-target-down.png","cursor-move-target-left.png","cursor-move-target-right.png","cursor-move-target-up.png","cursor-move-up.png","direction-button-1.png","direction-button-2.png","direction-button-3.png","direction-button-arrows.png","direction-button-square.png","direction-button.png","move- shrink-vertical.png","move- top-right.png","move-back.png","move-bottom-left.png","move-bottom-right.png","move-down-1.png","move-down.png","move-expand-vertical.png","move-left-1.png","move-left-right.png","move-left.png","move-right-1.png","move-right.png","move-to-bottom.png","move-to-top.png","move-top-left.png","move-up-1.png","move-up.png","scroll-horizontal-1.png","scroll-horizontal.png","scroll-vertical-1.png","scroll-vertical.png"],
  },
};

export const MultimediaControls: Story = {
  args: {
    subcategoryName: "Multimedia Controls",
    categoryPath: "interface-essential/multimedia-controls",
    regularIcons: ["button-arrow-curve.png","button-fast-forward-1.png","button-fast-forward.png","button-loop-1.png","button-loop-arrow.png","button-loop-forward.png","button-loop.png","button-next.png","button-pause-1.png","button-pause.png","button-play-1.png","button-play.png","button-previous.png","button-record-1.png","button-record.png","button-refresh-arrow.png","button-refresh-arrows.png","button-refresh-one.png","button-refresh.png","button-rewind-1.png","button-rewind.png","button-shuffle.png","button-split.png","button-stop-1.png","button-stop.png","button-syncing.png","button-zigzag-1.png","button-zigzag-2.png","button-zigzag.png"],
    lightIcons: ["button-arrow-curve.png","button-fast-forward-1.png","button-fast-forward.png","button-loop-1.png","button-loop-arrow.png","button-loop-forward.png","button-loop.png","button-next.png","button-pause-1.png","button-pause.png","button-play-1.png","button-play.png","button-previous.png","button-record-1.png","button-record.png","button-refresh-arrow.png","button-refresh-arrows.png","button-refresh-one.png","button-refresh.png","button-rewind-1.png","button-rewind.png","button-shuffle.png","button-split.png","button-stop-1.png","button-stop.png","button-syncing.png","button-zigzag-1.png","button-zigzag-2.png","button-zigzag.png"],
  },
};

export const Navigate: Story = {
  args: {
    subcategoryName: "Navigate",
    categoryPath: "interface-essential/navigate",
    regularIcons: ["navigation-arrows-down-1.png","navigation-arrows-down.png","navigation-arrows-left-1.png","navigation-arrows-left.png","navigation-arrows-right-1.png","navigation-arrows-right.png","navigation-arrows-up-1.png","navigation-arrows-up.png","navigation-button-left.png","navigation-button-right.png","navigation-down-1.png","navigation-down-2.png","navigation-down-3.png","navigation-down-circle.png","navigation-down.png","navigation-left-1.png","navigation-left-2.png","navigation-left-3.png","navigation-left-4.png","navigation-left-circle-1_1.png","navigation-left-circle-2.png","navigation-left-circle.png","navigation-left.png","navigation-next.png","navigation-previous.png","navigation-right-1.png","navigation-right-2.png","navigation-right-3.png","navigation-right-4.png","navigation-right-circle-1.png","navigation-right-circle-2.png","navigation-right-circle.png","navigation-right.png","navigation-up-1.png","navigation-up-2.png","navigation-up-3.png","navigation-up-circle.png","navigation-up.png"],
    lightIcons: ["navigation-arrows-down-1.png","navigation-arrows-down.png","navigation-arrows-left-1.png","navigation-arrows-left.png","navigation-arrows-right-1.png","navigation-arrows-right.png","navigation-arrows-up-1.png","navigation-arrows-up.png","navigation-button-left.png","navigation-button-right.png","navigation-down-1.png","navigation-down-2.png","navigation-down-3.png","navigation-down-circle.png","navigation-down.png","navigation-left-1.png","navigation-left-2.png","navigation-left-3.png","navigation-left-4.png","navigation-left-circle-1.png","navigation-left-circle-1_1.png","navigation-left-circle-2.png","navigation-left-circle.png","navigation-left.png","navigation-next.png","navigation-previous.png","navigation-right-1.png","navigation-right-2.png","navigation-right-3.png","navigation-right-4.png","navigation-right-circle-1.png","navigation-right-circle-1_1.png","navigation-right-circle-2.png","navigation-right-circle.png","navigation-right.png","navigation-up-1.png","navigation-up-2.png","navigation-up-3.png","navigation-up-circle.png","navigation-up.png"],
  },
};

export const OnOff: Story = {
  args: {
    subcategoryName: "On Off",
    categoryPath: "interface-essential/on-off",
    regularIcons: ["eject-button.png","power-button-1.png","power-button-2.png","power-button.png"],
    lightIcons: ["eject-button.png","power-button-1.png","power-button-2.png","power-button.png"],
  },
};

export const Paginate: Story = {
  args: {
    subcategoryName: "Paginate",
    categoryPath: "interface-essential/paginate",
    regularIcons: ["paginate-filter-1.png","paginate-filter-10.png","paginate-filter-2.png","paginate-filter-3.png","paginate-filter-4.png","paginate-filter-5.png","paginate-filter-6.png","paginate-filter-7.png","paginate-filter-8.png","paginate-filter-9.png","paginate-filter-android.png","paginate-filter-audio.png","paginate-filter-camera.png","paginate-filter-heart.png","paginate-filter-mail.png","paginate-filter-music.png","paginate-filter-picture.png","paginate-filter-plus-1.png","paginate-filter-plus.png","paginate-filter-text.png","paginate-filter-video.png"],
    lightIcons: ["paginate-filter-1.png","paginate-filter-10.png","paginate-filter-2.png","paginate-filter-3.png","paginate-filter-4.png","paginate-filter-5.png","paginate-filter-6.png","paginate-filter-7.png","paginate-filter-8.png","paginate-filter-9.png","paginate-filter-android.png","paginate-filter-audio.png","paginate-filter-camera.png","paginate-filter-heart.png","paginate-filter-mail.png","paginate-filter-music.png","paginate-filter-picture.png","paginate-filter-plus-1.png","paginate-filter-plus.png","paginate-filter-text.png","paginate-filter-video.png"],
  },
};

export const Paragraphs: Story = {
  args: {
    subcategoryName: "Paragraphs",
    categoryPath: "interface-essential/paragraphs",
    regularIcons: ["align-landscape.png","align-portrait.png","indent-decrease-1.png","indent-decrease.png","indent-increase-1.png","indent-increase.png","indent-left.png","indent-right.png","insert-image-bottom.png","insert-image-top.png","paragraph-bullets.png","paragraph-center-align.png","paragraph-image-left.png","paragraph-image-right.png","paragraph-indent-first-line.png","paragraph-indent-last-line.png","paragraph-justified-align.png","paragraph-left-align.png","paragraph-left-to-right.png","paragraph-normal.png","paragraph-right-align.png","paragraph-right-to-left.png","paragraph-spacing.png","paragraph-two-column.png","paragraph.png"],
    lightIcons: ["align-landscape.png","align-portrait.png","indent-decrease-1.png","indent-decrease.png","indent-increase-1.png","indent-increase.png","indent-left.png","indent-right.png","insert-image-bottom.png","insert-image-top.png","paragraph-bullets.png","paragraph-center-align.png","paragraph-image-left.png","paragraph-image-right.png","paragraph-indent-first-line.png","paragraph-indent-last-line.png","paragraph-indent.png","paragraph-justified-align.png","paragraph-left-align.png","paragraph-left-to-right.png","paragraph-normal.png","paragraph-right-align.png","paragraph-right-to-left.png","paragraph-spacing.png","paragraph-two-column.png","paragraph.png"],
  },
};

export const Password: Story = {
  args: {
    subcategoryName: "Password",
    categoryPath: "interface-essential/password",
    regularIcons: ["password-approved.png","password-cursor-1.png","password-denied.png","password-desktop-approved.png","password-desktop-lock-approved.png","password-desktop-lock.png","password-desktop.png","password-key.png","password-lock-1.png","password-lock-2.png","password-lock.png","password-type.png","touch-password-approved.png","touch-password-lock.png"],
    lightIcons: ["password-approved-1.png","password-approved.png","password-cursor-1.png","password-cursor.png","password-denied-1.png","password-denied.png","password-desktop-approved.png","password-desktop-lock-approved.png","password-desktop-lock.png","password-desktop.png","password-key.png","password-lock-1.png","password-lock-2.png","password-lock.png","password-type.png","touch-password-approved-1.png","touch-password-approved.png","touch-password-lock-1.png","touch-password-lock.png"],
  },
};

export const Pin: Story = {
  args: {
    subcategoryName: "Pin",
    categoryPath: "interface-essential/pin",
    regularIcons: ["pin-2.png","pin.png"],
    lightIcons: ["pin-1.png","pin-2.png","pin.png"],
  },
};

export const Print: Story = {
  args: {
    subcategoryName: "Print",
    categoryPath: "interface-essential/print",
    regularIcons: ["print-picture.png","print-text.png"],
    lightIcons: ["print-picture.png","print-text.png"],
  },
};

export const RemoveAdd: Story = {
  args: {
    subcategoryName: "Remove Add",
    categoryPath: "interface-essential/remove-add",
    regularIcons: ["add-bold.png","add-circle-1.png","add-circle-bold.png","add-circle.png","add-square.png","add-tab.png","add.png","broken-tab-remove.png","remove-bold.png","remove-circle-bold.png","remove-circle.png","remove-square-1.png","remove-tab.png","remove.png","subtract-bold.png","subtract-circle-bold.png","subtract-circle.png","subtract-square.png","subtract-tab.png","subtract.png"],
    lightIcons: ["add-bold.png","add-circle-1.png","add-circle-bold.png","add-circle.png","add-square.png","add-tab.png","add.png","broken-tab-remove.png","remove-bold.png","remove-circle-bold.png","remove-circle.png","remove-square-1.png","remove-tab.png","remove.png","subtract-bold.png","subtract-circle-bold.png","subtract-circle.png","subtract-square.png","subtract-tab.png","subtract.png"],
  },
};

export const Resize: Story = {
  args: {
    subcategoryName: "Resize",
    categoryPath: "interface-essential/resize",
    regularIcons: ["expand-corner.png","expand-diagonal-2.png","expand-diagonal-3.png","expand-diagonal.png","expand-horizontal-2.png","expand-horizontal-3.png","expand-horizontal-4.png","expand-horizontal-left-right.png","expand-horizontal.png","expand-vertical-2.png","expand-vertical-3.png","expand-vertical-4.png","expand-vertical-left-right.png","expand-vertical.png","shrink-horizontal.png","shrink-vertical-1.png","shrink-vertical.png"],
    lightIcons: ["expand-corner.png","expand-diagonal-1.png","expand-diagonal-2.png","expand-diagonal-3.png","expand-diagonal.png","expand-horizontal-1.png","expand-horizontal-2.png","expand-horizontal-3.png","expand-horizontal-4.png","expand-horizontal-left-right.png","expand-horizontal.png","expand-vertical-1.png","expand-vertical-2.png","expand-vertical-3.png","expand-vertical-4.png","expand-vertical-left-right.png","expand-vertical.png","shrink-horizontal.png","shrink-vertical-1.png","shrink-vertical.png"],
  },
};

export const Search: Story = {
  args: {
    subcategoryName: "Search",
    categoryPath: "interface-essential/search",
    regularIcons: ["search-1.png","search-bar-1.png","search-bar.png","search-circle.png","search-remove.png","search-square.png","search.png"],
    lightIcons: ["search-1.png","search-bar-1.png","search-bar.png","search-circle.png","search-remove-1.png","search-remove.png","search-square.png","search.png"],
  },
};

export const Select: Story = {
  args: {
    subcategoryName: "Select",
    categoryPath: "interface-essential/select",
    regularIcons: ["circle-pad-finger.png","cursor-1.png","cursor-add.png","cursor-double-click-1.png","cursor-double-click-2.png","cursor-double-click-3.png","cursor-double.png","cursor-hand-1.png","cursor-hand-2.png","cursor-hand.png","cursor-information.png","cursor-question.png","cursor-select-1.png","cursor-select-2.png","cursor-select-3.png","cursor-select-4 .png","cursor-select-circle.png","cursor-select-frame-1.png","cursor-select-frame-2.png","cursor-select-frame.png","cursor-select-heart.png","cursor-select.png","cursor-target-1.png","cursor-target-2.png","cursor-target.png","cursor-type.png","cursor.png","hand-drag-1.png","hand-drag.png","hand-expand.png","touch-finger-1.png","touchpad-finger.png"],
    lightIcons: ["circle-pad-finger.png","cursor-1.png","cursor-add.png","cursor-double-click-1.png","cursor-double-click-2.png","cursor-double-click-3.png","cursor-double-click.png","cursor-double.png","cursor-hand-1.png","cursor-hand-2.png","cursor-hand.png","cursor-information.png","cursor-question.png","cursor-select-1.png","cursor-select-1_1.png","cursor-select-2.png","cursor-select-3.png","cursor-select-4 .png","cursor-select-circle-1.png","cursor-select-circle.png","cursor-select-frame-1.png","cursor-select-frame-2.png","cursor-select-frame.png","cursor-select-heart.png","cursor-select.png","cursor-target-1.png","cursor-target-2.png","cursor-target.png","cursor-type.png","cursor.png","hand-drag-1.png","hand-drag.png","hand-expand.png","touch-finger-1.png","touchpad-finger.png"],
  },
};

export const Settings: Story = {
  args: {
    subcategoryName: "Settings",
    categoryPath: "interface-essential/settings",
    regularIcons: ["cog-2.png","cog-3.png","cog-approved.png","cog-browser.png","cog-circle.png","cog-desktop.png","cog-double-2.png","cog-double.png","cog-hand-give-1.png","cog-hand-give.png","cog-play.png","cog-search-1.png","cog-search.png","cog-square.png","cog.png","hammer-1.png","hammer-wench.png","hammer.png","screwdriver.png","tool-box.png","wench-1.png","wench-double.png","wench.png"],
    lightIcons: ["cog-1.png","cog-2.png","cog-3.png","cog-approved-1.png","cog-approved.png","cog-browser.png","cog-circle.png","cog-desktop.png","cog-double-1.png","cog-double-2.png","cog-double-3.png","cog-double.png","cog-hand-give-1.png","cog-hand-give.png","cog-play-1.png","cog-play.png","cog-search-1.png","cog-search.png","cog-square-1.png","cog-square.png","cog.png","hammer-1.png","hammer-wench.png","hammer.png","screwdriver.png","tool-box.png","wench-1.png","wench-double.png","wench.png"],
  },
};

export const Share: Story = {
  args: {
    subcategoryName: "Share",
    categoryPath: "interface-essential/share",
    regularIcons: ["megaphone-1.png","megaphone.png","satellite-1.png","satellite-signal.png","satellite.png","share-1.png","share-2.png","share-3.png","share.png","user-signal-1.png","user-signal.png"],
    lightIcons: ["megaphone-1.png","megaphone.png","satellite-1.png","satellite-signal.png","satellite.png","share-1.png","share-2.png","share-3.png","share.png","user-signal-1.png","user-signal.png"],
  },
};

export const Stats: Story = {
  args: {
    subcategoryName: "Stats",
    categoryPath: "interface-essential/stats",
    regularIcons: ["graph-stats-ascend.png","graph-stats-circle.png","graph-stats-descend.png","graph-stats-square.png","graph-stats.png"],
    lightIcons: ["graph-stats-ascend.png","graph-stats-circle.png","graph-stats-descend.png","graph-stats-square.png","graph-stats.png"],
  },
};

export const Synchronize: Story = {
  args: {
    subcategoryName: "Synchronize",
    categoryPath: "interface-essential/synchronize",
    regularIcons: ["synchronize-arrow-1.png","synchronize-arrow-2.png","synchronize-arrow-clock.png","synchronize-arrow.png","synchronize-arrows-1.png","synchronize-arrows-lock.png","synchronize-arrows-search.png","synchronize-arrows-square-1.png","synchronize-arrows-square-2.png","synchronize-arrows-square-warning.png","synchronize-arrows-square.png","synchronize-arrows-three.png","synchronize-arrows-triangle.png","synchronize-arrows-warning.png","synchronize-arrows.png"],
    lightIcons: ["synchronize-arrow-1.png","synchronize-arrow-2.png","synchronize-arrow-clock.png","synchronize-arrow.png","synchronize-arrows-1.png","synchronize-arrows-lock.png","synchronize-arrows-search.png","synchronize-arrows-square-1.png","synchronize-arrows-square-2.png","synchronize-arrows-square-warning.png","synchronize-arrows-square.png","synchronize-arrows-three.png","synchronize-arrows-triangle.png","synchronize-arrows-warning.png","synchronize-arrows.png"],
  },
};

export const TagsBookmarks: Story = {
  args: {
    subcategoryName: "Tags Bookmarks",
    categoryPath: "interface-essential/tags-bookmarks",
    regularIcons: ["bookmarks-1.png","bookmarks-2.png","bookmarks-document.png","bookmarks.png","tags-1.png","tags-add.png","tags-alert.png","tags-block.png","tags-cash.png","tags-check.png","tags-double-1.png","tags-double.png","tags-download.png","tags-edit.png","tags-favorite-star.png","tags-favorite.png","tags-lock.png","tags-minus.png","tags-refresh.png","tags-remove.png","tags-search.png","tags-settings.png","tags-share.png","tags-upload.png","tags.png"],
    lightIcons: ["bookmarks-1.png","bookmarks-2.png","bookmarks-document.png","bookmarks.png","tags-1.png","tags-2.png","tags-add.png","tags-alert.png","tags-block.png","tags-cash.png","tags-check.png","tags-double-1.png","tags-double.png","tags-download.png","tags-edit.png","tags-favorite-star.png","tags-favorite.png","tags-lock.png","tags-minus.png","tags-refresh.png","tags-remove.png","tags-search.png","tags-settings.png","tags-share.png","tags-upload.png","tags.png"],
  },
};

export const TextFormating: Story = {
  args: {
    subcategoryName: "Text Formating",
    categoryPath: "interface-essential/text-formating",
    regularIcons: ["angle-brackets.png","arrange-spacing.png","caps.png","close-quote.png","eraser-1.png","eraser-2.png","eraser.png","font-expand-horizontal.png","font-expand-vertical.png","font-size.png","hash.png","italic-off.png","open-quote.png","scale-horizontal.png","scale-vertical.png","sigma.png","small-caps.png","subscript.png","superscript.png","text-bar.png","text-bold.png","text-format-1.png","text-format.png","text-input-area.png","text-italic.png","text-options.png","text-strike-through-1.png","text-strike-through.png","text-style.png","text-underline.png","type-cursor-1.png","type-cursor.png"],
    lightIcons: ["angle-brackets.png","arrange-spacing.png","caps.png","close-quote.png","eraser-1.png","eraser-2.png","eraser.png","font-expand-horizontal.png","font-expand-vertical.png","font-size.png","hash.png","italic-off.png","open-quote.png","scale-horizontal.png","scale-vertical.png","sigma.png","small-caps.png","subscript.png","superscript.png","text-bar.png","text-bold.png","text-format-1.png","text-format.png","text-input-area.png","text-italic.png","text-options.png","text-strike-through-1.png","text-strike-through.png","text-style.png","text-underline.png","type-cursor-1.png","type-cursor.png"],
  },
};

export const TextOptions: Story = {
  args: {
    subcategoryName: "Text Options",
    categoryPath: "interface-essential/text-options",
    regularIcons: ["arrange-letter.png","arrange-number.png","printer-view.png","redo.png","search-text.png","spelling-check.png","task-text.png","translate.png","undo.png"],
    lightIcons: ["arrange-letter.png","arrange-number.png","printer-view.png","redo.png","search-text.png","spelling-check.png","task-text.png","translate.png","undo.png"],
  },
};

export const Time: Story = {
  args: {
    subcategoryName: "Time",
    categoryPath: "interface-essential/time",
    regularIcons: ["hourglass-1.png","hourglass.png","stopwatch.png","time-clock-circle-1.png","time-clock-circle-2.png","time-clock-circle.png","time-clock-fire.png","time-clock-hand-1.png","time-clock-hand.png","time-clock-midnight.png","time-clock-nine.png","time-clock-six-1.png","time-clock-six.png","time-clock-three.png","time-stopwatch-3-quarters.png","time-stopwatch-half-1.png","time-stopwatch-half.png","time-stopwatch-quarter.png","time-stopwatch.png","watch-time-1.png","watch-time.png"],
    lightIcons: ["hourglass-1.png","hourglass.png","stopwatch.png","time-clock-circle-1.png","time-clock-circle-2.png","time-clock-circle.png","time-clock-fire.png","time-clock-hand-1.png","time-clock-hand.png","time-clock-midnight.png","time-clock-nine.png","time-clock-six-1.png","time-clock-six.png","time-clock-three.png","time-stopwatch-3-quarters.png","time-stopwatch-half-1.png","time-stopwatch-half.png","time-stopwatch-quarter.png","time-stopwatch.png","watch-time-1.png","watch-time.png"],
  },
};

export const TimeFiles: Story = {
  args: {
    subcategoryName: "Time Files",
    categoryPath: "interface-essential/time-files",
    regularIcons: ["time-clock-file-1.png","time-clock-file-add.png","time-clock-file-block.png","time-clock-file-cash.png","time-clock-file-check.png","time-clock-file-download.png","time-clock-file-edit.png","time-clock-file-favorite-heart.png","time-clock-file-favorite.png","time-clock-file-home.png","time-clock-file-lock.png","time-clock-file-question.png","time-clock-file-refresh.png","time-clock-file-remove.png","time-clock-file-search.png","time-clock-file-setting.png","time-clock-file-share.png","time-clock-file-shield.png","time-clock-file-subtract.png","time-clock-file-sync.png","time-clock-file-timer.png","time-clock-file-upload.png","time-clock-file-warning.png","time-clock-file.png"],
    lightIcons: ["time-clock-file-1.png","time-clock-file-add.png","time-clock-file-block.png","time-clock-file-cash.png","time-clock-file-check.png","time-clock-file-download.png","time-clock-file-edit.png","time-clock-file-favorite-heart.png","time-clock-file-favorite.png","time-clock-file-home.png","time-clock-file-lock.png","time-clock-file-question.png","time-clock-file-refresh.png","time-clock-file-remove.png","time-clock-file-search.png","time-clock-file-setting.png","time-clock-file-share.png","time-clock-file-shield.png","time-clock-file-subtract.png","time-clock-file-sync.png","time-clock-file-timer.png","time-clock-file-upload.png","time-clock-file-warning.png","time-clock-file.png"],
  },
};

export const TouchGestures: Story = {
  args: {
    subcategoryName: "Touch Gestures",
    categoryPath: "interface-essential/touch-gestures",
    regularIcons: ["gesture-double-tap.png","gesture-expand-1.png","gesture-expand-two-fingers.png","gesture-expand.png","gesture-flip-left.png","gesture-flip-right.png","gesture-scroll.png","gesture-swipe-horizontal-1.png","gesture-swipe-horizontal-2.png","gesture-swipe-horizontal-3.png","gesture-swipe-horizontal-left-1.png","gesture-swipe-horizontal-left-2.png","gesture-swipe-horizontal-left-3.png","gesture-swipe-horizontal-left-two-fingers.png","gesture-swipe-horizontal-left.png","gesture-swipe-horizontal-right-1.png","gesture-swipe-horizontal-right-2.png","gesture-swipe-horizontal-right-3.png","gesture-swipe-horizontal-right-two-fingers.png","gesture-swipe-horizontal-right.png","gesture-swipe-horizontal.png","gesture-swipe-vertical-1.png","gesture-swipe-vertical-2.png","gesture-swipe-vertical-3.png","gesture-swipe-vertical-down-1.png","gesture-swipe-vertical-down-2.png","gesture-swipe-vertical-down-3.png","gesture-swipe-vertical-down-two-fingers.png","gesture-swipe-vertical-down.png","gesture-swipe-vertical-up-1.png","gesture-swipe-vertical-up-2.png","gesture-swipe-vertical-up-3.png","gesture-swipe-vertical-up-two-fingers.png","gesture-swipe-vertical-up.png","gesture-swipe-vertical.png","gesture-tap-1.png","gesture-tap-2.png","gesture-tap-all-direction-1.png","gesture-tap-all-direction.png","gesture-tap-clock-1.png","gesture-tap-clock.png","gesture-tap-expand-all-direction.png","gesture-tap-expand-all-directions-1.png","gesture-tap-horizontal-expand.png","gesture-tap-swipe-down-1.png","gesture-tap-swipe-down.png","gesture-tap-swipe-horizontal.png","gesture-tap-swipe-left-1.png","gesture-tap-swipe-left.png","gesture-tap-swipe-right-1.png","gesture-tap-swipe-right.png","gesture-tap-swipe-up-1.png","gesture-tap-swipe-up.png","gesture-tap-swipe-vertical.png","gesture-tap-two-fingers-1.png","gesture-tap-two-fingers-clock.png","gesture-tap-two-fingers.png","gesture-tap-vertical-expand.png","gesture-tap.png","gesture-two-finger-flip-left.png","gesture-two-finger-flip-right.png","gesture-two-finger-tap-clock.png","gesture-two-finger-tap.png","gesture-two-finger-zoom-in.png","gesture-two-finger-zoom-out.png","gesture-two-fingers-expand-all.png","gesture-two-fingers-horizontal-zoom-in.png","gesture-two-fingers-scroll.png","gesture-two-fingers-swipe-down.png","gesture-two-fingers-swipe-left.png","gesture-two-fingers-swipe-right.png","gesture-two-fingers-swipe-up.png","gesture-zoom-in-two-fingers.png","gesture-zoom-in.png","gesture-zoom-out.png"],
    lightIcons: ["gesture-double-tap.png","gesture-expand-1.png","gesture-expand-two-fingers.png","gesture-expand.png","gesture-flip-left.png","gesture-flip-right.png","gesture-scroll.png","gesture-swipe-horizontal-1.png","gesture-swipe-horizontal-2.png","gesture-swipe-horizontal-3.png","gesture-swipe-horizontal-left-1.png","gesture-swipe-horizontal-left-2.png","gesture-swipe-horizontal-left-3.png","gesture-swipe-horizontal-left-two-fingers.png","gesture-swipe-horizontal-left.png","gesture-swipe-horizontal-right-1.png","gesture-swipe-horizontal-right-2.png","gesture-swipe-horizontal-right-3.png","gesture-swipe-horizontal-right-two-fingers.png","gesture-swipe-horizontal-right.png","gesture-swipe-horizontal.png","gesture-swipe-vertical-1.png","gesture-swipe-vertical-2.png","gesture-swipe-vertical-3.png","gesture-swipe-vertical-down-1.png","gesture-swipe-vertical-down-2.png","gesture-swipe-vertical-down-3.png","gesture-swipe-vertical-down-two-fingers.png","gesture-swipe-vertical-down.png","gesture-swipe-vertical-up-1.png","gesture-swipe-vertical-up-2.png","gesture-swipe-vertical-up-3.png","gesture-swipe-vertical-up-two-fingers.png","gesture-swipe-vertical-up.png","gesture-swipe-vertical.png","gesture-tap-1.png","gesture-tap-2.png","gesture-tap-all-direction-1.png","gesture-tap-all-direction.png","gesture-tap-clock-1.png","gesture-tap-clock.png","gesture-tap-expand-all-direction.png","gesture-tap-expand-all-directions-1.png","gesture-tap-horizontal-expand.png","gesture-tap-swipe-down-1.png","gesture-tap-swipe-down.png","gesture-tap-swipe-horizontal.png","gesture-tap-swipe-left-1.png","gesture-tap-swipe-left.png","gesture-tap-swipe-right-1.png","gesture-tap-swipe-right.png","gesture-tap-swipe-up-1.png","gesture-tap-swipe-up.png","gesture-tap-swipe-vertical.png","gesture-tap-two-fingers-1.png","gesture-tap-two-fingers-clock.png","gesture-tap-two-fingers.png","gesture-tap-vertical-expand.png","gesture-tap.png","gesture-two-finger-flip-left.png","gesture-two-finger-flip-right.png","gesture-two-finger-tap-clock.png","gesture-two-finger-tap.png","gesture-two-finger-zoom-in.png","gesture-two-finger-zoom-out.png","gesture-two-fingers-expand-all.png","gesture-two-fingers-horizontal-zoom-in.png","gesture-two-fingers-scroll.png","gesture-two-fingers-swipe-down.png","gesture-two-fingers-swipe-left.png","gesture-two-fingers-swipe-right.png","gesture-two-fingers-swipe-up.png","gesture-zoom-in-two-fingers.png","gesture-zoom-in.png","gesture-zoom-out.png"],
  },
};

export const Touchid: Story = {
  args: {
    subcategoryName: "Touchid",
    categoryPath: "interface-essential/touchid",
    regularIcons: ["touch-finger.png","touch-id-1.png","touch-id-2.png","touch-id-3.png","touch-id-4.png","touch-id-5.png","touch-id-approved-1.png","touch-id-approved.png","touch-id-denied-1.png","touch-id-denied.png","touch-id-desktop.png","touch-id-lock-1.png","touch-id-lock.png","touch-id-search.png","touch-id-smartphone-1.png","touch-id-target.png","touch-id-user.png","touch-id.png"],
    lightIcons: ["touch-finger-1.png","touch-finger.png","touch-id-1.png","touch-id-2.png","touch-id-3.png","touch-id-4.png","touch-id-5.png","touch-id-approved-1.png","touch-id-approved.png","touch-id-denied-1.png","touch-id-denied.png","touch-id-desktop.png","touch-id-lock-1.png","touch-id-lock.png","touch-id-search.png","touch-id-smartphone-1.png","touch-id-smartphone.png","touch-id-target.png","touch-id-user.png","touch-id.png"],
  },
};

export const View: Story = {
  args: {
    subcategoryName: "View",
    categoryPath: "interface-essential/view",
    regularIcons: ["binocular.png","view-1.png","view-circle-1.png","view-circle.png","view-off.png","view-square.png"],
    lightIcons: ["binocular.png","view-1.png","view-circle-1.png","view-circle.png","view-off.png","view-square.png","view.png"],
  },
};

export const Voiceid: Story = {
  args: {
    subcategoryName: "Voiceid",
    categoryPath: "interface-essential/voiceid",
    regularIcons: ["voice-id-approved.png","voice-id-denied.png","voice-id-lock.png","voice-id-smartphone.png","voice-id-user.png","voice-id.png"],
    lightIcons: ["voice-id-approved.png","voice-id-denied.png","voice-id-lock.png","voice-id-smartphone.png","voice-id-user.png","voice-id.png"],
  },
};

export const Wireless: Story = {
  args: {
    subcategoryName: "Wireless",
    categoryPath: "interface-essential/wireless",
    regularIcons: ["rss-feed-square.png","rss-feed.png","wifi-signal-1.png","wifi-signal-2.png","wifi-signal-3.png","wifi-signal-4.png","wifi-signal-5.png","wifi-signal.png"],
    lightIcons: ["rss-feed-square.png","rss-feed.png","wifi-signal-1.png","wifi-signal-2.png","wifi-signal-3.png","wifi-signal-4.png","wifi-signal-5.png","wifi-signal.png"],
  },
};

export const Zoom: Story = {
  args: {
    subcategoryName: "Zoom",
    categoryPath: "interface-essential/zoom",
    regularIcons: ["zoom-in-page.png","zoom-in.png","zoom-out-page.png","zoom-out.png"],
    lightIcons: ["zoom-in-1.png","zoom-in-page.png","zoom-in.png","zoom-out-1.png","zoom-out-page.png","zoom-out.png"],
  },
};
