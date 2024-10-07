import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmationModal } from './confirmation-modal';

const meta: Meta<typeof ConfirmationModal> = {
  title: 'Design System/ConfirmationModal',
  component: ConfirmationModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: Story['args'] = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  trigger: <span>🧺</span>,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const ConfirmationWithTitle: Story = {
  args: {
    ...defaultArgs,
    title: 'Confirmation title',
  },
};
