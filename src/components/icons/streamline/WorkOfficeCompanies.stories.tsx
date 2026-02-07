import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Work Office Companies',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Work Office Companies',
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

export const HumanResources: Story = {
  args: {
    subcategoryName: "Human Resources",
    categoryPath: "work-office-companies/human-resources",
    regularIcons: ["human-resources-businessman-clock.png","human-resources-businessman-mail.png","human-resources-businessman.png","human-resources-employee-previous-1.png","human-resources-employee-previous.png","human-resources-employee-star.png","human-resources-employee-stress.png","human-resources-employee.png","human-resources-hierarchy-1.png","human-resources-hierarchy-man.png","human-resources-hierarchy-woman.png","human-resources-hierarchy.png","human-resources-man-previous.png","human-resources-network.png","human-resources-offer-employee-1.png","human-resources-offer-employee.png","human-resources-offer-man-1.png","human-resources-offer-man.png","human-resources-offer-woman-1.png","human-resources-offer-woman.png","human-resources-rating-man.png","human-resources-rating-woman.png","human-resources-search-employees.png","human-resources-search-men.png","human-resources-search-team.png","human-resources-search-women.png","human-resources-team-settings.png","human-resources-woman-previous.png","human-resources-workflow.png"],
    lightIcons: [],
  },
};

export const IdeasCreativity: Story = {
  args: {
    subcategoryName: "Ideas Creativity",
    categoryPath: "work-office-companies/ideas-creativity",
    regularIcons: ["browser-idea.png","bulb-1.png","bulb.png","eye-idea.png","head-idea.png","idea-message.png","idea-settings.png","idea-strategy.png","laptop-idea.png","team-idea.png","team-share-idea.png","user-idea.png"],
    lightIcons: [],
  },
};

export const JobSearchRecruiting: Story = {
  args: {
    subcategoryName: "Job Search Recruiting",
    categoryPath: "work-office-companies/job-search-recruiting",
    regularIcons: ["job-choose-cadidate-1.png","job-choose-candidate.png","job-seach-man.png","job-seach-profile.png","job-seach-team-man.png","job-seach-team-woman.png","job-seach-woman.png","job-search.png"],
    lightIcons: [],
  },
};

export const Legal: Story = {
  args: {
    subcategoryName: "Legal",
    categoryPath: "work-office-companies/legal",
    regularIcons: ["legal-hammer.png","legal-scale-1.png","legal-scale-2.png","legal-scale-unequal-1.png","legal-scale-unequal.png","legal-scale.png"],
    lightIcons: [],
  },
};

export const MeetingsCollaboration: Story = {
  args: {
    subcategoryName: "Meetings Collaboration",
    categoryPath: "work-office-companies/meetings-collaboration",
    regularIcons: ["presentation.png","team-approve-disapprove.png","team-chat.png","team-exchange-chat.png","team-meeting-chat.png","team-meeting-flash.png","team-meeting-message-lock-1.png","team-meeting-message-lock.png","team-meeting-message-question.png","team-meeting-message-question_1.png","team-meeting-message-women-lock.png","team-meeting-message-women-question.png","team-meeting.png","user-man-stress.png","user-woman-stress.png"],
    lightIcons: [],
  },
};

export const Office: Story = {
  args: {
    subcategoryName: "Office",
    categoryPath: "work-office-companies/office",
    regularIcons: ["office-business-card.png","office-clipper.png","office-drawer.png","office-eraser.png","office-folder-1.png","office-folder-sealed.png","office-folder.png","office-glue.png","office-hole-puncher.png","office-lamp.png","office-printer.png","office-razor.png","office-shelf-1.png","office-shelf-corner.png","office-shelf.png","office-shredder-1.png","office-shredder.png","office-sign-document.png","office-stamp-document.png","office-stapler-1.png","office-stapler.png","office-stationery.png","office-tape-1.png","office-tape-2.png","office-tape.png"],
    lightIcons: [],
  },
};

