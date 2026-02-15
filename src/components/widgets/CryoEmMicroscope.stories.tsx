import type { Meta, StoryObj } from '@storybook/react';
import { CryoEmMicroscope } from './CryoEmMicroscope';

const meta = {
  title: 'Widgets/CryoEmMicroscope',
  component: CryoEmMicroscope,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CryoEmMicroscope>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Krios G3i',
  },
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
