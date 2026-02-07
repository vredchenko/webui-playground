import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Logos',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Logos',
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

export const Advertising: Story = {
  args: {
    subcategoryName: "Advertising",
    categoryPath: "logos/advertising",
    regularIcons: ["advertising-technorati.png"],
    lightIcons: [],
  },
};

export const BlogNewsFeed: Story = {
  args: {
    subcategoryName: "Blog News Feed",
    categoryPath: "logos/blog-news-feed",
    regularIcons: ["Medium-new.png","blog-blogger.png","feed-dailybooth.png","feed-digg.png","feed-drupal.png","feed-medium.png","feed-news-vine.png","feed-rss.png","feed-sina-weibo.png","feed-slash-dot.png","feed-squidoo.png","feed-tumblr.png"],
    lightIcons: [],
  },
};

export const DesignersCommunities: Story = {
  args: {
    subcategoryName: "Designers Communities",
    categoryPath: "logos/designers-communities",
    regularIcons: ["designer-community-adobe.png","designer-community-behance-1.png","designer-community-behance.png","designer-community-coroflot.png","designer-community-design-bump.png","designer-community-design-float.png","designer-community-designmoo.png","designer-community-dribbble.png","designer-community-forrst.png","designer-community-path.png"],
    lightIcons: [],
  },
};

export const DeveloperCommunities: Story = {
  args: {
    subcategoryName: "Developer Communities",
    categoryPath: "logos/developer-communities",
    regularIcons: ["developer-community-github-1.png","developer-community-github.png","developer-community-stack-overflow.png","developer-community-www.png"],
    lightIcons: [],
  },
};

export const ECommerce: Story = {
  args: {
    subcategoryName: "E Commerce",
    categoryPath: "logos/e-commerce",
    regularIcons: ["e-commerce-amazon-1.png","e-commerce-amazon.png","e-commerce-app-store.png","e-commerce-etsy.png","e-commerce-gdgt.png","e-commerce-magento.png","e-commerce-play-store.png"],
    lightIcons: [],
  },
};

export const InternetProtocol: Story = {
  args: {
    subcategoryName: "Internet Protocol",
    categoryPath: "logos/internet-protocol",
    regularIcons: ["protocol-open-id.png"],
    lightIcons: [],
  },
};

export const MailingServices: Story = {
  args: {
    subcategoryName: "Mailing Services",
    categoryPath: "logos/mailing-services",
    regularIcons: ["mailing-service-email.png"],
    lightIcons: [],
  },
};

export const MessagingVideoMeetings: Story = {
  args: {
    subcategoryName: "Messaging Video Meetings",
    categoryPath: "logos/messaging-video-meetings",
    regularIcons: ["messaging-aim.png","messaging-gabbr.png","messaging-google-buzz.png","messaging-google-talk.png","messaging-icq.png","messaging-imessage.png","messaging-kik-1.png","messaging-kik.png","messaging-line-app-1.png","messaging-line-app.png","messaging-messages.png","messaging-msn-messenger.png","messaging-pingchat.png","messaging-qik.png","messaging-we-chat.png","messaging-whatsapp.png","video-meeting-skype.png"],
    lightIcons: [],
  },
};

export const Music: Story = {
  args: {
    subcategoryName: "Music",
    categoryPath: "logos/music",
    regularIcons: ["social-music-beats-studio.png","social-music-grooveshark.png","social-music-itunes.png","social-music-lastfm.png","social-music-podcast.png","social-music-rdio.png","social-music-soundcloud.png","social-music-spotify-1.png","social-music-spotify-2.png","social-music-spotify.png"],
    lightIcons: [],
  },
};

export const OnlineReading: Story = {
  args: {
    subcategoryName: "Online Reading",
    categoryPath: "logos/online-reading",
    regularIcons: ["online-reading-blinklist.png","online-reading-readernaut.png","online-reading-scribd-1.png","online-reading-scribd.png","online-reading-wattpad.png"],
    lightIcons: [],
  },
};

export const OsSystems: Story = {
  args: {
    subcategoryName: "Os Systems",
    categoryPath: "logos/os-systems",
    regularIcons: ["os-system-apple.png","os-system-blackberry.png","os-system-microsoft.png","os-system-osx.png","os-system-vodafone.png"],
    lightIcons: [],
  },
};

export const Payment: Story = {
  args: {
    subcategoryName: "Payment",
    categoryPath: "logos/payment",
    regularIcons: ["payment-paypal.png","payment-stripe.png"],
    lightIcons: [],
  },
};

export const PhotosImages: Story = {
  args: {
    subcategoryName: "Photos Images",
    categoryPath: "logos/photos-images",
    regularIcons: ["social-500px.png","social-deviant-art-1.png","social-deviant-art.png","social-flickr.png","social-icon-dock.png","social-instagram-1.png","social-instagram.png","social-photobucket.png","social-picasa.png","social-pinterest.png","social-smug-mug.png"],
    lightIcons: [],
  },
};

