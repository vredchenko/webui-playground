import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Romance',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Romance',
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

export const BreakupDivorce: Story = {
  args: {
    subcategoryName: "Breakup Divorce",
    categoryPath: "romance/breakup-divorce",
    regularIcons: ["breakup-couple-man-man.png","breakup-couple-man-woman.png","breakup-couple-woman-woman.png","breakup-cry.png","breakup-divorce.png","breakup-heart-skull.png"],
    lightIcons: [],
  },
};

export const Couples: Story = {
  args: {
    subcategoryName: "Couples",
    categoryPath: "romance/couples",
    regularIcons: ["couple-album-book.png","couple-film.png","couple-frame.png","couple-hold.png","couple-home-man-woman.png","couple-house.png","couple-man-man.png","couple-man-woman.png","couple-tv.png","couple-woman-woman.png"],
    lightIcons: [],
  },
};

export const Dating: Story = {
  args: {
    subcategoryName: "Dating",
    categoryPath: "romance/dating",
    regularIcons: ["dating-calendar.png","dating-chat-man.png","dating-chat-woman.png","dating-couple-balloon.png","dating-cup.png","dating-flowers-vase.png","dating-lips.png","dating-lipstick.png","dating-makeup.png","dating-rose-1.png","dating-rose-vase.png","dating-search.png","dating-smartphone-chat.png","dating-smartphone-man.png","dating-smartphone-woman.png","dating-target-1.png"],
    lightIcons: [],
  },
};

export const Engagement: Story = {
  args: {
    subcategoryName: "Engagement",
    categoryPath: "romance/engagement",
    regularIcons: ["engagement-calendar-date.png","engagement-couple.png","engagement-move-in.png","engagement-ring-1.png","engagement-ring.png"],
    lightIcons: [],
  },
};

export const Love: Story = {
  args: {
    subcategoryName: "Love",
    categoryPath: "romance/love",
    regularIcons: ["love-arrow-bow.png","love-bird.png","love-boat.png","love-candle.png","love-cloud.png","love-fire.png","love-hat.png","love-heart-arrow.png","love-heart-balloon.png","love-heart-balloons.png","love-heart-hands-hold-1.png","love-heart-hands-hold-3.png","love-heart-hands-hold.png","love-heart-hold.png","love-heart-key.png","love-heart-keyhole.png","love-heart-ranking.png","love-lollipop.png","love-plant-pot.png","love-plant.png","love-potion.png","love-shield.png","love-song.png","love-whale.png"],
    lightIcons: [],
  },
};

export const LoveGifts: Story = {
  args: {
    subcategoryName: "Love Gifts",
    categoryPath: "romance/love-gifts",
    regularIcons: ["love-gift-box-heart.png","love-gift-chocolate-box.png","love-gift-couple-box.png","love-gift-diamond-1.png","love-gift-diamond.png","love-gift-flowers.png"],
    lightIcons: [],
  },
};

export const Wedding: Story = {
  args: {
    subcategoryName: "Wedding",
    categoryPath: "romance/wedding",
    regularIcons: ["wedding-altar.png","wedding-bride-cake.png","wedding-bride-groom.png","wedding-cake-couple.png","wedding-cake-heart.png","wedding-cake.png","wedding-car-heart-balloon.png","wedding-car.png","wedding-celebration.png","wedding-certificate.png","wedding-couple-dance.png","wedding-couple.png","wedding-dress.png","wedding-fireworks.png","wedding-groom-cake.png","wedding-luggage.png","wedding-money-piggy.png"],
    lightIcons: [],
  },
};
