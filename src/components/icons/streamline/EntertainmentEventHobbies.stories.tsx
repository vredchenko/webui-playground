import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Entertainment Event Hobbies',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Entertainment Event Hobbies',
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

export const AmusementParks: Story = {
  args: {
    subcategoryName: "Amusement Parks",
    categoryPath: "entertainment-event-hobbies/amusement-parks",
    regularIcons: ["amusement-park-balloon.png","amusement-park-castle.png","amusement-park-disneyland.png","amusement-park-electric-cars.png","amusement-park-entrance.png","amusement-park-ferris-wheel-1.png","amusement-park-ferris-wheel-person.png","amusement-park-ferris-wheel.png","amusement-park-merry-go-round-toys.png","amusement-park-rollercoaster.png","amusement-park-speed-machine.png","amusement-park-strength-meter.png"],
    lightIcons: [],
  },
};

export const BrainBoardGames: Story = {
  args: {
    subcategoryName: "Brain Board Games",
    categoryPath: "entertainment-event-hobbies/brain-board-games",
    regularIcons: ["board-game-deuce.png","board-game-dice-1.png","board-game-dice-2.png","board-game-dice-pawn.png","board-game-dice.png","board-game-geometry.png","board-game-jenga.png","board-game-ludo-1.png","board-game-ludo.png","board-game-tic-tac-toe.png","board-game.png","chess-figures.png","chess-knight.png","chess-pawn.png","chess-rook.png","tic-tac-toe.png"],
    lightIcons: [],
  },
};

export const CardGames: Story = {
  args: {
    subcategoryName: "Card Games",
    categoryPath: "entertainment-event-hobbies/card-games",
    regularIcons: ["card-game-card-club.png","card-game-card-spade.png","card-game-cards-hold.png","card-game-cards-spade-diamond.png","card-game-cards.png","card-game-choose.png","card-game-diamond.png","card-game-dice.png","card-game-heart.png","card-game-symbols.png"],
    lightIcons: [],
  },
};

export const Casino: Story = {
  args: {
    subcategoryName: "Casino",
    categoryPath: "entertainment-event-hobbies/casino",
    regularIcons: ["casino-777-slot-machine.png","casino-777-winner.png","casino-add-chips.png","casino-chip-5.png","casino-chip-buy.png","casino-chip-diamond.png","casino-chip-hold.png","casino-chips-double-1.png","casino-chips-double.png","casino-clover.png","casino-diamond-bag.png","casino-diamond-bag_1.png","casino-global-chip.png","casino-gold-bars.png","casino-lucky-7.png","casino-lucky-clover.png","casino-lucky-horseshoe.png","casino-player-diamond.png","casino-player-dice.png","casino-player-luck.png","casino-player-man.png","casino-player-woman.png","casino-pull-machine-slot.png","casino-winner-chip.png","casino-winner-diamond.png"],
    lightIcons: [],
  },
};

export const Circus: Story = {
  args: {
    subcategoryName: "Circus",
    categoryPath: "entertainment-event-hobbies/circus",
    regularIcons: ["circus-clown-1.png","circus-clown.png","circus-elephant.png","circus-lion-ring.png","circus-tent-1.png","circus-tent.png","circus-tents.png"],
    lightIcons: [],
  },
};

export const ConcertsNightClubs: Story = {
  args: {
    subcategoryName: "Concerts Night Clubs",
    categoryPath: "entertainment-event-hobbies/concerts-night-clubs",
    regularIcons: ["concert-beach.png","concert-couple-duet.png","concert-dj.png","concert-guitarist.png","concert-microphone.png","concert-rock-1.png","concert-rock.png","concert-sing.png","concert-speakers.png","night-club-disco-ball.png"],
    lightIcons: [],
  },
};

export const Crafts: Story = {
  args: {
    subcategoryName: "Crafts",
    categoryPath: "entertainment-event-hobbies/crafts",
    regularIcons: ["crafts-bottle-art-plant.png","crafts-bottle-art-ship.png","crafts-calligraphy.png","crafts-carving.png","crafts-model-plane .png","crafts-necklace.png","crafts-origami-1.png","crafts-origami.png","crafts-pottery.png","crafts-sewing.png"],
    lightIcons: [],
  },
};

export const FarmerMarket: Story = {
  args: {
    subcategoryName: "Farmer Market",
    categoryPath: "entertainment-event-hobbies/farmer-market",
    regularIcons: ["farmer's-market-kiosk.png","farmer's-market-vendor.png"],
    lightIcons: [],
  },
};

export const Fireworks: Story = {
  args: {
    subcategoryName: "Fireworks",
    categoryPath: "entertainment-event-hobbies/fireworks",
    regularIcons: ["fireworks-people-watch.png","fireworks-rocket.png","fireworks-stick.png","fireworks.png"],
    lightIcons: [],
  },
};

export const Movies: Story = {
  args: {
    subcategoryName: "Movies",
    categoryPath: "entertainment-event-hobbies/movies",
    regularIcons: ["movie-audience.png","movie-celebrity.png","movie-cinema-clock.png","movie-cinema-watch-1.png","movie-cinema-watch.png","movie-cinema.png","movie-monster.png","movie-star.png"],
    lightIcons: [],
  },
};

export const MuseumExhibitions: Story = {
  args: {
    subcategoryName: "Museum Exhibitions",
    categoryPath: "entertainment-event-hobbies/museum-exhibitions",
    regularIcons: ["museum-art.png","museum-exhibition.png","museum-painting.png","museum-person.png"],
    lightIcons: [],
  },
};

export const Party: Story = {
  args: {
    subcategoryName: "Party",
    categoryPath: "entertainment-event-hobbies/party",
    regularIcons: ["party-balloon.png","party-balloons.png","party-beer-cheers.png","party-confetti-whistle.png","party-confetti.png","party-dance.png","party-decoration-1.png","party-decoration.png","party-hats.png","party-mask.png","party-music-dance-woman.png","party-music-dance.png","party-music.png","party-throw-up.png","party-water-gun.png"],
    lightIcons: [],
  },
};

export const ShowTheater: Story = {
  args: {
    subcategoryName: "Show Theater",
    categoryPath: "entertainment-event-hobbies/show-theater",
    regularIcons: ["circus-clown-1.png","circus-clown.png","circus-elephant.png","circus-lion-ring.png","circus-tent-1.png","circus-tent.png","circus-tents.png","show-hat-cards.png","show-hat-magician-1.png","show-hat-magician.png","show-person.png","show-rabbit-hat.png","show-theater-mask-happy.png","show-theater-mask-sad.png","show-theater-masks.png","show-theater-play.png","show-theater-show-masks.png","show-theater.png"],
    lightIcons: [],
  },
};

export const Ticketing: Story = {
  args: {
    subcategoryName: "Ticketing",
    categoryPath: "entertainment-event-hobbies/ticketing",
    regularIcons: ["ticket-1.png","ticket-basketball-game.png","ticket-buy.png","ticket-concert.png","ticket-movie.png","ticket.png"],
    lightIcons: [],
  },
};
