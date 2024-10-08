import { TableHeader as RAHeader, Collection, TableHeaderProps } from 'react-aria-components';

export function Header<T extends object>({ columns, children }: TableHeaderProps<T>) {
  return (
    <RAHeader>
      <Collection items={columns}>{children}</Collection>
    </RAHeader>
  );
}
