import type { Meta, StoryObj } from '@storybook/react';

import Tag from './tag';

const meta: Meta<typeof Tag> = {
	title: 'Design System/Tag',
	component: Tag,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Tag',
	},
};

export const WithLeftIcon: Story = {
	args: {
		children: 'Left icon',
		leftIcon: '📷',
	},
};

export const WithRightIcon: Story = {
	args: {
		children: 'Right icon',
		rightIcon: '📷',
	},
};

export const WithLeftAndRightIcon: Story = {
	args: {
		children: 'Left and right icon',
		leftIcon: '📷',
		rightIcon: '📅',
	},
};
