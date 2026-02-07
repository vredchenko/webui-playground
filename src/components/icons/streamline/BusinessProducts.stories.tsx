import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Business Products',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Business Products',
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

export const ABTesting: Story = {
  args: {
    subcategoryName: "A B Testing",
    categoryPath: "business-products/a-b-testing",
    regularIcons: ["ab-testing-award.png","ab-testing-browsers.png","ab-testing-chemistry-monitor.png","ab-testing-chemistry.png","ab-testing-monitors.png","ab-testing-smartphones.png"],
    lightIcons: [],
  },
};

export const Advertising: Story = {
  args: {
    subcategoryName: "Advertising",
    categoryPath: "business-products/advertising",
    regularIcons: ["ads-window.png","advertising-megaphone.png","billboard.png","flyer-taken.png","invitation.png","laptop-announcement.png","promo-mail.png","shopping-voucher-mail.png"],
    lightIcons: [],
  },
};

export const Analytics: Story = {
  args: {
    subcategoryName: "Analytics",
    categoryPath: "business-products/analytics",
    regularIcons: ["analytics-bars-3d.png","analytics-bars-circle.png","analytics-bars-horizontal.png","analytics-bars.png","analytics-board-bars.png","analytics-board-graph-line.png","analytics-graph-bar-1.png","analytics-graph-bar.png","analytics-graph-line.png","analytics-graph-lines.png","analytics-graph.png","analytics-mountain.png","analytics-net.png","analytics-pie-1.png","analytics-pie-2.png","analytics-pie.png"],
    lightIcons: [],
  },
};

export const Business: Story = {
  args: {
    subcategoryName: "Business",
    categoryPath: "business-products/business",
    regularIcons: ["briefcase.png","cash-briefcase.png","cash-bulb.png","cash-eye.png","cash-map-directions.png","cash-molecule.png","cash-network.png","cash-pin-map.png","cash-pin-radius.png","cash-pin.png","cash-search.png","cash-shield.png","cash-target.png","cash-toggle.png","cash-toggles.png","cash-user-1.png","cash-user-man-message.png","cash-user-message.png","cash-user-woman-message.png","cash-user.png","network-user.png","profile-cash-message.png","profile-man-cash-message.png","profile-user-cash-message.png","profile-woman-cash-message.png","user-cash-scale-unbalance-1.png","user-cash-scale-unbalance.png","user-cash-scale.png","user-network.png"],
    lightIcons: [],
  },
};

export const BusinessDeals: Story = {
  args: {
    subcategoryName: "Business Deals",
    categoryPath: "business-products/business-deals",
    regularIcons: ["business-contract-approve.png","business-contract-break.png","business-contract-give.png","business-contract-handshake-sign.png","business-deal-cash-1.png","business-deal-cash-2.png","business-deal-cash-3.png","business-deal-cash-exchange.png","business-deal-cash.png","business-deal-handshake-circle.png","business-deal-handshake.png","business-deal-men-cash.png","business-deal-negotiate.png","business-deal-women-cash.png"],
    lightIcons: [],
  },
};

export const BusinessMethaphors: Story = {
  args: {
    subcategoryName: "Business Methaphors",
    categoryPath: "business-products/business-methaphors",
    regularIcons: ["business-big-small-fish.png","business-boat-success.png","business-burn-money.png","business-crossroad.png","business-flame.png","business-human-plant.png","business-ladder.png","business-lucky-cat.png","business-magic-rabbit-hide.png","business-magic-rabbit.png","business-message-bottle.png","business-money-basket.png","business-paper-boat.png","business-pearl.png","business-piggy-bank-broken.png","business-rabbit-hat.png","business-scale.png","business-shark-1.png","business-shark.png","business-team-goal.png","business-trip-plane.png","business-trophy.png"],
    lightIcons: [],
  },
};

