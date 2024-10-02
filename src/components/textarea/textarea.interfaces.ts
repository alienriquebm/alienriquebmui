import { TextAreaProps } from 'react-aria-components';

interface ITextareaBasic {
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

export type ITextarea = ITextareaBasic & TextAreaProps;
