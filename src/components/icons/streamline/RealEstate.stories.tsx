import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Real Estate',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Real Estate',
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

export const ActionsBuildings: Story = {
  args: {
    subcategoryName: "Actions Buildings",
    categoryPath: "real-estate/actions-buildings",
    regularIcons: ["real-estate-action-building-add.png","real-estate-action-building-badge.png","real-estate-action-building-check.png","real-estate-action-building-disable.png","real-estate-action-building-dollar.png","real-estate-action-building-download.png","real-estate-action-building-heart.png","real-estate-action-building-information.png","real-estate-action-building-key.png","real-estate-action-building-like.png","real-estate-action-building-location.png","real-estate-action-building-lock.png","real-estate-action-building-megaphone.png","real-estate-action-building-minus.png","real-estate-action-building-percent.png","real-estate-action-building-pin.png","real-estate-action-building-remove.png","real-estate-action-building-search.png","real-estate-action-building-settings.png","real-estate-action-building-shield.png","real-estate-action-building-star.png","real-estate-action-building-upload.png","real-estate-action-building-warning.png"],
    lightIcons: [],
  },
};

export const ActionsHouses: Story = {
  args: {
    subcategoryName: "Actions Houses",
    categoryPath: "real-estate/actions-houses",
    regularIcons: ["real-estate-action-house-add.png","real-estate-action-house-check.png","real-estate-action-house-disable.png","real-estate-action-house-dollar.png","real-estate-action-house-download.png","real-estate-action-house-heart.png","real-estate-action-house-information.png","real-estate-action-house-key.png","real-estate-action-house-like.png","real-estate-action-house-location.png","real-estate-action-house-lock.png","real-estate-action-house-minus.png","real-estate-action-house-percent.png","real-estate-action-house-pin.png","real-estate-action-house-remove.png","real-estate-action-house-ribbon.png","real-estate-action-house-settings-1.png","real-estate-action-house-settings.png","real-estate-action-house-shield.png","real-estate-action-house-star-1.png","real-estate-action-house-star.png","real-estate-action-house-upload.png","real-estate-action-house-warning.png","real-estate-action-house-wrench.png"],
    lightIcons: [],
  },
};

export const Advertising: Story = {
  args: {
    subcategoryName: "Advertising",
    categoryPath: "real-estate/advertising",
    regularIcons: ["advertising-billboard-building.png","advertising-billboard-house.png","advertising-megaphone.png"],
    lightIcons: [],
  },
};

export const AppWebstes: Story = {
  args: {
    subcategoryName: "App Webstes",
    categoryPath: "real-estate/app-webstes",
    regularIcons: ["real-estate-app-building-laptop-1.png","real-estate-app-building-monitor.png","real-estate-app-building-smartphone.png","real-estate-app-house-laptop-1.png","real-estate-app-house-monitor.png","real-estate-app-house-smartphone.png"],
    lightIcons: [],
  },
};

export const Deals: Story = {
  args: {
    subcategoryName: "Deals",
    categoryPath: "real-estate/deals",
    regularIcons: ["real-estate-deal-document-building.png","real-estate-deal-document.png","real-estate-deal-key-1.png","real-estate-deal-key.png","real-estate-deal-pay-building.png","real-estate-deal-pay-house.png","real-estate-deal-shake-building.png","real-estate-deal-shake.png"],
    lightIcons: [],
  },
};

export const Favorites: Story = {
  args: {
    subcategoryName: "Favorites",
    categoryPath: "real-estate/favorites",
    regularIcons: ["real-estate-favorite-building-choose.png","real-estate-favorite-hands-heart.png","real-estate-favorite-heart-building.png","real-estate-favorite-heart-house.png","real-estate-favorite-hold-building.png","real-estate-favorite-hold-house.png","real-estate-favorite-house-choose.png","real-estate-favorite-house-pick.png","real-estate-favorite-house-rating.png"],
    lightIcons: [],
  },
};

export const InsuranceProtection: Story = {
  args: {
    subcategoryName: "Insurance Protection",
    categoryPath: "real-estate/insurance-protection",
    regularIcons: ["real-estate-insurance-building.png","real-estate-insurance-dollar-hand.png","real-estate-insurance-house.png"],
    lightIcons: [],
  },
};

