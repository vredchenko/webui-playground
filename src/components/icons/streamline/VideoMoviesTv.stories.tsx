import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Video Movies Tv',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Video Movies Tv',
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

export const Cameras: Story = {
  args: {
    subcategoryName: "Cameras",
    categoryPath: "video-movies-tv/cameras",
    regularIcons: ["camera-holder.png","camera-professional.png","camera-small.png","camera-studio.png","camera.png"],
    lightIcons: [],
  },
};

export const Controls: Story = {
  args: {
    subcategoryName: "Controls",
    categoryPath: "video-movies-tv/controls",
    regularIcons: ["controls-camera-backward.png","controls-camera-forward.png","controls-camera-next.png","controls-camera-off.png","controls-camera-pause.png","controls-camera-play.png","controls-camera-previous.png","controls-camera-record.png","controls-camera-stop.png","controls-eject.png","controls-forward.png","controls-movie-backward.png","controls-movie-forward.png","controls-movie-next.png","controls-movie-pause.png","controls-movie-play.png","controls-movie-previous.png","controls-movie-record.png","controls-movie-stop.png","controls-next.png","controls-pause.png","controls-play.png","controls-previous.png","controls-record.png","controls-rewind.png","controls-stop.png"],
    lightIcons: [],
  },
};

export const ModernTv: Story = {
  args: {
    subcategoryName: "Modern Tv",
    categoryPath: "video-movies-tv/modern-tv",
    regularIcons: ["modern-tv-3d-glasses.png","modern-tv-3d-sync.png","modern-tv-3d.png","modern-tv-4k.png","modern-tv-8k.png","modern-tv-apple.png","modern-tv-channel-van.png","modern-tv-curvy-edge.png","modern-tv-flat-screen.png","modern-tv-flat.png","modern-tv-hd.png","modern-tv-news.png","modern-tv-remote-hand.png","modern-tv-remote-smart.png","modern-tv-remote.png","modern-tv-uhd.png","modern-tv-wide.png"],
    lightIcons: [],
  },
};

export const Movies: Story = {
  args: {
    subcategoryName: "Movies",
    categoryPath: "video-movies-tv/movies",
    regularIcons: ["movies-3d-glasses.png","movies-audience.png","movies-director-chair.png","movies-film.png","movies-home.png","movies-reel-1.png","movies-reel.png","movies-set-equipment.png","movies-sit-drink.png"],
    lightIcons: [],
  },
};

export const VideoEdition: Story = {
  args: {
    subcategoryName: "Video Edition",
    categoryPath: "video-movies-tv/video-edition",
    regularIcons: ["video-edit-add.png","video-edit-brightness-1.png","video-edit-brightness.png","video-edit-camera-archive.png","video-edit-camera-measure.png","video-edit-cc-titles.png","video-edit-cc.png","video-edit-clock.png","video-edit-cut.png","video-edit-flip-screen.png","video-edit-magic-wand-1.png","video-edit-magic-wand.png","video-edit-peel.png","video-edit-play.png","video-edit-split.png","video-edit-subtract.png"],
    lightIcons: [],
  },
};

export const VideoFiles: Story = {
  args: {
    subcategoryName: "Video Files",
    categoryPath: "video-movies-tv/video-files",
    regularIcons: ["vide-document-avi-1.png","vide-document-avi.png","vide-document-flv-1.png","vide-document-flv.png","vide-document-m4v-1.png","vide-document-m4v.png","vide-document-mov-1.png","vide-document-mov.png","vide-document-mp4-1.png","vide-document-mp4.png","vide-document-mpg-1.png","vide-document-mpg.png","vide-document-qt-1.png","vide-document-qt.png","video-file-add.png","video-file-avi.png","video-file-camera.png","video-file-check.png","video-file-clock.png","video-file-disable.png","video-file-dollar.png","video-file-download.png","video-file-edit.png","video-file-flv.png","video-file-heart.png","video-file-home.png","video-file-information.png","video-file-lock.png","video-file-m4v.png","video-file-mov.png","video-file-mp4.png","video-file-mpg.png","video-file-play-circle.png","video-file-play.png","video-file-qt.png","video-file-question.png","video-file-refresh.png","video-file-remove.png","video-file-search.png","video-file-settings.png","video-file-share.png","video-file-shield.png","video-file-star.png","video-file-subtract.png","video-file-sync.png","video-file-upload.png","video-file-warning.png"],
    lightIcons: [],
  },
};

export const VideoPlayers: Story = {
  args: {
    subcategoryName: "Video Players",
    categoryPath: "video-movies-tv/video-players",
    regularIcons: ["video-player-adjust-finger.png","video-player-adjust.png","video-player-album.png","video-player-cloud.png","video-player-device-play.png","video-player-device.png","video-player-interface.png","video-player-laptop.png","video-player-monitor.png","video-player-movie-1.png","video-player-movie.png","video-player-pc.png","video-player-playing.png","video-player-slider.png","video-player-smartphone-horizontal.png","video-player-smartphone.png","video-player-subtitle.png","video-player.png"],
    lightIcons: [],
  },
};

export const VintageTv: Story = {
  args: {
    subcategoryName: "Vintage Tv",
    categoryPath: "video-movies-tv/vintage-tv",
    regularIcons: ["vintage-tv-1.png","vintage-tv-3.png","vintage-tv-4.png","vintage-tv-watch.png","vintage-tv.png"],
    lightIcons: [],
  },
};
