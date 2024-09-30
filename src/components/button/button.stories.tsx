import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import { Md10Mp } from 'react-icons/md';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    buttonType: 'primary',
  },
};
export const Normal: Story = {
  args: {
    children: 'Click me',
    buttonType: 'normal',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    buttonType: 'secondary',
  },
};

export const DangerOutlined: Story = {
  args: {
    children: 'Click me',
    buttonType: 'dangerOutlined',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click me',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Click me',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Small: Story = {
  args: {
    children: 'Click me',
    size: 'small',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Click me',
    leftIcon: <Md10Mp />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Click me',
    rightIcon: <Md10Mp />,
  },
};
