import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Files Folders',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Files Folders',
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

export const CommonFiles: Story = {
  args: {
    subcategoryName: "Common Files",
    categoryPath: "files-folders/common-files",
    regularIcons: ["common-file-add.png","common-file-award.png","common-file-book.png","common-file-bookmark.png","common-file-cash.png","common-file-check.png","common-file-dash.png","common-file-disable.png","common-file-double-1.png","common-file-double-2.png","common-file-double-horizontal.png","common-file-double.png","common-file-download.png","common-file-edit.png","common-file-empty.png","common-file-give-hand-1.png","common-file-give-hand-2.png","common-file-give-hand-3.png","common-file-give-hand.png","common-file-heart-1.png","common-file-heart.png","common-file-home.png","common-file-horizontal-image.png","common-file-horizontal-text.png","common-file-horizontal.png","common-file-lock.png","common-file-module-1.png","common-file-module.png","common-file-question.png","common-file-quill.png","common-file-refresh.png","common-file-remove.png","common-file-rotate.png","common-file-search.png","common-file-settings-1.png","common-file-settings.png","common-file-share.png","common-file-stack.png","common-file-star.png","common-file-subtract.png","common-file-sync.png","common-file-text-add.png","common-file-text-cash.png","common-file-text-check.png","common-file-text-clock.png","common-file-text-disable.png","common-file-text-download.png","common-file-text-edit.png","common-file-text-heart.png","common-file-text-home.png","common-file-text-info.png","common-file-text-lock.png","common-file-text-question.png","common-file-text-refresh.png","common-file-text-remove.png","common-file-text-search.png","common-file-text-settings.png","common-file-text-share.png","common-file-text-shield.png","common-file-text-star.png","common-file-text-subtract.png","common-file-text-sync.png","common-file-text-upload.png","common-file-text-warning.png","common-file-text.png","common-file-upload.png","common-file-warning.png"],
    lightIcons: [],
  },
};

export const FilesCopyright: Story = {
  args: {
    subcategoryName: "Files Copyright",
    categoryPath: "files-folders/files-copyright",
    regularIcons: ["file-copyright-c-1.png","file-copyright-c.png","file-copyright-cc.png","file-copyright-dollar.png","file-copyright-equal.png","file-copyright-r.png","file-copyright-tm.png","file-copyright-user.png"],
    lightIcons: [],
  },
};

export const Folders: Story = {
  args: {
    subcategoryName: "Folders",
    categoryPath: "files-folders/folders",
    regularIcons: ["folder-1.png","folder-add.png","folder-bookmark-1.png","folder-bookmark.png","folder-cash-1.png","folder-cash.png","folder-check.png","folder-clock.png","folder-code.png","folder-connect.png","folder-dash.png","folder-disable-1.png","folder-disable.png","folder-download.png","folder-edit-1.png","folder-edit.png","folder-empty-1.png","folder-empty.png","folder-exchange.png","folder-fiile-edit.png","folder-file-1.png","folder-file-lock.png","folder-file-star.png","folder-file.png","folder-heart.png","folder-hold.png","folder-home-1.png","folder-home.png","folder-image-1.png","folder-image.png","folder-lock-1.png","folder-lock.png","folder-media-1.png","folder-media.png","folder-music-1.png","folder-music.png","folder-question.png","folder-remove.png","folder-search-1.png","folder-search.png","folder-settings.png","folder-share.png","folder-stand.png","folder-star.png","folder-subtract.png","folder-sync.png","folder-text.png","folder-upload.png","folder-warning.png","folder-zip.png","folder.png"],
    lightIcons: [],
  },
};

export const ZippedFiles: Story = {
  args: {
    subcategoryName: "Zipped Files",
    categoryPath: "files-folders/zipped-files",
    regularIcons: ["zip-file-1.png","zip-file-add.png","zip-file-cash.png","zip-file-check.png","zip-file-clock.png","zip-file-compress.png","zip-file-disable.png","zip-file-download.png","zip-file-edit.png","zip-file-home.png","zip-file-information.png","zip-file-lock.png","zip-file-question.png","zip-file-rar.png","zip-file-remove.png","zip-file-search.png","zip-file-settings.png","zip-file-share.png","zip-file-shield.png","zip-file-star.png","zip-file-subtract.png","zip-file-sync.png","zip-file-upload.png","zip-file-warning.png","zip-file.png"],
    lightIcons: [],
  },
};
