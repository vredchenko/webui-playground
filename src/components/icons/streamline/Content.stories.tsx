import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Content',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Content',
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

export const Archives: Story = {
  args: {
    subcategoryName: "Archives",
    categoryPath: "content/archives",
    regularIcons: ["archive-books.png","archive-drawer-table.png","archive-drawer.png","archive-folder.png","archive-locker-1.png","archive-locker.png","archive.png"],
    lightIcons: [],
  },
};

export const Books: Story = {
  args: {
    subcategoryName: "Books",
    categoryPath: "content/books",
    regularIcons: ["book-address-1.png","book-address.png","book-book-pages.png","book-bookmark.png","book-close-1.png","book-close-2.png","book-close-bookmark-1.png","book-close-bookmark.png","book-close.png","book-download-1.png","book-download.png","book-edit.png","book-flip-page.png","book-heart.png","book-image.png","book-library-1.png","book-library-2.png","book-library-shelf.png","book-library.png","book-music .png","book-next-page.png","book-open-1.png","book-open-2.png","book-open-bookmark.png","book-open-text.png","book-open.png","book-pin.png","book-play.png","book-search.png","book-share.png","book-sound.png","book-star-1.png","book-star.png","book-target.png","book-upload.png","phonebook-1.png","phonebook.png"],
    lightIcons: [],
  },
};

export const ContentCreation: Story = {
  args: {
    subcategoryName: "Content Creation",
    categoryPath: "content/content-creation",
    regularIcons: ["content-browser-edit.png","content-brush-pen.png","content-ink-pen-write.png","content-ink-pen.png","content-notebook-pencil.png","content-paper-edit.png","content-pen-1.png","content-pen-2.png","content-pen-3.png","content-pen-4.png","content-pen-6.png","content-pen-double.png","content-pen-write-1.png","content-pen-write.png","content-pen.png","content-pencil-quill.png","content-pencil-write.png","content-pens-pocket.png","content-pens.png","content-quill-ink.png","content-quill-pen.png","content-typing-machine-1.png","content-typing-machine.png","content-write.png"],
    lightIcons: [],
  },
};

export const Newspapers: Story = {
  args: {
    subcategoryName: "Newspapers",
    categoryPath: "content/newspapers",
    regularIcons: ["newspaper-fold.png","newspaper-give.png","newspaper-read-man.png","newspaper-read.png","newspaper.png"],
    lightIcons: [],
  },
};

export const Notes: Story = {
  args: {
    subcategoryName: "Notes",
    categoryPath: "content/notes",
    regularIcons: ["notes-add.png","notes-book-1.png","notes-book-text.png","notes-book.png","notes-calendar.png","notes-cash.png","notes-check.png","notes-checklist-flip.png","notes-clock.png","notes-diary.png","notes-disable.png","notes-download.png","notes-edit.png","notes-flip-1.png","notes-flip.png","notes-give-1.png","notes-give.png","notes-heart.png","notes-home.png","notes-list.png","notes-lock.png","notes-module.png","notes-paper-approve.png","notes-paper-text.png","notes-paper.png","notes-question.png","notes-quill.png","notes-remove.png","notes-search.png","notes-settings.png","notes-share.png","notes-star.png","notes-subtract.png","notes-sync.png","notes-tasks.png","notes-text-flip.png","notes-upload.png","notes-warning.png"],
    lightIcons: [],
  },
};
