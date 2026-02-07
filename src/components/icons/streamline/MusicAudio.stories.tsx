import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Music Audio',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Music Audio',
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

export const AudioFiles: Story = {
  args: {
    subcategoryName: "Audio Files",
    categoryPath: "music-audio/audio-files",
    regularIcons: ["audio-document-aac-1.png","audio-document-aac.png","audio-document-aif-1.png","audio-document-aif.png","audio-document-mid-1.png","audio-document-mid.png","audio-document-mp3-1.png","audio-document-mp3.png","audio-document-wav-1.png","audio-document-wav.png","audio-file-aac.png","audio-file-add.png","audio-file-aif.png","audio-file-cash.png","audio-file-check.png","audio-file-clock.png","audio-file-disable.png","audio-file-disk.png","audio-file-download.png","audio-file-edit.png","audio-file-equalizer.png","audio-file-heart.png","audio-file-home.png","audio-file-information.png","audio-file-lock.png","audio-file-mid.png","audio-file-mp3.png","audio-file-question.png","audio-file-refresh.png","audio-file-remove.png","audio-file-search.png","audio-file-settings.png","audio-file-share.png","audio-file-shield.png","audio-file-star.png","audio-file-subtract.png","audio-file-sync.png","audio-file-upload.png","audio-file-volume.png","audio-file-warning.png","audio-file-wav.png","audio-file.png"],
    lightIcons: [],
  },
};

export const AudioSystemEqualizer: Story = {
  args: {
    subcategoryName: "Audio System Equalizer",
    categoryPath: "music-audio/audio-system-equalizer",
    regularIcons: ["equalizer-1.png","equalizer-stereo-1.png","equalizer-stereo-play.png","equalizer-stereo.png","equalizer.png"],
    lightIcons: [],
  },
};

export const CdPlayer: Story = {
  args: {
    subcategoryName: "Cd Player",
    categoryPath: "music-audio/cd-player",
    regularIcons: ["cd-album-note.png","cd-album.png","cd-play.png","cd-player.png","cd-playing.png"],
    lightIcons: [],
  },
};

export const EarpodsAirpods: Story = {
  args: {
    subcategoryName: "Earpods Airpods",
    categoryPath: "music-audio/earpods-airpods",
    regularIcons: ["earpod-listen.png","earpods-bluetooth-1.png","earpods-bluetooth-2.png","earpods-bluetooth.png","earpods-charge.png","earpods-charging-1.png","earpods-charging.png","earpods-check.png","earpods-double-tap-1.png","earpods-ear.png","earpods-left.png","earpods-remove.png","earpods-right.png","earpods-tap-1.png","earpods-tap.png","earpods.png"],
    lightIcons: [],
  },
};

export const Headphones: Story = {
  args: {
    subcategoryName: "Headphones",
    categoryPath: "music-audio/headphones",
    regularIcons: ["headphones-1.png","headphones-2.png","headphones-bluetooth.png","headphones-cable.png","headphones-human-music.png","headphones-human.png","headphones-person.png","headphones-plug.png","headphones-wave.png","headphones-woman.png","headphones.png"],
    lightIcons: [],
  },
};

export const IpodDigitalPlayers: Story = {
  args: {
    subcategoryName: "Ipod Digital Players",
    categoryPath: "music-audio/ipod-digital-players",
    regularIcons: ["cd-player.png","ipod-play.png","ipod.png","music-player-1.png","music-player.png","player-phone-station-1.png","player-phone-station.png","portable-player.png"],
    lightIcons: [],
  },
};

export const Microphone: Story = {
  args: {
    subcategoryName: "Microphone",
    categoryPath: "music-audio/microphone",
    regularIcons: ["microphone-1.png","microphone-2.png","microphone-karaoke.png","microphone-off.png","microphone-podcast-1.png","microphone-podcast-2.png","microphone-podcast.png","microphone-sing-man.png","microphone-sing-woman.png","microphone-stage.png","microphone.png"],
    lightIcons: [],
  },
};

export const ModernMusic: Story = {
  args: {
    subcategoryName: "Modern Music",
    categoryPath: "music-audio/modern-music",
    regularIcons: ["modern-music-bass-guitar.png","modern-music-cymbal.png","modern-music-dj-tape.png","modern-music-dj.png","modern-music-drums.png","modern-music-electric-guitar.png","modern-music-guitar.png","modern-music-mix-touch.png","modern-music-mix.png","modern-music-monitor-speaker.png"],
    lightIcons: [],
  },
};

export const Music: Story = {
  args: {
    subcategoryName: "Music",
    categoryPath: "music-audio/music",
    regularIcons: ["music-basket-buy.png","music-book-note.png","music-clef-sheet.png","music-clef.png","music-concert-ticket.png","music-ear.png","music-metronome.png","music-note-1.png","music-note-2.png","music-note.png","music-sound.png","music-ticket.png"],
    lightIcons: [],
  },
};

