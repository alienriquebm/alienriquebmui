import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Design System/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fullWidth: {
      control: 'boolean',
      description: 'Option to adjust the full width of the textarea.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea, preventing typing.',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows of the textarea.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <section className="max-w-72 py-6">
        <Story />
      </section>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullWidth: false,
    disabled: false,
    className: 'border',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    disabled: false,
    className: 'border',
  },
};

export const WithRows: Story = {
  args: {
    fullWidth: false,
    disabled: false,
    rows: 4,
    className: 'border',
  },
};

export const Disabled: Story = {
  args: {
    fullWidth: false,
    disabled: true,
    className: 'border',
  },
};
