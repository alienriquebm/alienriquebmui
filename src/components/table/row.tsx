import { RowProps, Row as RARow, Collection } from 'react-aria-components';

export function Row<T extends object>({ id, columns, children, ...otherProps }: RowProps<T>) {
  return (
    <RARow id={id} {...otherProps}>
      <Collection items={columns}>{children}</Collection>
    </RARow>
  );
}
