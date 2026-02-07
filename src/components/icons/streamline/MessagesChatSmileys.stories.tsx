import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Messages Chat Smileys',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Messages Chat Smileys',
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

export const Conversation: Story = {
  args: {
    subcategoryName: "Conversation",
    categoryPath: "messages-chat-smileys/conversation",
    regularIcons: ["conversation-browser.png","conversation-chat-1.png","conversation-chat-2.png","conversation-chat-bubble.png","conversation-chat-text.png","conversation-chat.png","conversation-question-warning-1.png","conversation-question-warning.png","conversation-seen.png","conversation-smile-type-1.png","conversation-smile-type.png","conversation-speak.png","conversation-spy.png","conversation-sync.png","conversation-text.png"],
    lightIcons: [],
  },
};

export const MessagesPeople: Story = {
  args: {
    subcategoryName: "Messages People",
    categoryPath: "messages-chat-smileys/messages-people",
    regularIcons: ["messages-people-person-bubble-1.png","messages-people-person-bubble-circle-1.png","messages-people-person-bubble-square-1.png","messages-people-user-bubble-circle.png","messages-people-user-bubble-square.png","messages-people-user-check.png","messages-people-user-clock.png","messages-people-user-dollar.png","messages-people-user-heart.png","messages-people-user-idea.png","messages-people-user-question-exclamation.png","messages-people-user-question.png","messages-people-user-skull.png","messages-people-user-star.png","messages-people-user-warning-1.png","messages-people-woman-bubble-1.png","messages-people-woman-bubble-circle-1.png","messages-people-woman-bubble-square-1.png"],
    lightIcons: [],
  },
};

export const MessagesSpeechBubbles: Story = {
  args: {
    subcategoryName: "Messages Speech Bubbles",
    categoryPath: "messages-chat-smileys/messages-speech-bubbles",
    regularIcons: ["messages-bubble-add.png","messages-bubble-check.png","messages-bubble-disable.png","messages-bubble-double.png","messages-bubble-download.png","messages-bubble-edit.png","messages-bubble-forward-all.png","messages-bubble-forward.png","messages-bubble-graph.png","messages-bubble-heart-1.png","messages-bubble-heart.png","messages-bubble-image.png","messages-bubble-information.png","messages-bubble-laptop-hi.png","messages-bubble-lock.png","messages-bubble-question.png","messages-bubble-quotation.png","messages-bubble-quote.png","messages-bubble-remove.png","messages-bubble-search.png","messages-bubble-settings.png","messages-bubble-share.png","messages-bubble-smile.png","messages-bubble-square-add.png","messages-bubble-square-check.png","messages-bubble-square-disable.png","messages-bubble-square-download.png","messages-bubble-square-edit.png","messages-bubble-square-forward-all.png","messages-bubble-square-forward.png","messages-bubble-square-graph.png","messages-bubble-square-heart-1.png","messages-bubble-square-heart.png","messages-bubble-square-image.png","messages-bubble-square-information.png","messages-bubble-square-lock.png","messages-bubble-square-menu.png","messages-bubble-square-question.png","messages-bubble-square-quotation.png","messages-bubble-square-quote.png","messages-bubble-square-remove.png","messages-bubble-square-search.png","messages-bubble-square-settings.png","messages-bubble-square-share.png","messages-bubble-square-smile.png","messages-bubble-square-star.png","messages-bubble-square-subtract.png","messages-bubble-square-sync.png","messages-bubble-square-text.png","messages-bubble-square-typing-1.png","messages-bubble-square-typing.png","messages-bubble-square-upload.png","messages-bubble-square-warning-triangle.png","messages-bubble-square-warning.png","messages-bubble-square.png","messages-bubble-star.png","messages-bubble-subtract.png","messages-bubble-sync.png","messages-bubble-text-1.png","messages-bubble-text.png","messages-bubble-typing-1.png","messages-bubble-typing.png","messages-bubble-upload.png","messages-bubble-warning-triangle.png","messages-bubble-warning.png","messages-bubble-window-hi.png","messages-bubble.png"],
    lightIcons: [],
  },
};

export const SignalFlags: Story = {
  args: {
    subcategoryName: "Signal Flags",
    categoryPath: "messages-chat-smileys/signal-flags",
    regularIcons: ["signal-flag.png","signal-flags-1.png","signal-flags.png"],
    lightIcons: [],
  },
};

export const Smileys: Story = {
  args: {
    subcategoryName: "Smileys",
    categoryPath: "messages-chat-smileys/smileys",
    regularIcons: ["smiley-angel.png","smiley-angry.png","smiley-bad.png","smiley-blessed.png","smiley-blush.png","smiley-blushing.png","smiley-bright.png","smiley-cheeky.png","smiley-cheerful.png","smiley-concerned.png","smiley-cowboy.png","smiley-crazy-tongue.png","smiley-crazy.png","smiley-crying-rainbow.png","smiley-crying.png","smiley-decode.png","smiley-devastated-1.png","smiley-devastated.png","smiley-disapointed-1.png","smiley-disapointed-2.png","smiley-disapointed-mad.png","smiley-disapointed.png","smiley-dizzy.png","smiley-drool-1.png","smiley-drool.png","smiley-drop.png","smiley-evil.png","smiley-explosion.png","smiley-eyes-only.png","smiley-fever.png","smiley-glasses.png","smiley-grumpy.png","smiley-happy-1.png","smiley-happy.png","smiley-head-patch.png","smiley-head-sick.png","smiley-hypnotized.png","smiley-in-love.png","smiley-in-trouble.png","smiley-indiferent-1.png","smiley-indifferent.png","smiley-kiss-1.png","smiley-kiss-2.png","smiley-kiss-heart.png","smiley-kiss.png","smiley-liar.png","smiley-lol-side.png","smiley-lol-sideways.png","smiley-lol.png","smiley-look-one-eye.png","smiley-mad-1.png","smiley-mad.png","smiley-nasty.png","smiley-nauseous-1.png","smiley-nauseous.png","smiley-nose-blow-1.png","smiley-nose-blow.png","smiley-one-eye-smile-1.png","smiley-one-eye-smile.png","smiley-oops.png","smiley-petrified.png","smiley-prank.png","smiley-rage.png","smiley-rich.png","smiley-sad-1.png","smiley-sad-crying-1.png","smiley-sad-crying.png","smiley-sad-nerd.png","smiley-sad.png","smiley-scared.png","smiley-shine-big-eyes.png","smiley-shine.png","smiley-shock.png","smiley-shocked.png","smiley-shook.png","smiley-shout.png","smiley-sick-contageous.png","smiley-sick.png","smiley-silent.png","smiley-sleepy.png","smiley-smile-1.png","smiley-smile-2.png","smiley-smile-upside-down.png","smiley-smile.png","smiley-smirk-glasses.png","smiley-smirk.png","smiley-spoilt.png","smiley-surprised-1.png","smiley-surprised.png","smiley-thrilled.png","smiley-throw-up.png","smiley-tongue-3.png","smiley-tongue-sticking.png","smiley-tongue.png","smiley-trouble.png","smiley-unhappy-1.png","smiley-unhappy.png","smiley-very-happy.png","smiley-wink.png","smiley-wrong.png","smiley-yawn.png","smiley-zipped.png"],
    lightIcons: [],
  },
};
