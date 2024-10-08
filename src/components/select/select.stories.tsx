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
  argTypes: {
    border: {
      control: 'boolean',
      description: 'Toggles the border of the Select component',
    },
  },
};

export default meta;

type Story = StoryObj<ISelect<ItemType>>;

const items = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
];

const renderItems = (item: ItemType) => <SelectItem key={item.id}>{item.name}</SelectItem>;

export const Default: Story = {
  args: {
    description: 'Select an option',
    items: items,
    isDisabled: false,
    children: renderItems,
  },
};

export const Disabled: Story = {
  args: {
    description: 'Component disabled',
    items: items,
    isDisabled: true,
    children: renderItems,
  },
};

export const WithoutBorder: Story = {
  args: {
    description: 'Select without border',
    items: items,
    isDisabled: false,
    children: renderItems,
    border: false,
  },
};

export const BorderVariants: Story = {
  render: args => (
    <div className="space-y-4">
      <Select {...args} description="With border (default)" border={true}>
        {renderItems}
      </Select>
      <Select {...args} description="Without border" border={false}>
        {renderItems}
      </Select>
    </div>
  ),
  args: {
    items: items,
    isDisabled: false,
  },
};