export const Location: Story = {
  args: {
    subcategoryName: "Location",
    categoryPath: "real-estate/location",
    regularIcons: ["real-estate-location-building-pin.png","real-estate-location-house-pin-1.png","real-estate-location-house-pin.png"],
    lightIcons: [],
  },
};

export const MapsDimensions: Story = {
  args: {
    subcategoryName: "Maps Dimensions",
    categoryPath: "real-estate/maps-dimensions",
    regularIcons: ["real-estate-dimensions-block.png","real-estate-dimensions-building-ruler.png","real-estate-dimensions-building.png","real-estate-dimensions-house-ruler.png","real-estate-dimensions-house.png","real-estate-dimensions-map.png","real-estate-dimensions-plan-1.png","real-estate-dimensions-plan.png"],
    lightIcons: [],
  },
};

export const Market: Story = {
  args: {
    subcategoryName: "Market",
    categoryPath: "real-estate/market",
    regularIcons: ["real-estate-market-building-decrease.png","real-estate-market-building-fall.png","real-estate-market-building-increase.png","real-estate-market-building-rise.png","real-estate-market-building.png","real-estate-market-calculator-building.png","real-estate-market-calculator-house.png","real-estate-market-house-decrease.png","real-estate-market-house-fall.png","real-estate-market-house-increase.png","real-estate-market-house-rise.png","real-estate-market-house.png","real-estate-market-scale.png"],
    lightIcons: [],
  },
};

export const RealEstate: Story = {
  args: {
    subcategoryName: "Real Estate",
    categoryPath: "real-estate/real-estate",
    regularIcons: ["real-estate-building-house.png","real-estate-building-person.png","real-estate-building.png","real-estate-couple-search-house.png","real-estate-house-person.png","real-estate-house.png","real-estate-message-building-1.png","real-estate-message-building.png","real-estate-message-buy-building.png","real-estate-message-chat-building.png","real-estate-message-chat-house.png","real-estate-message-couple-building.png","real-estate-message-house-1.png","real-estate-message-house-buy.png","real-estate-message-house.png","real-estate-message-person-building-1.png","real-estate-message-person-building.png","real-estate-neighbourhood.png","real-estate-person-search-house-1.png","real-estate-person-search-house.png","real-estate-search-building.png","real-estate-search-house-1.png","real-estate-search-house-2.png","real-estate-search-house.png","real-estate-truck-house.png"],
    lightIcons: [],
  },
};

export const Search: Story = {
  args: {
    subcategoryName: "Search",
    categoryPath: "real-estate/search",
    regularIcons: ["real-estate-search-building.png","real-estate-search-house-1.png","real-estate-search-house-target.png","real-estate-search-house.png"],
    lightIcons: [],
  },
};

export const Settings: Story = {
  args: {
    subcategoryName: "Settings",
    categoryPath: "real-estate/settings",
    regularIcons: ["real-estate-settings-building-2.png","real-estate-settings-building.png","real-estate-settings-house-2.png","real-estate-settings-house-wrench.png","real-estate-settings-house.png"],
    lightIcons: [],
  },
};

export const Signs: Story = {
  args: {
    subcategoryName: "Signs",
    categoryPath: "real-estate/signs",
    regularIcons: ["real-estate-sign-board-rent.png","real-estate-sign-board-sale.png","real-estate-sign-board-sold-1.png","real-estate-sign-board-sold.png","real-estate-sign-building-rent.png","real-estate-sign-building-sale.png","real-estate-sign-building-sold.png","real-estate-sign-for-rent.png","real-estate-sign-for-sale.png","real-estate-sign-house-rent.png","real-estate-sign-house-sale.png","real-estate-sign-house-sold.png","real-estate-sign-rent-1.png","real-estate-sign-rent.png","real-estate-sign-sale-1.png","real-estate-sign-sale.png","real-estate-sign-sold.png"],
    lightIcons: [],
  },
};

export const Update: Story = {
  args: {
    subcategoryName: "Update",
    categoryPath: "real-estate/update",
    regularIcons: ["real-estate-update-building-refresh.png","real-estate-update-house-refresh.png","real-estate-update-house-sync.png"],
    lightIcons: [],
  },
};
