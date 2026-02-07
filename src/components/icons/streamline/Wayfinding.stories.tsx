import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Wayfinding',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Wayfinding',
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

export const Allowances: Story = {
  args: {
    subcategoryName: "Allowances",
    categoryPath: "wayfinding/allowances",
    regularIcons: ["allowances-no-bicycles.png","allowances-no-bikinis.png","allowances-no-boots.png","allowances-no-climbing.png","allowances-no-food-1.png","allowances-no-food.png","allowances-no-photos.png","allowances-no-pushing.png","allowances-no-sitting.png","allowances-no-skates.png","allowances-no-smoking.png","allowances-no-talking.png","allowances-no-umbrellas.png","allowances-silence.png","allowances-smoking.png"],
    lightIcons: [],
  },
};

export const Cleaning: Story = {
  args: {
    subcategoryName: "Cleaning",
    categoryPath: "wayfinding/cleaning",
    regularIcons: ["cleaning-broom.png","cleaning-cat.png","cleaning-man.png","cleaning-robot.png","cleaning-sign.png","cleaning-spray.png","cleaning-vacuum-1.png","cleaning-vacuum-2.png","cleaning-vacuum.png","cleaning-woman-1.png","cleaning-woman.png"],
    lightIcons: [],
  },
};

export const CloakLockersRoom: Story = {
  args: {
    subcategoryName: "Cloak Lockers Room",
    categoryPath: "wayfinding/cloak-lockers-room",
    regularIcons: ["locker-room-hanger-man.png","locker-room-hanger-woman.png","locker-room-hanger.png","locker-room-key.png","locker-room-suitcase-key-1.png","locker-room-suitcase-key.png","locker-room-suitcase-umbrella.png","locker-room-wash-hands-1.png","locker-room-wash-hands.png"],
    lightIcons: [],
  },
};

export const Disability: Story = {
  args: {
    subcategoryName: "Disability",
    categoryPath: "wayfinding/disability",
    regularIcons: ["disability-ad.png","disability-blind-disabled.png","disability-blind-read-book-1.png","disability-blind-read-book-2.png","disability-blind-read-book.png","disability-blind-read-finger.png","disability-blind-read-paper.png","disability-blind-read.png","disability-blind.png","disability-braille-1.png","disability-braille.png","disability-cane.png","disability-cc.png","disability-hearing-aid-t.png","disability-hearing-aid.png","disability-hearing-t.png","disability-hearing.png","disability-heart-plus.png","disability-information.png","disability-lift.png","disability-microphone.png","disability-oc.png","disability-partially-blind.png","disability-pregant.png","disability-q.png","disability-sit-cane.png","disability-sit-pregnancy.png","disability-sit-walking-aid.png","disability-walk-blind.png","disability-walking-aid.png","disability-walking-help.png","disability-wheelchair-1.png","disability-wheelchair.png"],
    lightIcons: [],
  },
};

export const Escalators: Story = {
  args: {
    subcategoryName: "Escalators",
    categoryPath: "wayfinding/escalators",
    regularIcons: ["escalator-ascend-person.png","escalator-ascend.png","escalator-descend-person.png","escalator-descend.png","escalator-people.png","escalator-person.png"],
    lightIcons: [],
  },
};

export const Family: Story = {
  args: {
    subcategoryName: "Family",
    categoryPath: "wayfinding/family",
    regularIcons: ["family-baby-change-diaper.png","family-baby.png","family-child-hold-hand.png","family-child-jumping-rope.png","family-child-play-ball-warning.png","family-child-play-ball.png","family-child-play-car.png","family-child-play.png","family-child-teeter.png","family-swing.png","family-walk-park.png"],
    lightIcons: [],
  },
};

export const Garbages: Story = {
  args: {
    subcategoryName: "Garbages",
    categoryPath: "wayfinding/garbages",
    regularIcons: ["garbage-bin-throw-1.png","garbage-bin-throw.png","garbage-bin.png","garbage-throw.png"],
    lightIcons: [],
  },
};

export const InformationDesk: Story = {
  args: {
    subcategoryName: "Information Desk",
    categoryPath: "wayfinding/information-desk",
    regularIcons: ["information-desk-customer.png","information-desk-hi.png","information-desk-man.png","information-desk-paper.png","information-desk-question-help.png","information-desk-ticket.png","information-desk.png"],
    lightIcons: [],
  },
};

export const Laundry: Story = {
  args: {
    subcategoryName: "Laundry",
    categoryPath: "wayfinding/laundry",
    regularIcons: ["laundry-hand-wash.png","laundry-iron-board.png","laundry-iron-water.png","laundry-iron.png","laundry-machine-1.png","laundry-machine-2.png","laundry-machine.png","laundry-retro-iron.png"],
    lightIcons: [],
  },
};

