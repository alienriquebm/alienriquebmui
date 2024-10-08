import { TableBodyProps, TableProps } from 'react-aria-components';

export interface IColumn {
  name: string;
  id: string;
  isRowHeader?: boolean;
  className?: string;
  dataCy?: string;
}

export interface IRow {
  id: number | string;
  className?: string;
}

export interface ITable<T extends IRow> {
  rows: T[];
  columns: IColumn[];
  tableProps?: TableProps;
  tableBodyProps?: TableBodyProps<T>;
  isLoading?: boolean;
  ariaLabel?: string;
}
