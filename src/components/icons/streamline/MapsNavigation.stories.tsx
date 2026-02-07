import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Maps Navigation',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Maps Navigation',
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

export const AddRemoveFavorites: Story = {
  args: {
    subcategoryName: "Add Remove Favorites",
    categoryPath: "maps-navigation/add-remove-favorites",
    regularIcons: ["pin-add-1.png","pin-add.png","pin-remove-1.png","pin-remove-2.png","pin-remove.png","pin-star.png"],
    lightIcons: [],
  },
};

export const Compass: Story = {
  args: {
    subcategoryName: "Compass",
    categoryPath: "maps-navigation/compass",
    regularIcons: ["compass-1.png","compass-2.png","compass-arrow.png","compass-direction.png","compass-directions.png","compass-east.png","compass-north.png","compass-south-1.png","compass-south.png","compass-west.png","compass.png"],
    lightIcons: [],
  },
};

export const Earth: Story = {
  args: {
    subcategoryName: "Earth",
    categoryPath: "maps-navigation/earth",
    regularIcons: ["earth-1.png","earth-3.png","earth-add.png","earth-block.png","earth-cash.png","earth-check.png","earth-download.png","earth-edit.png","earth-heart.png","earth-locate.png","earth-lock.png","earth-model-1.png","earth-model-2.png","earth-move.png","earth-pin-1.png","earth-pin-2.png","earth-question.png","earth-refresh.png","earth-remove.png","earth-search.png","earth-setting.png","earth-share.png","earth-star.png","earth-subtract.png","earth-sync.png","earth-time.png","earth-upload.png","earth-warning.png"],
    lightIcons: [],
  },
};

export const Location: Story = {
  args: {
    subcategoryName: "Location",
    categoryPath: "maps-navigation/location",
    regularIcons: ["location-off-target.png","location-target-1.png","location-target.png","location-user.png"],
    lightIcons: [],
  },
};

export const Maps: Story = {
  args: {
    subcategoryName: "Maps",
    categoryPath: "maps-navigation/maps",
    regularIcons: ["maps-mark.png","maps-pin-1.png","maps-pin-2.png","maps-pin.png","maps-search.png","maps.png"],
    lightIcons: [],
  },
};

export const Pins: Story = {
  args: {
    subcategoryName: "Pins",
    categoryPath: "maps-navigation/pins",
    regularIcons: ["pin-1.png","pin-2.png","pin-3.png","pin-4.png","pin-location-1.png","pin-location-2.png","pin-location.png","pin-map-1.png","pin-map.png","pin-monitor.png","pin-shine.png","pin-x-mark-1.png","pin-x-mark-2.png","pin-x-mark-3.png","pin-x-mark-4.png","pin-x-mark.png","pin.png"],
    lightIcons: [],
  },
};

export const PinsStyleOne: Story = {
  args: {
    subcategoryName: "Pins Style One",
    categoryPath: "maps-navigation/pins-style-one",
    regularIcons: ["style-one-pin-bolt.png","style-one-pin-book.png","style-one-pin-car.png","style-one-pin-cart.png","style-one-pin-check.png","style-one-pin-church.png","style-one-pin-circle-add.png","style-one-pin-circle-minus.png","style-one-pin-circle-remove.png","style-one-pin-cross.png","style-one-pin-dollar.png","style-one-pin-drink.png","style-one-pin-gas.png","style-one-pin-global.png","style-one-pin-gym.png","style-one-pin-home.png","style-one-pin-information.png","style-one-pin-photography.png","style-one-pin-plane.png","style-one-pin-question.png","style-one-pin-restaurant.png","style-one-pin-skull.png","style-one-pin-star.png","style-one-pin-target.png","style-one-pin-train.png","style-one-pin-tunnel.png","style-one-pin-user.png","style-one-pin-warning.png","style-one-pin-wifi.png","style-one-pin.png"],
    lightIcons: [],
  },
};

