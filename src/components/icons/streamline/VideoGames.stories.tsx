import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Video Games',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Video Games',
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

export const FamousCharacter: Story = {
  args: {
    subcategoryName: "Famous Character",
    categoryPath: "video-games/famous-character",
    regularIcons: ["famous-character-1.png","famous-character-2.png","famous-character-batman-1.png","famous-character-batman.png","famous-character-black-lightning.png","famous-character-cat.png","famous-character-darth-vader.png","famous-character-flapjack.png","famous-character-kermit.png","famous-character-lorax.png","famous-character-megaman-1.png","famous-character-megaman.png","famous-character-mr-potato-head.png","famous-character-pokemon.png","famous-character-poseidon.png","famous-character-power-ranger-1.png","famous-character-power-ranger-2.png","famous-character-power-ranger.png","famous-character-spiderman.png","famous-character-star-badge.png","famous-character-star-wars-1.png","famous-character-star-wars.png","famous-character-star.png","famous-character-uzumaki-naruto.png","famous-character-vegeta.png","famous-character-wall-e.png","famous-character-wonder-woman.png","famous-character-yoda.png","famous-character.png"],
    lightIcons: [],
  },
};

export const FamousVideoGames: Story = {
  args: {
    subcategoryName: "Famous Video Games",
    categoryPath: "video-games/famous-video-games",
    regularIcons: ["video-game-angry-birds.png","video-game-assasin-creed.png","video-game-boo.png","video-game-bottle.png","video-game-bowl-city.png","video-game-bowl-ghost.png","video-game-boxing.png","video-game-breakout.png","video-game-cat.png","video-game-character.png","video-game-flappy-bird.png","video-game-flower-3.png","video-game-flower-enemy.png","video-game-gamasutra-1.png","video-game-gamasutra-2.png","video-game-gamasutra.png","video-game-goomba.png","video-game-key.png","video-game-kirby-1.png","video-game-kirby-2.png","video-game-kirby-enemy-kracko.png","video-game-kirby.png","video-game-knight.png","video-game-magic-wand.png","video-game-mario-1.png","video-game-mario-2.png","video-game-mario-3.png","video-game-mario-bomb.png","video-game-mario-character.png","video-game-mario-cloud.png","video-game-mario-enemy.png","video-game-mario-flame.png","video-game-mario-flower-1.png","video-game-mario-flower-2.png","video-game-mario-flower.png","video-game-mario-mushroom-1.png","video-game-mario-mushroom.png","video-game-mario-plant-maneater.png","video-game-mario-plant.png","video-game-mario-question-box.png","video-game-mario-tree.png","video-game-mario-turtle.png","video-game-mario.png","video-game-pacman-1.png","video-game-pacman-enemy.png","video-game-pacman.png","video-game-pinball.png","video-game-ping-pong.png","video-game-potion.png","video-game-shwings.png","video-game-sling.png","video-game-sonic.png","video-game-sword.png","video-game-tetris.png","video-game-the-sims.png"],
    lightIcons: [],
  },
};

export const VideoGamesController: Story = {
  args: {
    subcategoryName: "Video Games Controller",
    categoryPath: "video-games/video-games-controller",
    regularIcons: ["video-game-control-directions.png","video-game-control-gear-1.png","video-game-control-gear.png","video-game-controller-monitor.png","video-game-controller-person.png","video-game-controller-team.png","video-game-controller-wifi.png","video-game-controller.png","video-game-disk-controller.png","video-game-xbox-controller.png"],
    lightIcons: [],
  },
};

export const VideoGamesDevices: Story = {
  args: {
    subcategoryName: "Video Games Devices",
    categoryPath: "video-games/video-games-devices",
    regularIcons: ["video-game-360-vr.png","video-game-console.png","video-game-hatchi.png","video-game-monitor.png","video-game-nintendo-1.png","video-game-nintendo.png","video-game-pc.png","video-game-smartphone-landscape.png","video-game-smartphone-portrait.png","video-game-tetris.png","video-game-wii-music.png","video-game-wii-rating.png","video-game-wii.png"],
    lightIcons: [],
  },
};

export const VideoGamesLogo: Story = {
  args: {
    subcategoryName: "Video Games Logo",
    categoryPath: "video-games/video-games-logo",
    regularIcons: ["video-game-logo-companion-cube.png","video-game-logo-creeper.png","video-game-logo-dota2.png","video-game-logo-heart.png","video-game-logo-heartstone.png","video-game-logo-league-of-legends.png","video-game-logo-obs.png","video-game-logo-overwatch.png","video-game-logo-playstation.png","video-game-logo-smash-bros.png","video-game-logo-starcraft.png","video-game-logo-steam.png","video-game-logo-streamplay.png","video-game-logo-twitch.png","video-game-logo-xbox-1.png","video-game-logo-xsplit.png","video-game-logo-youtube-gaming-2.png"],
    lightIcons: [],
  },
};
