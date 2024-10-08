import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ backgroundColor: '#fafafa', padding: 32, borderRadius: 6 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    placement: 'top',
    delay: 0,
    dataCy: 'tooltip-top',
    children: 'Tooltip on top',
  },
};

export const Bottom: Story = {
  args: {
    placement: 'bottom',
    delay: 0,
    dataCy: 'tooltip-bottom',
    children: 'Tooltip on bottom',
  },
};

export const WithDelay: Story = {
  args: {
    placement: 'top',
    delay: 500,
    dataCy: 'tooltip-delay',
    children: 'Tooltip with delay',
  },
};
