import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Social Medias Rewards Rating',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Social Medias Rewards Rating',
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

export const Certified: Story = {
  args: {
    subcategoryName: "Certified",
    categoryPath: "social-medias-rewards-rating/certified",
    regularIcons: ["certified-certificate.png","certified-diploma-1.png","certified-diploma.png","certified-ribbon-1.png","certified-ribbon-2.png","certified-ribbon.png"],
    lightIcons: [],
  },
};

export const Flags: Story = {
  args: {
    subcategoryName: "Flags",
    categoryPath: "social-medias-rewards-rating/flags",
    regularIcons: ["flag-1.png","flag-cash.png","flag-check.png","flag-flash.png","flag-information.png","flag-plain-1.png","flag-plain-2.png","flag-plain-3.png","flag-plain.png","flag-question.png","flag-settings.png","flag-skull.png","flag-star.png","flag-triangle-1.png","flag-triangle.png","flag-warning.png","flag.png","flags.png"],
    lightIcons: [],
  },
};

export const Gaming: Story = {
  args: {
    subcategoryName: "Gaming",
    categoryPath: "social-medias-rewards-rating/gaming",
    regularIcons: ["gaming-10.png","gaming-100.png","gaming-5.png","gaming-first-place.png","gaming-ribbon-10.png","gaming-ribbon-100.png","gaming-ribbon-first.png","gaming-second-place.png","gaming-treasure-add.png","gaming-treasure-find.png","gaming-trophy-10.png","gaming-trophy-100.png","gaming-trophy-5.png","gaming-trophy-check.png"],
    lightIcons: [],
  },
};

export const Gifts: Story = {
  args: {
    subcategoryName: "Gifts",
    categoryPath: "social-medias-rewards-rating/gifts",
    regularIcons: ["gift-box-1.png","gift-box.png","gift-circle.png","gift-electronic.png","gift-heart.png"],
    lightIcons: [],
  },
};

export const Likes: Story = {
  args: {
    subcategoryName: "Likes",
    categoryPath: "social-medias-rewards-rating/likes",
    regularIcons: ["dislike-1.png","dislike-2.png","dislike.png","like-1.png","like-2.png","like-bubble.png","like-chat.png","like-circle.png","like-click.png","like-dislike.png","like-plus-bubble.png","like-plus-one.png","like-plus.png","like-ribbon-1.png","like-ribbon.png","like-shine.png","like.png"],
    lightIcons: [],
  },
};

export const LoveIt: Story = {
  args: {
    subcategoryName: "Love It",
    categoryPath: "social-medias-rewards-rating/love-it",
    regularIcons: ["love-it-add.png","love-it-angel.png","love-it-break.png","love-it-bubble.png","love-it-check.png","love-it-circle.png","love-it-disable.png","love-it-download.png","love-it-edit.png","love-it-flag.png","love-it-hand-give.png","love-it-lock.png","love-it-phone.png","love-it-remove.png","love-it-ribbon-1.png","love-it-ribbon-2.png","love-it-ribbon.png","love-it-search.png","love-it-settings.png","love-it-share.png","love-it-star.png","love-it-subtract.png","love-it-sync.png","love-it-text.png","love-it-upload.png","love-it-warning.png","love-it.png"],
    lightIcons: [],
  },
};

export const Mood: Story = {
  args: {
    subcategoryName: "Mood",
    categoryPath: "social-medias-rewards-rating/mood",
    regularIcons: ["mood-happy-laptop.png","mood-happy-smartphone.png","mood-happy.png","mood-lock-head.png","mood-moody.png","mood-peace.png","mood-question.png","mood-rock.png","mood-skull-chat.png","mood-warning.png"],
    lightIcons: [],
  },
};

export const Ranking: Story = {
  args: {
    subcategoryName: "Ranking",
    categoryPath: "social-medias-rewards-rating/ranking",
    regularIcons: ["ranking-first.png","ranking-people-first.png","ranking-ribbon-1.png","ranking-ribbon.png","ranking-star-top.png","ranking-stars-ribbon.png","ranking-winner-medal.png","ranking-winner-ribbon.png","ranking-winner.png"],
    lightIcons: [],
  },
};

export const Rating: Story = {
  args: {
    subcategoryName: "Rating",
    categoryPath: "social-medias-rewards-rating/rating",
    regularIcons: ["rating-half-star.png","rating-star-1.png","rating-star-add.png","rating-star-badge.png","rating-star-bubble-1.png","rating-star-bubble.png","rating-star-check.png","rating-star-circle.png","rating-star-give-1.png","rating-star-give.png","rating-star-remove.png","rating-star-ribbon.png","rating-star-square.png","rating-star-subtract.png","rating-star-three.png","rating-star-top.png","rating-star-winner.png","rating-star.png"],
    lightIcons: [],
  },
};

export const RewardsAwards: Story = {
  args: {
    subcategoryName: "Rewards Awards",
    categoryPath: "social-medias-rewards-rating/rewards-awards",
    regularIcons: ["award-badge-1.png","award-badge-2.png","award-badge-3.png","award-badge-star-1.png","award-badge-star.png","award-badge.png","award-medal-1.png","award-medal-2.png","award-medal-4.png","award-medal-shine.png","award-medal.png","award-oscar.png","award-ribbon-star-1.png","award-ribbon-star-2.png","award-ribbon-star-3.png","award-ribbon-star.png","award-star-1.png","award-star-head.png","award-star.png","award-trophy-1.png","award-trophy-person.png","award-trophy-star-1.png","award-trophy-star.png","award-trophy.png","award-wall-star.png"],
    lightIcons: [],
  },
};

export const SocialProfile: Story = {
  args: {
    subcategoryName: "Social Profile",
    categoryPath: "social-medias-rewards-rating/social-profile",
    regularIcons: ["social-profile-avatar.png","social-profile-bubble.png","social-profile-click.png","social-profile-network.png","social-profile-smartphone-add.png"],
    lightIcons: [],
  },
};

export const Trends: Story = {
  args: {
    subcategoryName: "Trends",
    categoryPath: "social-medias-rewards-rating/trends",
    regularIcons: ["trends-hashtag.png","trends-hot-1.png","trends-hot-flame.png","trends-hot.png","trends-torch-1.png","trends-torch.png"],
    lightIcons: [],
  },
};

export const VipTopUsers: Story = {
  args: {
    subcategoryName: "Vip Top Users",
    categoryPath: "social-medias-rewards-rating/vip-top-users",
    regularIcons: ["vip-circle.png","vip-crown-king-1.png","vip-crown-king.png","vip-crown-queen-1.png","vip-crown-queen-2.png","vip-crown-queen.png","vip-crown.png","vip-royal.png","vip.png"],
    lightIcons: [],
  },
};
