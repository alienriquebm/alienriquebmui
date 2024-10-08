import { Cell, Table as RATable, TableBody } from 'react-aria-components';
import cn from '../../helpers/cn';

import { IRow, ITable } from './table-interfaces';
import { Row } from './row';
import { Header } from './header';
import { Column } from './column';
import { useMemo } from 'react';

const DEFAULT_SKELETON_COUNT = 5;

export function Table<T extends IRow>({
  tableProps,
  tableBodyProps,
  columns,
  rows,
  isLoading,
  ariaLabel,
}: ITable<T>) {
  const tableClasses = cn('w-full', tableProps?.className);
  const tableHeaderCellClasses =
    'py-4 text-left uppercase first:pl-4 last:pr-4 bg-[#F1F5F9] first:rounded-s-md last:rounded-e-md sticky top-0 z-10';
  const tableCellBodyClasses = 'py-4 text-left first:pl-4 last:pr-4 text-slate-600';

  const rowsToRender = useMemo(() => {
    return isLoading
      ? Array.from({ length: DEFAULT_SKELETON_COUNT }, (_, idx) => {
          return {
            ...columns.reduce(
              (acc, col) => ({
                ...acc,
                [col.id]: (
                  <div className="animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  </div>
                ),
              }),
              {},
            ),
            id: idx + 1,
          } as T;
        })
      : rows;
  }, [columns, isLoading, rows]);

  return (
    <div className="overflow-auto max-h-96">
      <RATable className={tableClasses} {...tableProps} aria-label={ariaLabel || 'Table'}>
        <Header columns={columns}>
          {column => (
            <Column
              dataCy={column.dataCy}
              className={() => cn(tableHeaderCellClasses, column.className)}
              isRowHeader={column.isRowHeader}
            >
              {column.name}
            </Column>
          )}
        </Header>
        <TableBody items={rowsToRender} {...tableBodyProps}>
          {item => (
            <Row columns={columns} className="border-b border-slate-300 last:border-none">
              {column => (
                <Cell className={() => cn(tableCellBodyClasses, item.className)}>
                  {item[column.id as keyof IRow]}
                </Cell>
              )}
            </Row>
          )}
        </TableBody>
      </RATable>
    </div>
  );
}