export const PinsStyleThree: Story = {
  args: {
    subcategoryName: "Pins Style Three",
    categoryPath: "maps-navigation/pins-style-three",
    regularIcons: ["style-three-pin-anchor.png","style-three-pin-arrow-all-direction.png","style-three-pin-arrow-diagonal.png","style-three-pin-badge.png","style-three-pin-baseball-1.png","style-three-pin-baseball.png","style-three-pin-bed.png","style-three-pin-bench-1.png","style-three-pin-bench.png","style-three-pin-bicycle.png","style-three-pin-bill.png","style-three-pin-bin.png","style-three-pin-block.png","style-three-pin-boat.png","style-three-pin-bow.png","style-three-pin-box.png","style-three-pin-braille.png","style-three-pin-bread-slice.png","style-three-pin-brush.png","style-three-pin-burger.png","style-three-pin-bus.png","style-three-pin-call.png","style-three-pin-camera.png","style-three-pin-cart.png","style-three-pin-cc.png","style-three-pin-charging-cable.png","style-three-pin-check-radioactive.png","style-three-pin-chemistry-epruvette.png","style-three-pin-cup.png","style-three-pin-dam.png","style-three-pin-dentist.png","style-three-pin-diamond.png","style-three-pin-direction-arrow.png","style-three-pin-disabled.png","style-three-pin-diving.png","style-three-pin-drink-food.png","style-three-pin-education-1.png","style-three-pin-education.png","style-three-pin-email.png","style-three-pin-facade.png","style-three-pin-fire.png","style-three-pin-fishing.png","style-three-pin-flower.png","style-three-pin-golf.png","style-three-pin-gym.png","style-three-pin-hair-dryer.png","style-three-pin-hospital-1.png","style-three-pin-ice-skating.png","style-three-pin-ink.png","style-three-pin-islam.png","style-three-pin-judaism.png","style-three-pin-lotus.png","style-three-pin-mailbox.png","style-three-pin-microphone.png","style-three-pin-movie-reel.png","style-three-pin-navigation-location-1.png","style-three-pin-note.png","style-three-pin-notes.png","style-three-pin-oc.png","style-three-pin-palette.png","style-three-pin-parking.png","style-three-pin-paw.png","style-three-pin-pill.png","style-three-pin-plane-fly.png","style-three-pin-power-button.png","style-three-pin-printer.png","style-three-pin-sailing-boat.png","style-three-pin-scale.png","style-three-pin-scissors.png","style-three-pin-search.png","style-three-pin-shirt.png","style-three-pin-shop.png","style-three-pin-shopping-bag.png","style-three-pin-signal-antenna.png","style-three-pin-skate.png","style-three-pin-skating.png","style-three-pin-snorkel.png","style-three-pin-snowflake.png","style-three-pin-table.png","style-three-pin-target-arrow.png","style-three-pin-tennis.png","style-three-pin-tent.png","style-three-pin-toilet-unclog.png","style-three-pin-tomb.png","style-three-pin-unlock.png","style-three-pin-volcano.png","style-three-style-pin-empty.png"],
    lightIcons: [],
  },
};

export const PinsStyleTwo: Story = {
  args: {
    subcategoryName: "Pins Style Two",
    categoryPath: "maps-navigation/pins-style-two",
    regularIcons: ["pstyle-two-in-cart.png","style-two-pin-add.png","style-two-pin-bolt.png","style-two-pin-book.png","style-two-pin-car.png","style-two-pin-check.png","style-two-pin-church.png","style-two-pin-cross.png","style-two-pin-dollar.png","style-two-pin-drink.png","style-two-pin-gas.png","style-two-pin-gym.png","style-two-pin-home.png","style-two-pin-information.png","style-two-pin-marker.png","style-two-pin-minus.png","style-two-pin-off-map.png","style-two-pin-photography.png","style-two-pin-plane.png","style-two-pin-question.png","style-two-pin-remove.png","style-two-pin-restaurant.png","style-two-pin-skull.png","style-two-pin-star.png","style-two-pin-target.png","style-two-pin-train.png","style-two-pin-tunnel.png","style-two-pin-user.png","style-two-pin-warning.png","style-two-pin-wifi.png","style-two-pin-world.png"],
    lightIcons: [],
  },
};

export const ShareLocation: Story = {
  args: {
    subcategoryName: "Share Location",
    categoryPath: "maps-navigation/share-location",
    regularIcons: ["share-location-hand-1.png","share-location-hand.png"],
    lightIcons: [],
  },
};

export const SignShapes: Story = {
  args: {
    subcategoryName: "Sign Shapes",
    categoryPath: "maps-navigation/sign-shapes",
    regularIcons: ["sign-badge-badge-1.png","sign-badge-badge.png","sign-badge-bubble-message.png","sign-badge-circle.png","sign-badge-rectangular-round.png"],
    lightIcons: [],
  },
};

export const SyncLocation: Story = {
  args: {
    subcategoryName: "Sync Location",
    categoryPath: "maps-navigation/sync-location",
    regularIcons: ["sync-location-refresh.png","sync-location.png"],
    lightIcons: [],
  },
};

export const Trip: Story = {
  args: {
    subcategoryName: "Trip",
    categoryPath: "maps-navigation/trip",
    regularIcons: ["trip-destination.png","trip-distance.png","trip-multiple-destination.png","trip-pin-multiple.png","trip-pins.png","trip-road-circle.png","trip-road.png"],
    lightIcons: [],
  },
};
