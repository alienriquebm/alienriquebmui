import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Design System/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="max-w-72 py-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: Story['args'] = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis lorem sed erat semper ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus.',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
