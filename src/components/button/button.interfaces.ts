import { ButtonProps } from 'react-aria-components';

type ButtonTypes = 'primary' | 'normal' | 'dangerOutlined' | 'secondary';
type Size = 'small';

interface IButtonMain {
  buttonType?: ButtonTypes;
  dataCy?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export type IButton = ButtonProps & IButtonMain;
