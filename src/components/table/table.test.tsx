import { render } from '@testing-library/react';
import { ITable } from './table-interfaces';
import { Table } from './table';

interface IRow {
  id: string;
  code: string;
  skillsEs: string;
  skillsEn: string;
}

const rowsMock: IRow[] = [
  {
    id: '1',
    code: 'code',
    skillsEs: 'skillsEs',
    skillsEn: 'skillsEn',
  },
  {
    id: '2',
    code: 'code',
    skillsEs: 'skillsEs',
    skillsEn: 'skillsEn',
  },
];

const columnsMock = [
  {
    name: 'Code',
    id: 'code',
    isRowHeader: true,
  },
  {
    name: 'Skills (ES)',
    id: 'skillsEs',
  },
  {
    name: 'Skills (EN)',
    id: 'skillsEn',
  },
];

const tableRender = ({ rows, columns, isLoading, tableProps }: ITable<IRow>) =>
  render(<Table rows={rows} columns={columns} isLoading={isLoading} tableProps={tableProps} />);

describe('Table', () => {
  it('should render the table', () => {
    const { getByRole } = tableRender({ rows: rowsMock, columns: columnsMock });
    const table = getByRole('grid');
    expect(table).toBeInTheDocument();
  });

  it('should render the table with loading state', () => {
    const { container } = tableRender({ rows: [], columns: columnsMock, isLoading: true });
    const loadingCells = container.querySelectorAll('.animate-pulse');
    expect(loadingCells.length).toBeGreaterThan(0);
  });

  it('should apply custom class to the table', () => {
    const { container } = tableRender({
      rows: rowsMock,
      columns: columnsMock,
      tableProps: { className: 'custom-class' },
    });
    const table = container.querySelector('table');
    expect(table).toHaveClass('custom-class');
  });

  it('should render correct number of rows when loading', () => {
    const { container } = tableRender({ rows: [], columns: columnsMock, isLoading: true });
    const rows = container.querySelectorAll('tbody > tr');
    expect(rows.length).toBe(5); // DEFAULT_SKELETON_COUNT
  });

  it('should render correct number of columns when loading', () => {
    const { container } = tableRender({ rows: [], columns: columnsMock, isLoading: true });
    const firstRow = container.querySelector('tbody > tr');
    const cells = firstRow?.querySelectorAll('td');
    expect(cells?.length).toBe(columnsMock.length);
  });
});
