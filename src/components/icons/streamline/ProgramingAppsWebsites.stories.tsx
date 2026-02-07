import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Programing Apps Websites',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Programing Apps Websites',
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

export const AndroidApps: Story = {
  args: {
    subcategoryName: "Android Apps",
    categoryPath: "programing-apps-websites/android-apps",
    regularIcons: ["android-1.png","android-download.png","android-settings.png","android-sync.png","android-upload.png","android.png"],
    lightIcons: [],
  },
};

export const Apps: Story = {
  args: {
    subcategoryName: "Apps",
    categoryPath: "programing-apps-websites/apps",
    regularIcons: ["app-window-1.png","app-window-add.png","app-window-badge.png","app-window-bookmark.png","app-window-cash-1.png","app-window-cash.png","app-window-check.png","app-window-clock.png","app-window-cloud.png","app-window-code.png","app-window-disable.png","app-window-download-1.png","app-window-download-2.png","app-window-download.png","app-window-edit.png","app-window-error-404.png","app-window-expand-1.png","app-window-expand.png","app-window-eye.png","app-window-flag.png","app-window-flash.png","app-window-four.png","app-window-graph-1.png","app-window-graph.png","app-window-hammer.png","app-window-heart.png","app-window-home.png","app-window-layout-1.png","app-window-layout.png","app-window-link.png","app-window-lock-1.png","app-window-lock.png","app-window-mail-at.png","app-window-mail.png","app-window-minimize.png","app-window-minimize_1.png","app-window-module.png","app-window-move-down.png","app-window-move-left.png","app-window-move-right.png","app-window-move-up.png","app-window-multiple.png","app-window-music.png","app-window-next.png","app-window-password-correct.png","app-window-pie-chart.png","app-window-question.png","app-window-refresh.png","app-window-remove.png","app-window-rss.png","app-window-search-1.png","app-window-search-text.png","app-window-search.png","app-window-settings.png","app-window-share.png","app-window-skull.png","app-window-small.png","app-window-star-1.png","app-window-star.png","app-window-subtract.png","app-window-sync.png","app-window-text-1.png","app-window-text.png","app-window-two.png","app-window-type.png","app-window-upload-1.png","app-window-upload-2.png","app-window-upload.png","app-window-user.png","app-window-warning.png","app-window.png","laptop-heart.png","laptop-home.png","laptop-shield.png","laptop-shopping-cart.png","laptop-user.png","monitor-camera.png","monitor-chart.png","monitor-graph-line.png","monitor-graph.png","monitor-heart.png","monitor-home.png","monitor-movie.png","monitor-play.png","monitor-shield.png","monitor-shopping-cart.png","monitor-user.png"],
    lightIcons: [],
  },
};

export const BugSecurity: Story = {
  args: {
    subcategoryName: "Bug Security",
    categoryPath: "programing-apps-websites/bug-security",
    regularIcons: ["computer-bug-1.png","computer-bug-search.png","computer-bug.png","computer-shield.png","firewall.png","security-lock.png","security-remote-lock.png","security-remote-unlock.png","security-unlock.png","shield-add.png","shield-bug.png","shield-check-1.png","shield-check.png","shield-globe.png","shield-home.png","shield-key.png","shield-lock.png","shield-monitor.png","shield-phone.png","shield-search.png","shield-settings.png","shield-unlock.png","shield-wall.png","shield-warning.png"],
    lightIcons: [],
  },
};

export const CodingFiles: Story = {
  args: {
    subcategoryName: "Coding Files",
    categoryPath: "programing-apps-websites/coding-files",
    regularIcons: ["apk-1.png","apk.png","app-1.png","app.png","asp-1.png","asp.png","bin-1.png","bin.png","c-plus-plus-1.png","c-plus-plus.png","css-1.png","css.png","csv-1.png","csv.png","dat-1.png","dat.png","dmg-1.png","dmg.png","exe-1.png","exe.png","file-apk.png","file-app.png","file-asp.png","file-bin.png","file-c-plus-plus.png","file-code-1.png","file-code-2.png","file-code-add-1.png","file-code-add.png","file-code-cash-1.png","file-code-cash.png","file-code-check-1.png","file-code-check.png","file-code-clock-1.png","file-code-clock.png","file-code-disable-1.png","file-code-disable.png","file-code-download-1.png","file-code-download.png","file-code-edit-1.png","file-code-edit.png","file-code-heart-1.png","file-code-heart.png","file-code-home-1.png","file-code-home.png","file-code-information-1.png","file-code-information.png","file-code-lock-1.png","file-code-lock.png","file-code-question-1.png","file-code-question.png","file-code-refresh-1.png","file-code-refresh.png","file-code-remove-1.png","file-code-remove.png","file-code-search-1.png","file-code-search.png","file-code-settings-1.png","file-code-settings.png","file-code-share-1.png","file-code-share.png","file-code-shield-1.png","file-code-shield.png","file-code-star-1.png","file-code-star.png","file-code-subtract-1.png","file-code-subtract.png","file-code-sync-1.png","file-code-sync.png","file-code-upload-1.png","file-code-upload.png","file-code-warning-1.png","file-code-warning.png","file-code.png","file-css.png","file-csv.png","file-dat.png","file-database.png","file-dmg.png","file-exe.png","file-hqx.png","file-html.png","file-iso.png","file-java.png","file-js.png","file-php.png","file-pl.png","file-py.png","file-rb.png","file-sql.png","file-xml.png","file-ym.png","hqx-1.png","hqx.png","html-1.png","html.png","iso-1.png","iso.png","java-1.png","java.png","js-1.png","js.png","php-1.png","php.png","pl-1.png","pl.png","py-1.png","py.png","rb-1.png","rb.png","sql-1.png","sql.png","xml-1.png","xml.png","ym-1.png","ym.png"],
    lightIcons: [],
  },
};