export const OfficeFiles: Story = {
  args: {
    subcategoryName: "Office Files",
    categoryPath: "work-office-companies/office-files",
    regularIcons: ["file-rar-1.png","file-rar.png","file-zip-1.png","file-zip.png","office-file-adobe-alternate.png","office-file-adobe.png","office-file-doc-1.png","office-file-doc.png","office-file-glue-alternate.png","office-file-glue.png","office-file-graph-alternate.png","office-file-graph.png","office-file-hierarchy-alternate.png","office-file-hierarchy.png","office-file-key-1.png","office-file-key.png","office-file-module-edit-alternate.png","office-file-module-edit.png","office-file-pdf-1.png","office-file-pdf.png","office-file-pps-1.png","office-file-pps.png","office-file-ppt-1.png","office-file-ppt.png","office-file-presentation-1.png","office-file-presentation.png","office-file-rtf-1.png","office-file-rtf.png","office-file-sheet-alternate.png","office-file-sheet.png","office-file-stamp-alternate.png","office-file-stamp.png","office-file-text-alternate.png","office-file-text-graph-alternate.png","office-file-text-graph.png","office-file-text.png","office-file-txt-1.png","office-file-txt.png","office-file-xls-1.png","office-file-xls.png"],
    lightIcons: [],
  },
};

export const Presentations: Story = {
  args: {
    subcategoryName: "Presentations",
    categoryPath: "work-office-companies/presentations",
    regularIcons: ["presentation-amphitheater.png","presentation-analytics.png","presentation-audience.png","presentation-board-graph.png","presentation-board.png","presentation-desk-notes.png","presentation-microphone-1.png","presentation-microphone.png","presentation-projector-1.png","presentation-projector-screen-bars.png","presentation-projector-screen-budget-analytics.png","presentation-projector-screen-cart.png","presentation-projector-screen-chat.png","presentation-projector-screen-clock.png","presentation-projector-screen-hierarchy.png","presentation-projector-screen-image.png","presentation-projector-screen-pie-chart.png","presentation-projector-screen-pin.png","presentation-projector-screen-play.png","presentation-projector-screen-programing.png","presentation-projector-screen-settings.png","presentation-projector.png","presentation-screen.png","presentation-speaker.png","presentation-statistics.png"],
    lightIcons: [],
  },
};

export const Tasks: Story = {
  args: {
    subcategoryName: "Tasks",
    categoryPath: "work-office-companies/tasks",
    regularIcons: ["list-edit.png","list-quill.png","list-to-do.png","task-finger-bandage.png","task-finger-show.png","task-list-add-1.png","task-list-add.png","task-list-approve.png","task-list-cash.png","task-list-check-1.png","task-list-check-1_1.png","task-list-check.png","task-list-clock.png","task-list-delete.png","task-list-disable.png","task-list-download-1.png","task-list-download.png","task-list-edit-1.png","task-list-edit.png","task-list-heart.png","task-list-lock.png","task-list-multiple.png","task-list-pen.png","task-list-pin.png","task-list-plain-1.png","task-list-plain.png","task-list-question.png","task-list-remove.png","task-list-search.png","task-list-settings.png","task-list-share.png","task-list-star.png","task-list-subtract.png","task-list-sync.png","task-list-text-1.png","task-list-text.png","task-list-upload-1.png","task-list-upload.png","task-list-warning.png"],
    lightIcons: [],
  },
};

export const VideoMeetings: Story = {
  args: {
    subcategoryName: "Video Meetings",
    categoryPath: "work-office-companies/video-meetings",
    regularIcons: ["meeting-camera-circle.png","meeting-camera-square.png","meeting-camera.png","meeting-headphone-wireless.png","meeting-headphones-1.png","meeting-headphones.png","meeting-laptop.png","meeting-monitor-webcam.png","meeting-monitor.png","meeting-remote.png","meeting-smartphone-hold.png","meeting-smartphone-message.png","meeting-smartphone.png","meeting-team-laptop-1.png","meeting-team-laptop-man-1.png","meeting-team-laptop-man.png","meeting-team-laptop-woman-1.png","meeting-team-laptop-woman.png","meeting-team-laptop.png","meeting-team-monitor-1.png","meeting-team-monitor-man-1.png","meeting-team-monitor-man.png","meeting-team-monitor-woman-1.png","meeting-team-monitor-woman.png","meeting-team-monitor.png"],
    lightIcons: [],
  },
};

export const WorkOffice: Story = {
  args: {
    subcategoryName: "Work Office",
    categoryPath: "work-office-companies/work-office",
    regularIcons: ["office-chair-table-1.png","office-chair-table-2.png","office-chair-table.png","office-chair.png","office-desk-2.png","office-desk-lamp.png","office-desk.png","office-drawing-board.png","office-employee.png","office-outdoors-1.png","office-outdoors.png","office-table-cabinets.png","office-table.png","office-work-wireless.png"],
    lightIcons: [],
  },
};
