import { ButtonProps, Button as RAButton } from 'react-aria-components';
import { IButton } from './button.interfaces';
import cn from '../../helpers/cn';

export function Button({
  fullWidth,
  buttonType,
  children,
  className,
  disabled,
  onPress,
  type,
  dataCy,
  size,
  leftIcon,
  rightIcon,
  ...restProps
}: IButton & ButtonProps) {
  const buttonClasses = cn(
    'active:select-none whitespace-nowrap border border-blue-500 flex gap-2 items-center justify-center font-bold p-4 text-white bg-blue-500 hover:bg-blue-300 hover:border-blue-300 uppercase transition-all ease-out duration-200 tracking-wide text-base leading-6 rounded-md active:outline-none focus:outline-none focus-visible:outline-none',
    buttonType !== 'normal' && 'active:bg-blue-700 active:border-blue-700',
    buttonType === 'normal' &&
      'border-slate-500 text-slate-500 bg-transparent hover:bg-slate-100 hover:border-slate-400 active:bg-slate-300 active:border-slate-300',
    buttonType === 'dangerOutlined' &&
      'border-red-500 text-red-500 bg-transparent hover:bg-red-100 hover:border-red-400 active:bg-red-300 active:border-red-300',
    buttonType === 'secondary' &&
      'border-slate-600 bg-slate-500 hover:bg-slate-400 hover:border-slate-400 active:bg-slate-300 active:border-slate-300',
    fullWidth && 'w-full',
    disabled &&
      'text-slate-400 bg-slate-200 pointer-events-none cursor-not-allowed hover:bg-slate-200 border-slate-200 hover:border-slate-200',
    size === 'small' && 'py-2 text-xs leading-none',
    className,
  );

  return (
    <RAButton
      className={buttonClasses}
      onPress={onPress}
      isDisabled={disabled}
      type={type}
      data-cy={dataCy}
      {...restProps}
    >
      {leftIcon ?? null}
      <>{children}</>
      {rightIcon ?? null}
    </RAButton>
  );
}
