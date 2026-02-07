import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Travel',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Travel',
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

export const Airport: Story = {
  args: {
    subcategoryName: "Airport",
    categoryPath: "travel/airport",
    regularIcons: ["airport-road.png","airport-signal.png","airport-stairs.png","airport.png"],
    lightIcons: [],
  },
};

export const Baggage: Story = {
  args: {
    subcategoryName: "Baggage",
    categoryPath: "travel/baggage",
    regularIcons: ["baggage-1.png","baggage-add.png","baggage-cart-1.png","baggage-cart-2.png","baggage-cart.png","baggage-check-in-plane.png","baggage-check-in-user.png","baggage-check.png","baggage-drop-off.png","baggage-leave.png","baggage-line.png","baggage-plane.png","baggage-question.png","baggage-roll.png","baggage-scan.png","baggage-take.png","baggage-weight-1.png","baggage-weight-2.png","baggage-weight.png","baggage.png"],
    lightIcons: [],
  },
};

export const Passports: Story = {
  args: {
    subcategoryName: "Passports",
    categoryPath: "travel/passports",
    regularIcons: ["passport-globe.png","passport-hand.png","passport-ticket.png","passport.png"],
    lightIcons: [],
  },
};

export const PlanesTrip: Story = {
  args: {
    subcategoryName: "Planes Trip",
    categoryPath: "travel/planes-trip",
    regularIcons: ["plane-1.png","plane-land.png","plane-take-off.png","plane-trip-1.png","plane-trip-cloud.png","plane-trip-cocktail-service.png","plane-trip-food-service.png","plane-trip-international.png","plane-trip-land-cancel.png","plane-trip-land-check.png","plane-trip-person.png","plane-trip-return-1.png","plane-trip-return.png","plane-trip-round.png","plane-trip-take-off-cancel.png","plane-trip-take-off-check.png","plane-trip-time.png","plane-trip.png","plane.png"],
    lightIcons: [],
  },
};

export const SecurityCustoms: Story = {
  args: {
    subcategoryName: "Security Customs",
    categoryPath: "travel/security-customs",
    regularIcons: ["security-officer-animal.png","security-officer-camera.png","security-officer-gate.png","security-officer-luggage-check.png","security-officer-luggage-reject.png","security-officer-luggage.png","security-officer-passport.png","security-officer-plant.png","security-officer-scanner-beep.png","security-officer-scanner.png","security-officer.png"],
    lightIcons: [],
  },
};

export const TicketsCheckInSchedule: Story = {
  args: {
    subcategoryName: "Tickets Check In Schedule",
    categoryPath: "travel/tickets-check-in-schedule",
    regularIcons: ["plane-board-arrival-departure.png","plane-board.png","plane-boarding-pass-check.png","plane-boarding-pass-hand.png","plane-boarding-pass-smartphone-check.png","plane-boarding-pass.png","plane-check-in.png","plane-info-center.png","plane-ticket-return.png"],
    lightIcons: [],
  },
};

export const TravelInsurance: Story = {
  args: {
    subcategoryName: "Travel Insurance",
    categoryPath: "travel/travel-insurance",
    regularIcons: ["travel-insurance-cover.png","travel-insurance-plane.png","travel-insurance-shield.png"],
    lightIcons: [],
  },
};

export const TravelMetaphor: Story = {
  args: {
    subcategoryName: "Travel Metaphor",
    categoryPath: "travel/travel-metaphor",
    regularIcons: ["travel-crossroad-direction-board.png","travel-luggage-1.png","travel-luggage.png","travel-man-luggage.png","travel-map-finger.png","travel-paper-plane.png","travel-suitcase.png","travel-user-pin.png","travel-woman-luggage.png"],
    lightIcons: [],
  },
};
