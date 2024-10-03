import { Checkbox as RACheckbox } from 'react-aria-components';

import cn from '../../helpers/cn';
import { ICheckbox } from './checkbox.interfaces';
import { CheckboxIcon } from './checkbox-icon';

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
    'group flex items-center gap-2 leading-none',
    disabled && 'pointer-events-none text-slate-400',
    className,
  );

  const checkboxClasses = cn(
    'checkbox w-5 h-5 rounded border-2 border-slate-500 flex justify-center items-center transition-all duration-200 group-selected:!bg-blue-500 group-selected:!border-blue-500',
    disabled && 'border-slate-400 group-selected:bg-slate-400 group-selected:border-slate-400',
    disabled && 'group-selected:bg-slate-400 group-selected:border-slate-400',
    hasError && 'border-red-500',
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