export const ProfessionalNetworks: Story = {
  args: {
    subcategoryName: "Professional Networks",
    categoryPath: "logos/professional-networks",
    regularIcons: ["professional-network-beta-list.png","professional-network-linkedin.png","professional-network-nomad-list.png"],
    lightIcons: [],
  },
};

export const ProfessionalTools: Story = {
  args: {
    subcategoryName: "Professional Tools",
    categoryPath: "logos/professional-tools",
    regularIcons: ["professional-tool-basecamp.png","professional-tool-dropbox.png","professional-tool-evernote.png","professional-tool-google-drive.png","professional-tool-mobile-me.png"],
    lightIcons: [],
  },
};

export const Qa: Story = {
  args: {
    subcategoryName: "Qa",
    categoryPath: "logos/qa",
    regularIcons: ["q&a-quora.png"],
    lightIcons: [],
  },
};

export const SearchEngines: Story = {
  args: {
    subcategoryName: "Search Engines",
    categoryPath: "logos/search-engines",
    regularIcons: ["search-engine-bing-1.png","search-engine-bing-2.png","search-engine-bing.png","search-engine-google.png","search-engine-yahoo.png"],
    lightIcons: [],
  },
};

export const SocialBookmarking: Story = {
  args: {
    subcategoryName: "Social Bookmarking",
    categoryPath: "logos/social-bookmarking",
    regularIcons: ["social-bookmark-delicious.png","social-bookmark-ffffound.png","social-bookmark-instapaper.png","social-bookmark-stumble-upon-1.png","social-bookmark-stumble-upon.png","social-bookmark-zootool.png"],
    lightIcons: [],
  },
};

export const SocialMedias: Story = {
  args: {
    subcategoryName: "Social Medias",
    categoryPath: "logos/social-medias",
    regularIcons: ["social-media-about-me.png","social-media-bebo.png","social-media-bnter.png","social-media-brightkite.png","social-media-diingo.png","social-media-facebook-1.png","social-media-facebook.png","social-media-food-spotting-1.png","social-media-food-spotting.png","social-media-formspring.png","social-media-foursquare-1.png","social-media-foursquare.png","social-media-friends-feed.png","social-media-google-plus-1.png","social-media-google-plus-2.png","social-media-google-plus.png","social-media-google.png","social-media-gowalla-1.png","social-media-gowalla-2.png","social-media-gowalla.png","social-media-hi-five.png","social-media-hyves.png","social-media-identica.png","social-media-irc-galleria.png","social-media-iwiw-1.png","social-media-iwiw.png","social-media-meetup-alternate.png","social-media-memori.png","social-media-mixx.png","social-media-mr-wong.png","social-media-my-space.png","social-media-nexopia.png","social-media-odnoklassniki.png","social-media-orkut.png","social-media-plurk-1.png","social-media-plurk.png","social-media-reddit.png","social-media-renren-1.png","social-media-renren.png","social-media-retweet.png","social-media-slide-share.png","social-media-snapchat.png","social-media-students-circle-network.png","social-media-tuenti.png","social-media-twitter-1.png","social-media-twitter.png","social-media-vk.png","social-media-xing.png","social-media-yammer.png","social-media-yelp.png"],
    lightIcons: [],
  },
};

export const Statistics: Story = {
  args: {
    subcategoryName: "Statistics",
    categoryPath: "logos/statistics",
    regularIcons: ["statistics-daytum.png","statistics-feed-burner.png"],
    lightIcons: [],
  },
};

export const Technology: Story = {
  args: {
    subcategoryName: "Technology",
    categoryPath: "logos/technology",
    regularIcons: ["technology-ati.png","technology-fitbit.png"],
    lightIcons: [],
  },
};

export const Travel: Story = {
  args: {
    subcategoryName: "Travel",
    categoryPath: "logos/travel",
    regularIcons: ["travel-tripit.png"],
    lightIcons: [],
  },
};

export const VideoGames: Story = {
  args: {
    subcategoryName: "Video Games",
    categoryPath: "logos/video-games",
    regularIcons: ["video-game-ea.png","video-game-friend-ster.png"],
    lightIcons: [],
  },
};

export const Videos: Story = {
  args: {
    subcategoryName: "Videos",
    categoryPath: "logos/videos",
    regularIcons: ["social-video-crunchyroll.png","social-video-imdb.png","social-video-meta-cafe.png","social-video-mubi.png","social-video-viddler.png","social-video-vimeo.png","social-video-youtube-clip.png","social-video-youtube.png"],
    lightIcons: [],
  },
};

export const WebServices: Story = {
  args: {
    subcategoryName: "Web Services",
    categoryPath: "logos/web-services",
    regularIcons: ["web-service-amazon-web-services.png","web-service-baidu.png","web-service-dzone.png","web-service-mylife.png","web-service-ning.png","web-service-squarespace.png","web-service-treehouse.png","web-service-virb.png","web-service-wikipedia.png"],
    lightIcons: [],
  },
};