export const MusicGenres: Story = {
  args: {
    subcategoryName: "Music Genres",
    categoryPath: "music-audio/music-genres",
    regularIcons: ["music-genre-70s.png","music-genre-80s.png","music-genre-90s.png","music-genre-album-anarchist.png","music-genre-baby.png","music-genre-brain.png","music-genre-burn.png","music-genre-choose.png","music-genre-dumbbell.png","music-genre-idea.png","music-genre-moon-night.png","music-genre-moon.png","music-genre-pacman.png","music-genre-settings.png","music-genre-smoke.png","music-genre-star.png","music-genre-stars.png","music-genre-team.png"],
    lightIcons: [],
  },
};

export const MusicInstruments: Story = {
  args: {
    subcategoryName: "Music Instruments",
    categoryPath: "music-audio/music-instruments",
    regularIcons: ["instrument-accordian-1.png","instrument-accordian.png","instrument-banjo.png","instrument-classical-piano.png","instrument-contrabass-sheet.png","instrument-contrabass.png","instrument-dholak-1.png","instrument-dholak.png","instrument-drums.png","instrument-french-horn.png","instrument-guitar.png","instrument-harp.png","instrument-maracas-1.png","instrument-maracas-2.png","instrument-pan-flute.png","instrument-piano-keys.png","instrument-piano.png","instrument-saxophone-play.png","instrument-saxophone.png","instrument-tambourine-1.png","instrument-tambourine.png","instrument-triangle.png","instrument-trumpet.png","instrument-tuba.png","instrument-xylophone.png"],
    lightIcons: [],
  },
};

export const Playlists: Story = {
  args: {
    subcategoryName: "Playlists",
    categoryPath: "music-audio/playlists",
    regularIcons: ["playlist-add.png","playlist-album.png","playlist-buy.png","playlist-check.png","playlist-clock.png","playlist-disable.png","playlist-download.png","playlist-edit.png","playlist-heart.png","playlist-home.png","playlist-information.png","playlist-lock.png","playlist-menu.png","playlist-question.png","playlist-remove.png","playlist-repeat.png","playlist-search.png","playlist-settings.png","playlist-share.png","playlist-shuffle.png","playlist-songs-1.png","playlist-songs.png","playlist-star-favorite.png","playlist-subtract.png","playlist-sync.png","playlist-upload.png","playlist-warning.png","playlist.png"],
    lightIcons: [],
  },
};

export const Podcasts: Story = {
  args: {
    subcategoryName: "Podcasts",
    categoryPath: "music-audio/podcasts",
    regularIcons: ["microphone-podcast-international.png","microphone-podcast-laptop.png","microphone-podcast-man.png","microphone-podcast-on-air.png","microphone-podcast-person.png","microphone-podcast-woman.png","podcast-live.png"],
    lightIcons: [],
  },
};

export const Radios: Story = {
  args: {
    subcategoryName: "Radios",
    categoryPath: "music-audio/radios",
    regularIcons: ["radio-antenna-1.png","radio-antenna-2.png","radio-antenna-handle.png","radio-antenna.png","radio-retro.png","radio-stereo-1.png","radio-stereo.png"],
    lightIcons: [],
  },
};

export const Speakers: Story = {
  args: {
    subcategoryName: "Speakers",
    categoryPath: "music-audio/speakers",
    regularIcons: ["speaker-1.png","speaker-stand.png","speaker.png","speakers-1.png","speakers-note.png","speakers-stand.png","speakers.png"],
    lightIcons: [],
  },
};

export const VinylRecords: Story = {
  args: {
    subcategoryName: "Vinyl Records",
    categoryPath: "music-audio/vinyl-records",
    regularIcons: ["vinyl-record-album.png","vinyl-record-gramophone.png","vinyl-record-player-2.png","vinyl-record-player.png","vinyl-record.png"],
    lightIcons: [],
  },
};

export const VolumeControls: Story = {
  args: {
    subcategoryName: "Volume Controls",
    categoryPath: "music-audio/volume-controls",
    regularIcons: ["volume-control-check-1.png","volume-control-check.png","volume-control-down-1.png","volume-control-down-2.png","volume-control-down-3.png","volume-control-down.png","volume-control-full-1.png","volume-control-full.png","volume-control-low-1.png","volume-control-low.png","volume-control-medium-1.png","volume-control-medium.png","volume-control-mute-1.png","volume-control-mute.png","volume-control-off-1.png","volume-control-off.png","volume-control-remove-1.png","volume-control-remove.png","volume-control-settings-1.png","volume-control-settings.png","volume-control-up-1.png","volume-control-up-2.png","volume-control-up-3.png","volume-control-up.png","volume-control-warning-1.png","volume-control-warning.png"],
    lightIcons: [],
  },
};

export const WalkmanTapes: Story = {
  args: {
    subcategoryName: "Walkman Tapes",
    categoryPath: "music-audio/walkman-tapes",
    regularIcons: ["walkman-cassette-1.png","walkman-cassette.png","walkman-headphones.png","walkman-heaphones-1.png","walkman-play.png","walkman.png"],
    lightIcons: [],
  },
};
