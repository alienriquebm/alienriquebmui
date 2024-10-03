import { CheckboxProps } from 'react-aria-components';

export interface MainCheckbox {
  children?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  error?: string;
  dataCy?: string;
}

export type ICheckbox = CheckboxProps & MainCheckbox;
