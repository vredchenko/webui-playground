import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Sports',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Sports',
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

export const Archery: Story = {
  args: {
    subcategoryName: "Archery",
    categoryPath: "sports/archery",
    regularIcons: ["archery-bow-1.png","archery-bow.png","archery-person.png"],
    lightIcons: [],
  },
};

export const Athletics: Story = {
  args: {
    subcategoryName: "Athletics",
    categoryPath: "sports/athletics",
    regularIcons: ["athletics-discus-throwing.png","athletics-javelin-throwing.png","athletics-jumping-person.png","athletics-jumping.png","athletics-long-jumping.png","athletics-pole-vault.png","athletics-running-1.png","athletics-running.png","athletics-shooting.png","athletics-team-running.png"],
    lightIcons: [],
  },
};

export const BaseballBallGames: Story = {
  args: {
    subcategoryName: "Baseball Ball Games",
    categoryPath: "sports/baseball-ball-games",
    regularIcons: ["baseball-bat-ball.png","baseball-glove.png","baseball-helmet.png","baseball-player.png","baseball-score.png","cricket-bat-ball .png","croquet-ball-hoop.png","helmet-sports.png","hockey-puck-stick.png"],
    lightIcons: [],
  },
};

export const BasketballVolleyball: Story = {
  args: {
    subcategoryName: "Basketball Volleyball",
    categoryPath: "sports/basketball-volleyball",
    regularIcons: ["basketball-ball-dribble-player.png","basketball-ball.png","basketball-hoop.png","volleyball-ball.png","volleyball-net.png","volleyball-smash.png"],
    lightIcons: [],
  },
};

export const Biking: Story = {
  args: {
    subcategoryName: "Biking",
    categoryPath: "sports/biking",
    regularIcons: ["biking-helmet-person.png","biking-helmet.png","biking-learner.png","biking-mountain.png","biking-person.png"],
    lightIcons: [],
  },
};

export const Bowling: Story = {
  args: {
    subcategoryName: "Bowling",
    categoryPath: "sports/bowling",
    regularIcons: ["bowling-pins.png","bowling-player.png","bowling-set.png"],
    lightIcons: [],
  },
};

export const Boxing: Story = {
  args: {
    subcategoryName: "Boxing",
    categoryPath: "sports/boxing",
    regularIcons: ["boxing-bag-hanging.png","boxing-bag-small.png","boxing-bag.png","boxing-boxer-bag.png","boxing-boxer.png","boxing-glove.png","boxing-head-guard.png"],
    lightIcons: [],
  },
};

export const ClimbingSpeleology: Story = {
  args: {
    subcategoryName: "Climbing Speleology",
    categoryPath: "sports/climbing-speleology",
    regularIcons: ["climbing-head-light.png","climbing-mountain.png","climbing-sports.png"],
    lightIcons: [],
  },
};

export const Dancing: Story = {
  args: {
    subcategoryName: "Dancing",
    categoryPath: "sports/dancing",
    regularIcons: ["dancing-ballet-dress.png","dancing-ballet.png"],
    lightIcons: [],
  },
};

export const Fitness: Story = {
  args: {
    subcategoryName: "Fitness",
    categoryPath: "sports/fitness",
    regularIcons: ["fitness-biceps.png","fitness-bicycle-1.png","fitness-bicycle-2.png","fitness-bicycle-3.png","fitness-bicycle.png","fitness-dumbbell-disk-weight.png","fitness-dumbbell-lift.png","fitness-dumbbell.png","fitness-dumbells-sizes.png","fitness-grip-weights.png","fitness-hand-grip.png","fitness-heart-rate.png","fitness-jumping-rope-1.png","fitness-jumping-rope-2.png","fitness-jumping-rope-3.png","fitness-jumping-rope.png","fitness-machine.png","fitness-pilates-ball.png","fitness-protein.png","fitness-shaker.png","fitness-six-pack.png","fitness-slim-waist.png","fitness-weighlifting-bench.png","fitness-weightlift.png","fitness-weights.png"],
    lightIcons: [],
  },
};

export const Golf: Story = {
  args: {
    subcategoryName: "Golf",
    categoryPath: "sports/golf",
    regularIcons: ["golf-ball.png","golf-cart.png","golf-equipment.png","golf-hole-1.png","golf-hole-aim.png","golf-hole-ball.png","golf-hole.png","golf-player.png"],
    lightIcons: [],
  },
};

export const Gymnastics: Story = {
  args: {
    subcategoryName: "Gymnastics",
    categoryPath: "sports/gymnastics",
    regularIcons: ["gymnastics-acrobatic-1.png","gymnastics-acrobatic-hanging-1.png","gymnastics-acrobatic-hanging-2.png","gymnastics-acrobatic-hanging-person.png","gymnastics-acrobatic-hanging.png","gymnastics-acrobatic.png","gymnastics-horse.png","gymnastics-jump.png","gymnastics-rhythmic-ribbon-1.png","gymnastics-rhythmic-ribbon.png","gymnastics-ribbon-person-1.png","gymnastics-ribbon-person-2.png","gymnastics-ribbon-person.png","gymnastics-trampoline.png","gymnastics-weightlifting.png"],
    lightIcons: [],
  },
};

