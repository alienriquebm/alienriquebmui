import type { SelectProps } from 'react-aria-components';

export interface ISelect<T extends object> extends Omit<SelectProps<T>, 'children'> {
  label?: string | React.ReactNode;
  ariaLabel?: string;
  description?: string;
  errorMessage?: string;
  items?: Iterable<T>;
  dataCy?: string;
  children?: React.ReactNode | ((item: T) => React.ReactNode);
}
