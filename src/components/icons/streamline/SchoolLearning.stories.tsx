import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/School Learning',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — School Learning',
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

export const AudioBooks: Story = {
  args: {
    subcategoryName: "Audio Books",
    categoryPath: "school-learning/audio-books",
    regularIcons: ["audio-book-art.png","audio-book-blind-exam-a.png","audio-book-blind-exam-f.png","audio-book-exam-a.png","audio-book-exam-f.png","audio-book-file.png","audio-book-headphones-head.png","audio-book-headphones-person.png","audio-book-headphones.png","audio-book-music.png","audio-book-record-microphone-a.png","audio-book-record-microphone-f.png","audio-book-record-microphone.png","audio-book-sports.png","audio-book-volume-high.png","audio-book-volume-medium.png"],
    lightIcons: [],
  },
};

export const ELearning: Story = {
  args: {
    subcategoryName: "E Learning",
    categoryPath: "school-learning/e-learning",
    regularIcons: ["e-learning-book-laptop.png","e-learning-book-smartphone.png","e-learning-exchange.png","e-learning-laptop-1.png","e-learning-laptop-math.png","e-learning-laptop.png","e-learning-monitor.png","e-learning-share.png","e-learning-smartphone.png"],
    lightIcons: [],
  },
};

export const LibraryReading: Story = {
  args: {
    subcategoryName: "Library Reading",
    categoryPath: "school-learning/library-reading",
    regularIcons: ["library-art.png","library-hidden.png","library-maths.png","library-music-1.png","library-music.png","library-sports.png","library.png","read-art.png","read-glasses-1.png","read-glasses.png","read-home-1.png","read-home-2.png","read-home.png","read-human.png","read-light-idea.png","read-maths.png","read-music-instrument.png","read-music.png","read-search.png","read-sports.png","read-world.png"],
    lightIcons: [],
  },
};

export const School: Story = {
  args: {
    subcategoryName: "School",
    categoryPath: "school-learning/school",
    regularIcons: ["school-bag.png","school-bell.png","school-board-chemistry.png","school-board-maths.png","school-book-apple.png","school-book-trophy.png","school-book.png","school-building.png","school-exam-a.png","school-exam-f-fail.png","school-locker-1.png","school-locker-2.png","school-locker-closed.png","school-locker.png","school-teacher-a.png","school-teacher-art.png","school-teacher-blind.png","school-teacher-braille.png","school-teacher-correct.png","school-teacher-f.png","school-teacher-maths.png","school-teacher-music.png","school-teacher-physical-education.png","school-teacher-wrong.png","school-teacher.png","school-test-art-1.png","school-test-art.png","school-test-musical.png","school-test-physical-education.png","school-test-results.png"],
    lightIcons: [],
  },
};

export const StudyingLearning: Story = {
  args: {
    subcategoryName: "Studying Learning",
    categoryPath: "school-learning/studying-learning",
    regularIcons: ["study-book.png","study-brain-1.png","study-brain.png","study-desk.png","study-exam-math.png","study-light-idea.png","study-maths-brain.png","study-notebook-maths.png","study-owl.png"],
    lightIcons: [],
  },
};
