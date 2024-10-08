import { Checkbox as RACheckbox } from 'react-aria-components';
import { ICheckbox } from './checkbox.interfaces';
import { CheckboxIcon } from './checkbox-icon';
import cn from '../../helpers/cn';

export function Checkbox({
  children,
  className,
  disabled,
  error,
  dataCy,
  ...restProps
}: ICheckbox) {
  const hasError = !!error && error !== undefined && error !== null;

  const raCheckboxClasses = cn(
    'group flex items-center gap-2 leading-none [&[data-selected=true]>div>svg]:stroke-white [&[data-selected=true]>div]:bg-blue-500 [&[data-selected=true]>div]:border-blue-500',
    disabled && 'pointer-events-none !text-slate-400',
    className,
  );

  const checkboxClasses = cn(
    'h-5 w-5 rounded border-2 border-slate-500 flex justify-center items-center transition-all duration-200 group-selected:bg-blue-500 group-selected:border-blue-500',
    disabled && '!border-slate-400 group-selected:!bg-slate-400 group-selected:!border-slate-400',
    disabled && 'group-selected:!bg-slate-400 group-selected:!border-slate-400',
    !hasError && 'border-slate-400',
    hasError && '!border-red-500',
  );

  return (
    <>
      <RACheckbox className={raCheckboxClasses} isDisabled={disabled} {...restProps}>
        <div className={checkboxClasses} data-testid="checkbox-wrapper">
          <CheckboxIcon />
        </div>
        {children}
      </RACheckbox>
      {hasError && (
        <span className="block text-red-500 text-xs mt-2" data-cy={dataCy}>
          {error}
        </span>
      )}
    </>
  );
}
