import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { UserIcon } from '../../icons';

const meta: Meta<typeof Table> = {
  title: 'Design System/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const columns = [
  { name: 'Nombre de usuario', id: 'username', isRowHeader: true },
  { name: 'Email', id: 'email' },
  { name: 'Fecha de registro', id: 'date' },
  { name: 'Visibilidad', id: 'visibility' },
];

const rows = [
  {
    id: 1,
    username: (
      <div className="flex items-center gap-2">
        <UserIcon />
        John Doe
      </div>
    ),
    email: 'user@email.com',
    date: '6/7/2020',
    visibility: (
      <div className="flex items-center gap-2 text-red-500">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        Activo
      </div>
    ),
  },
  {
    id: 2,
    username: (
      <div className="flex items-center gap-2">
        <UserIcon />
        John Doe
      </div>
    ),
    email: 'user@email.com',
    date: '6/7/2020',
    visibility: (
      <div className="flex items-center gap-2 text-red-500">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        Activo
      </div>
    ),
  },
  {
    id: 3,
    username: (
      <div className="flex items-center gap-2">
        <UserIcon />
        John Doe
      </div>
    ),
    email: 'user@email.com',
    date: '6/7/2020',
    visibility: (
      <div className="flex items-center gap-2 text-gray-400">
        <div className="w-3 h-3 rounded-full bg-gray-400" />
        Inactivo
      </div>
    ),
  },
  {
    id: 4,
    username: (
      <div className="flex items-center gap-2">
        <UserIcon />
        John Doe
      </div>
    ),
    email: 'user@email.com',
    date: '6/7/2020',
    visibility: (
      <div className="flex items-center gap-2 text-red-500">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        Activo
      </div>
    ),
  },
];

export const SampleData: Story = {
  args: {
    columns,
    rows,
  },
};