export const Databases: Story = {
  args: {
    subcategoryName: "Databases",
    categoryPath: "programing-apps-websites/databases",
    regularIcons: ["database-1.png","database-2.png","database-add.png","database-bug.png","database-cash.png","database-check.png","database-clock.png","database-connect.png","database-disable.png","database-download.png","database-edit.png","database-flash.png","database-hand.png","database-heart.png","database-hierarchy.png","database-key.png","database-lock.png","database-monitor-sync.png","database-question.png","database-refresh.png","database-remove.png","database-search.png","database-settings.png","database-share-1.png","database-share.png","database-star.png","database-subtract.png","database-sync.png","database-upload.png","database-warning.png","database.png"],
    lightIcons: [],
  },
};

export const LearningPrograming: Story = {
  args: {
    subcategoryName: "Learning Programing",
    categoryPath: "programing-apps-websites/learning-programing",
    regularIcons: ["monitor-programming-book.png","programming-book.png","programming-flag.png"],
    lightIcons: [],
  },
};

export const PluginsModules: Story = {
  args: {
    subcategoryName: "Plugins Modules",
    categoryPath: "programing-apps-websites/plugins-modules",
    regularIcons: ["module-four.png","module-hand-puzzle-1.png","module-hand-puzzle.png","module-hands-puzzle.png","module-phone-puzzle.png","module-puzzle.png","module-three-1.png","module-three-2.png","module-three.png","module.png"],
    lightIcons: [],
  },
};

export const Programing: Story = {
  args: {
    subcategoryName: "Programing",
    categoryPath: "programing-apps-websites/programing",
    regularIcons: ["programming-browser-1.png","programming-browser.png","programming-code.png","programming-hold-code-1.png","programming-hold-code-2.png","programming-hold-code.png","programming-hold-laptop-1.png","programming-hold-laptop.png","programming-keyboard-type.png","programming-laptop-type.png","programming-monitor-type.png","programming-monitor.png","programming-search-browser.png","programming-search.png","programming-team-chat-2.png","programming-team-chat-3.png","programming-team-chat.png","programming-user-1.png","programming-user-chat-1.png","programming-user-chat-2.png","programming-user-chat-woman.png","programming-user-chat.png","programming-user-head.png","programming-user-woman.png","programming-user.png"],
    lightIcons: [],
  },
};

export const ProgramingLanguages: Story = {
  args: {
    subcategoryName: "Programing Languages",
    categoryPath: "programing-apps-websites/programing-languages",
    regularIcons: ["programming-language-code.png","programming-language-css-3.png","programming-language-css.png","programming-language-hash.png","programming-language-html-5.png","programming-language-html.png","programming-language-http.png","programming-language-monitor-css.png","programming-language-monitor-html.png"],
    lightIcons: [],
  },
};

export const ResponsiveDesign: Story = {
  args: {
    subcategoryName: "Responsive Design",
    categoryPath: "programing-apps-websites/responsive-design",
    regularIcons: ["responsive-design-1.png","responsive-design-cursor.png","responsive-design-expand-1.png","responsive-design-expand.png","responsive-design-hand.png","responsive-design-image.png","responsive-design-laptop-1.png","responsive-design-laptop.png","responsive-design-phone.png","responsive-design.png"],
    lightIcons: [],
  },
};

export const UiComponents: Story = {
  args: {
    subcategoryName: "Ui Components",
    categoryPath: "programing-apps-websites/ui-components",
    regularIcons: ["live-notice.png","ui-browser-slider-1.png","ui-browser-slider.png","ui-columns.png","ui-page-slider.png","ui-phone-slider-horizontal.png","ui-phone-slider-vertical.png","ui-screen-split.png","ui-scroll-down.png","ui-webpage-bullets.png","ui-webpage-check.png","ui-webpage-play-1.png","ui-webpage-play.png","ui-webpage-remove.png","ui-webpage-slider.png","ui-webpage-template-add.png","ui-webpage-template.png","user-live.png","webpage-live.png"],
    lightIcons: [],
  },
};

export const WebsiteDevelopment: Story = {
  args: {
    subcategoryName: "Website Development",
    categoryPath: "programing-apps-websites/website-development",
    regularIcons: ["browser-com.png","browser-hand.png","browser-page-account.png","browser-page-hierarchy.png","browser-page-layout.png","browser-page-mail.png","browser-page-media.png","browser-page-text-1.png","browser-page-text-2.png","code-write.png","hierarchy.png","monitor-code-send.png","monitor-page.png","monitor-touch.png","monitor-www.png","website-build.png"],
    lightIcons: [],
  },
};