export const MartialArts: Story = {
  args: {
    subcategoryName: "Martial Arts",
    categoryPath: "sports/martial-arts",
    regularIcons: ["martial-arts-fencing-person.png","martial-arts-fencing.png","martial-arts-helmet.png","martial-arts-karate.png","martial-arts-kimono.png","martial-arts-mask-helmet.png","martial-arts-sumo.png","martial-arts-sword-fencing-1.png","martial-arts-sword-fencing.png","martial-arts-swords.png"],
    lightIcons: [],
  },
};

export const OlympicsParalympicsGames: Story = {
  args: {
    subcategoryName: "Olympics Paralympics Games",
    categoryPath: "sports/olympics-paralympics-games",
    regularIcons: ["olympics-torch.png","paralympics-archery.png","paralympics-ball.png","paralympics-discus-throwing.png","paralympics-fencing.png","paralympics-flag.png","paralympics-football.png","paralympics-javelin-throwing.png","paralympics-race-1.png","paralympics-race.png","paralympics-racing.png","paralympics-running.png","paralympics-swimming.png","paralympics-tennis.png","paralympics-torch.png","paralympics-weightlifting.png"],
    lightIcons: [],
  },
};

export const Pool: Story = {
  args: {
    subcategoryName: "Pool",
    categoryPath: "sports/pool",
    regularIcons: ["pool-ball.png","pool-black-ball.png","pool-player-table.png","pool-player.png","pool-table.png","pool-triangle.png"],
    lightIcons: [],
  },
};

export const RugbyAmericanFootball: Story = {
  args: {
    subcategoryName: "Rugby American Football",
    categoryPath: "sports/rugby-american-football",
    regularIcons: ["american-football-ball-1.png","american-football-ball.png","american-football-goal.png","american-football-helmet.png","american-football-run-ball-1.png","american-football-run-ball.png","american-football-score.png"],
    lightIcons: [],
  },
};

export const Shooting: Story = {
  args: {
    subcategoryName: "Shooting",
    categoryPath: "sports/shooting",
    regularIcons: ["shooting-rifle-aim.png","shooting-rifle-person-aim.png","shooting-rifle-target.png","shooting-rifle.png","shooting-target.png"],
    lightIcons: [],
  },
};

export const SkateboardRollerblades: Story = {
  args: {
    subcategoryName: "Skateboard Rollerblades",
    categoryPath: "sports/skateboard-rollerblades",
    regularIcons: ["rollerblades-person.png","rollerblades.png","skateboard-1.png","skateboard-person-1.png","skateboard-person.png","skateboard.png","skating-shoes.png"],
    lightIcons: [],
  },
};

export const Skiing: Story = {
  args: {
    subcategoryName: "Skiing",
    categoryPath: "sports/skiing",
    regularIcons: ["skating-1.png","skating.png","ski-jumping.png","skiing-board-slide.png","skiing-bobsled.png","skiing-cable-car-1.png","skiing-cable-car.png","skiing-chest-slide.png","skiing-cross-country-1.png","skiing-cross-country.png","skiing-ice-skates.png","skiing-skiis.png","skiing-slide-down.png","skiing-snow-scooter-person.png","skiing-snow-scooter.png","skiing-snowboard.png"],
    lightIcons: [],
  },
};

export const Soccer: Story = {
  args: {
    subcategoryName: "Soccer",
    categoryPath: "sports/soccer",
    regularIcons: ["soccer-ball.png","soccer-field.png","soccer-goal-net.png","soccer-goalkeeper-glove-1.png","soccer-kick-ball.png","soccer-player-ball.png","soccer-player-kick.png","soccer-player.png"],
    lightIcons: [],
  },
};

export const Swimming: Story = {
  args: {
    subcategoryName: "Swimming",
    categoryPath: "sports/swimming",
    regularIcons: ["swimming-cap-1.png","swimming-cap.png","swimming-diving-board.png","swimming-diving.png","swimming-goggles.png","swimming-jump.png","swimming-lifeguard.png","swimming-waterpolo.png"],
    lightIcons: [],
  },
};

export const TennisBadminton: Story = {
  args: {
    subcategoryName: "Tennis Badminton",
    categoryPath: "sports/tennis-badminton",
    regularIcons: ["badminton-player.png","badminton-shuttlecock-racquet.png","badminton-shuttlecock.png","ping-pong-paddle.png","ping-pong-player.png","ping-pong-table.png","tennis-backhand.png","tennis-ball.png","tennis-forehand.png","tennis-net.png","tennis-player.png","tennis-racquet.png"],
    lightIcons: [],
  },
};

export const VariousSport: Story = {
  args: {
    subcategoryName: "Various Sport",
    categoryPath: "sports/various-sport",
    regularIcons: ["sport-curling-1.png","sport-curling.png","sport-hockey.png","sport-horse-riding.png","sport-paragliding.png"],
    lightIcons: [],
  },
};

export const YogaStretching: Story = {
  args: {
    subcategoryName: "Yoga Stretching",
    categoryPath: "sports/yoga-stretching",
    regularIcons: ["yoga-arm-stretch.png","yoga-arms-stretch.png","yoga-back-stretch-1.png","yoga-back-stretch-2.png","yoga-back-stretch.png","yoga-bridge.png","yoga-cobra.png","yoga-down-stretch.png","yoga-full-body-stretch.png","yoga-leg-grab-stretch.png","yoga-mat.png","yoga-meditate-1.png","yoga-meditate.png","yoga-shoulder-stretch.png","yoga-stretch-1.png","yoga-stretch.png"],
    lightIcons: [],
  },
};