export const Lifts: Story = {
  args: {
    subcategoryName: "Lifts",
    categoryPath: "wayfinding/lifts",
    regularIcons: ["lift-1.png","lift-two-people.png","lift.png"],
    lightIcons: [],
  },
};

export const MovingWalkway: Story = {
  args: {
    subcategoryName: "Moving Walkway",
    categoryPath: "wayfinding/moving-walkway",
    regularIcons: ["moving-walkway-luggage.png","moving-walkway-people.png"],
    lightIcons: [],
  },
};

export const Safety: Story = {
  args: {
    subcategoryName: "Safety",
    categoryPath: "wayfinding/safety",
    regularIcons: ["safety-911.png","safety-bell.png","safety-board.png","safety-call-firefighters-1.png","safety-call-firefighters-2.png","safety-call-firefighters.png","safety-danger-cliff.png","safety-danger-electricity.png","safety-danger-mudslide.png","safety-do-not-touch-fire.png","safety-drown-hand.png","safety-electricity-danger.png","safety-electricity-danger_1.png","safety-exit-door-left.png","safety-exit-door.png","safety-exit-left.png","safety-exit-right.png","safety-extinguish-fire.png","safety-fire-alarm.png","safety-fire-exit-1.png","safety-fire-exit-stairs.png","safety-fire-exit.png","safety-fire-extinguisher.png","safety-fire-right.png","safety-fire-shield.png","safety-fire.png","safety-flame-right.png","safety-float.png","safety-heart-electricity.png","safety-rocky-road.png","safety-slippery.png","safety-vest-1.png","safety-vest.png","safety-warning-cliff.png","safety-warning-electricity.png","safety-warning-heat.png","safety-warning-radioactive.png","safety-warning-rocky-road.png","safety-warning-slippery.png","safety-warning-sun.png"],
    lightIcons: [],
  },
};

export const Seats: Story = {
  args: {
    subcategoryName: "Seats",
    categoryPath: "wayfinding/seats",
    regularIcons: ["seat-child.png","seat-find.png","seat-regular.png","seat-settings.png","seat-vip.png"],
    lightIcons: [],
  },
};

export const Stairs: Story = {
  args: {
    subcategoryName: "Stairs",
    categoryPath: "wayfinding/stairs",
    regularIcons: ["stairs-ascend.png","stairs-descend.png","stairs-person-ascend.png","stairs-person-descend.png"],
    lightIcons: [],
  },
};

export const SwimmingPool: Story = {
  args: {
    subcategoryName: "Swimming Pool",
    categoryPath: "wayfinding/swimming-pool",
    regularIcons: ["swimming-pool-board.png","swimming-pool-person.png","swimming-pool-stairs.png"],
    lightIcons: [],
  },
};

export const Tickets: Story = {
  args: {
    subcategoryName: "Tickets",
    categoryPath: "wayfinding/tickets",
    regularIcons: ["ticket-add.png","ticket-buy.png","ticket-check.png","ticket-clock.png","ticket-day-1.png","ticket-day-30.png","ticket-day-7.png","ticket-exchange.png","ticket-group.png","ticket-hold.png","ticket-pass.png","ticket-pay-cash.png","ticket-person-pass.png","ticket-remove.png","ticket-two.png","ticket.png"],
    lightIcons: [],
  },
};

export const Toilets: Story = {
  args: {
    subcategoryName: "Toilets",
    categoryPath: "wayfinding/toilets",
    regularIcons: ["toilet-need-1.png","toilet-need.png","toilet-paper-1.png","toilet-paper.png","toilet-seat-1.png","toilet-seat.png","toilet-sign-1.png","toilet-sign-2.png","toilet-sign.png","toilet-unclog.png","toilet-use-right.png","toilet-use-wrong.png"],
    lightIcons: [],
  },
};

export const WaitingRoom: Story = {
  args: {
    subcategoryName: "Waiting Room",
    categoryPath: "wayfinding/waiting-room",
    regularIcons: ["waiting-room-clock.png","waiting-room-couple.png","waiting-room-lamp.png","waiting-room-read.png"],
    lightIcons: [],
  },
};

export const Walking: Story = {
  args: {
    subcategoryName: "Walking",
    categoryPath: "wayfinding/walking",
    regularIcons: ["walking-1.png","walking-cross-street.png","walking-descend.png","walking-fast.png","walking-forbidden.png","walking.png"],
    lightIcons: [],
  },
};

export const WaterFountain: Story = {
  args: {
    subcategoryName: "Water Fountain",
    categoryPath: "wayfinding/water-fountain",
    regularIcons: ["water-fountain-drink.png","water-fountain-drop.png","water-fountain-fill.png","water-fountain-jet.png","water-fountain-sink-1.png","water-fountain-sink.png"],
    lightIcons: [],
  },
};
