import { type TooltipProps } from 'react-aria-components';

export interface ITooltip extends Omit<TooltipProps, 'children'> {
  delay?: number;
  closeDelay?: number;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom';
  dataCy?: string;
  icon?: React.ReactNode;
}
