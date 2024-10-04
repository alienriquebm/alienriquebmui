import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';
import { SelectItem } from './select-item';
import { ISelect } from './select.interfaces';

interface ItemType {
  id: number;
  name: string;
}

const meta: Meta<ISelect<ItemType>> = {
  title: 'Design System/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ISelect<ItemType>>;

export const Default: Story = {
  args: {
    description: 'Select an option',
    items: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ],
    isDisabled: false,
    children: (item: ItemType) => <SelectItem key={item.id}>{item.name}</SelectItem>,
  },
};

export const Disabled: Story = {
  args: {
    description: 'Component disabled',
    items: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ],
    isDisabled: true,
    children: (item: ItemType) => <SelectItem key={item.id}>{item.name}</SelectItem>,
  },
};

export const WithErrorMessage: Story = {
  args: {
    isDisabled: false,
    description: 'Select an option',
    errorMessage: 'This field is mandatory',
    items: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ],
    children: (item: ItemType) => <SelectItem key={item.id}>{item.name}</SelectItem>,
  },
};
