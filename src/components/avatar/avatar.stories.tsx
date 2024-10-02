import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';
import { AvatarSize } from './avatar.interfaces';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithUrl: Story = {
  args: {
    url: 'https://avatars.githubusercontent.com/u/12345678',
  },
};

export const LargeSize: Story = {
  args: {
    url: 'https://avatars.githubusercontent.com/u/12345678',
    size: AvatarSize.Large,
  },
};