export const DataFiles: Story = {
  args: {
    subcategoryName: "Data Files",
    categoryPath: "business-products/data-files",
    regularIcons: ["data-file-add.png","data-file-bars-add.png","data-file-bars-cash.png","data-file-bars-check.png","data-file-bars-clock.png","data-file-bars-disable.png","data-file-bars-download.png","data-file-bars-edit.png","data-file-bars-heart.png","data-file-bars-home.png","data-file-bars-info.png","data-file-bars-lock.png","data-file-bars-question.png","data-file-bars-refresh.png","data-file-bars-remove.png","data-file-bars-search.png","data-file-bars-settings.png","data-file-bars-share.png","data-file-bars-shield.png","data-file-bars-star.png","data-file-bars-subtract.png","data-file-bars-sync.png","data-file-bars-upload.png","data-file-bars-warning.png","data-file-bars.png","data-file-cash.png","data-file-check.png","data-file-clock.png","data-file-disable.png","data-file-download.png","data-file-edit.png","data-file-graph.png","data-file-heart.png","data-file-home.png","data-file-information.png","data-file-lock.png","data-file-question.png","data-file-refresh.png","data-file-remove.png","data-file-search.png","data-file-settings.png","data-file-share.png","data-file-shield.png","data-file-star.png","data-file-subtract.png","data-file-sync.png","data-file-upload.png","data-file-warning.png"],
    lightIcons: [],
  },
};

export const MonetizationProfits: Story = {
  args: {
    subcategoryName: "Monetization Profits",
    categoryPath: "business-products/monetization-profits",
    regularIcons: ["monetization-approve.png","monetization-bill-magnet.png","monetization-browser-bag.png","monetization-dollar-bill-magnet.png","monetization-idea.png","monetization-mouse.png","monetization-phone.png","monetization-sponsor.png","monetization-structure.png","monetization-tablet.png","monetization-team.png","monetization-touch-browser.png","monetization-touch-coin.png","monetization-user-bag.png","monetization-user-coins.png","monetization-user-laptop.png","monetization-user-monitor-1.png","monetization-user-monitor.png"],
    lightIcons: [],
  },
};

export const Optimization: Story = {
  args: {
    subcategoryName: "Optimization",
    categoryPath: "business-products/optimization",
    regularIcons: ["optimization-clock.png","optimization-graph-line.png","optimization-graph.png","optimization-plane.png","optimization-rocket-graph.png","optimization-rocket-growth.png","optimization-timer-1.png","optimization-timer.png"],
    lightIcons: [],
  },
};

export const Performances: Story = {
  args: {
    subcategoryName: "Performances",
    categoryPath: "business-products/performances",
    regularIcons: ["performance-decrease-1.png","performance-decrease.png","performance-graph-calculator.png","performance-increase-1.png","performance-increase-2.png","performance-increase-mail.png","performance-increase.png","performance-money-decrease.png","performance-money-increase.png","performance-phone-increase.png","performance-presentation-cart.png","performance-presentation-graph.png","performance-tablet-increase.png","performance-user-graph.png"],
    lightIcons: [],
  },
};

export const ProductLaunch: Story = {
  args: {
    subcategoryName: "Product Launch",
    categoryPath: "business-products/product-launch",
    regularIcons: ["laptop-launch.png","launch-go-flag.png","launch-go.png","mobile-launch.png","startup-launch-1.png","startup-launch.png"],
    lightIcons: [],
  },
};

export const Seo: Story = {
  args: {
    subcategoryName: "Seo",
    categoryPath: "business-products/seo",
    regularIcons: ["seo-eye.png","seo-label.png","seo-network-1.png","seo-network-map.png","seo-network.png","seo-search-eye.png","seo-search-graph-first-place.png","seo-search-graph.png","seo-search-laptop.png","seo-search-one.png","seo-search-page.png","seo-search-reward.png","seo-search-settings.png","seo-search-star.png","seo-search.png","seo-trophy.png","seo-zoom.png"],
    lightIcons: [],
  },
};

export const Strategy: Story = {
  args: {
    subcategoryName: "Strategy",
    categoryPath: "business-products/strategy",
    regularIcons: ["business-climb-top-1.png","business-climb-top.png","graph-statistics-coffee.png","maze-strategy.png","strategy-chess.png","strategy-split.png","target-center-1.png","target-center-monitor.png","target-center-phone.png","target-center.png","target-correct.png","target-miss.png","target-path.png"],
    lightIcons: [],
  },
};
