import { ButtonProps } from 'react-aria-components';
import { IButton } from '../button/button.interfaces';

export interface IConfirmationModal {
  cancelButtonText?: string;
  children: string | React.ReactNode;
  className?: HTMLElement['className'];
  disabled?: boolean;
  okButtonText?: string;
  okButtonType?: IButton['buttonType'];
  onClickOk?: ButtonProps['onPress'];
  title?: string;
  titleClasses?: HTMLElement['className'];
  trigger?: string | React.ReactNode;
  triggerClasses?: HTMLElement['className'];
}
