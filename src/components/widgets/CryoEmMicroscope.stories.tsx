import type { Meta, StoryObj } from '@storybook/react';
import { CryoEmMicroscope } from './CryoEmMicroscope';

const meta = {
  title: 'Widgets/CryoEmMicroscope',
  component: CryoEmMicroscope,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mood: {
      control: 'select',
      options: ['reactive', 'sleepy', 'curious', 'happy', 'angry', 'love'],
    },
  },
} satisfies Meta<typeof CryoEmMicroscope>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Krios G3i',
  },
};

export const Sleepy: Story = {
  args: {
    label: 'Krios G3i',
    mood: 'sleepy',
  },
};

export const Curious: Story = {
  args: {
    label: 'Krios G3i',
    mood: 'curious',
  },
};

export const Happy: Story = {
  args: {
    label: 'Krios G3i',
    mood: 'happy',
  },
};

export const Angry: Story = {
  args: {
    label: 'Krios G3i',
    mood: 'angry',
  },
};

export const InLove: Story = {
  args: {
    label: 'Krios G3i',
    mood: 'love',
  },
};

export const MoodGallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <CryoEmMicroscope label="Sleepy" mood="sleepy" />
      <CryoEmMicroscope label="Curious" mood="curious" />
      <CryoEmMicroscope label="Happy" mood="happy" />
      <CryoEmMicroscope label="Angry" mood="angry" />
      <CryoEmMicroscope label="In Love" mood="love" />
    </div>
  ),
};

export const MicroscopeRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
      <CryoEmMicroscope label="Krios G3i" />
      <CryoEmMicroscope label="Glacios 2" />
      <CryoEmMicroscope label="Arctica" />
    </div>
  ),
};
