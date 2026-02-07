import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Hotels Spas',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Hotels Spas',
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

export const AcHeating: Story = {
  args: {
    subcategoryName: "Ac Heating",
    categoryPath: "hotels-spas/ac-heating",
    regularIcons: ["ac-cool.png","ac-heat.png","heater-1.png","heater.png","ventilator.png"],
    lightIcons: [],
  },
};

export const Bathroom: Story = {
  args: {
    subcategoryName: "Bathroom",
    categoryPath: "hotels-spas/bathroom",
    regularIcons: ["bathroom-hair-dryer.png","bathroom-hanger-1.png","bathroom-hanger.png","bathroom-laundry-bin.png","bathroom-mirror-cabinet.png","bathroom-mirror.png","bathroom-person.png","bathroom-robe-female.png","bathroom-robe.png","bathroom-shower-1.png","bathroom-shower-2.png","bathroom-shower-head.png","bathroom-shower-person.png","bathroom-shower.png","bathroom-tub-person.png","bathroom-tub-towel.png"],
    lightIcons: [],
  },
};

export const GarageParking: Story = {
  args: {
    subcategoryName: "Garage Parking",
    categoryPath: "hotels-spas/garage-parking",
    regularIcons: ["car-garage-1.png","car-garage.png","car-key-1.png","car-key.png"],
    lightIcons: [],
  },
};

export const HotelBedrooms: Story = {
  args: {
    subcategoryName: "Hotel Bedrooms",
    categoryPath: "hotels-spas/hotel-bedrooms",
    regularIcons: ["hotel-bed.png","hotel-bedroom-1.png","hotel-bedroom.png","hotel-bunk-bed-1.png","hotel-bunk-bed-2.png","hotel-bunk-bed.png","hotel-double-bed-1.png","hotel-double-bed.png","hotel-information.png","hotel-single-bed-1.png","hotel-single-bed-add.png","hotel-single-bed-download.png","hotel-single-bed-subtract.png","hotel-single-bed-upload.png","hotel-single-bed.png","hotel.png"],
    lightIcons: [],
  },
};

export const RatingReviews: Story = {
  args: {
    subcategoryName: "Rating Reviews",
    categoryPath: "hotels-spas/rating-reviews",
    regularIcons: ["rating-booklet.png","rating-five-star-hotel.png","rating-five-star.png","rating-hotel.png"],
    lightIcons: [],
  },
};

export const Reception: Story = {
  args: {
    subcategoryName: "Reception",
    categoryPath: "hotels-spas/reception",
    regularIcons: ["reception-bell-call.png","reception-desk.png","reception-hotel-24.png","reception-hotel-bell.png","reception-hotel.png","reception-pay.png","reception-toilet.png"],
    lightIcons: [],
  },
};

export const RoomService: Story = {
  args: {
    subcategoryName: "Room Service",
    categoryPath: "hotels-spas/room-service",
    regularIcons: ["room-service-bring-plate.png","room-service-cart-1.png","room-service-cart-food.png","room-service-cart.png","room-service-champagne.png","room-service-clean.png","room-service-do-not-disturb.png","room-service-food.png","room-service-give-plate.png","room-service-plates.png","room-service-staff.png"],
    lightIcons: [],
  },
};

export const Sauna: Story = {
  args: {
    subcategoryName: "Sauna",
    categoryPath: "hotels-spas/sauna",
    regularIcons: ["sauna-heat-1.png","sauna-heat-person-1.png","sauna-heat-person.png","sauna-heat-stone.png","sauna-heat.png"],
    lightIcons: [],
  },
};

export const Spas: Story = {
  args: {
    subcategoryName: "Spas",
    categoryPath: "hotels-spas/spas",
    regularIcons: ["spa-bamboo.png","spa-board.png","spa-candle-flower.png","spa-candle.png","spa-flame.png","spa-hand-flower.png","spa-lotus-1.png","spa-lotus.png","spa-sign.png","spa-soap.png","spa-stone-1.png","spa-stone.png","spa-therapist-robe.png","spa-towel.png"],
    lightIcons: [],
  },
};

export const Tv: Story = {
  args: {
    subcategoryName: "Tv",
    categoryPath: "hotels-spas/tv",
    regularIcons: ["tv-disable.png","tv-flat-screen-disable.png","tv-flat-screen.png","tv-retro.png"],
    lightIcons: [],
  },
};
