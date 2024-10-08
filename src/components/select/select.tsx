import {
  Button,
  ListBox,
  Popover,
  Select as RASelect,
  SelectValue,
  Text,
} from 'react-aria-components';
import cn from '../../helpers/cn';
import { ISelect } from './select.interfaces';
import { SelectIcon } from './select-icon';

export function Select<T extends object>({
  description,
  children,
  items,
  isDisabled,
  dataCy,
  ariaLabel,
  border = true,
  ...restProps
}: ISelect<T>) {
  const inputClasses = cn(
    'flex w-full py-2 px-4 justify-between items-center rounded-md text-base text-slate-700 bg-white font-regular placeholder-gray-400 [&[data-focus-visible]]:ring-2 [&[data-focus-visible]]:ring-primary-500 focus:outline-none transition-all duration-200 ease-in-out',
    border ? 'border border-slate-300' : 'border-none',
    isDisabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'hover:border-slate-400',
  );

  const descriptionClasses = 'text-sm text-slate-500 mt-1';

  return (
    <RASelect
      {...restProps}
      isDisabled={isDisabled}
      aria-label={ariaLabel}
      placeholder="Select an option"
    >
      {({ isOpen }) => (
        <>
          <Button className={inputClasses} isDisabled={isDisabled}>
            <SelectValue
              role="button"
              className="whitespace-nowrap overflow-hidden text-ellipsis [&[data-placeholder]]:text-slate-400"
              data-cy={dataCy}
            />
            <span
              className={cn('transition-transform duration-200 ease-in-out flex-shrink-0 ml-2', {
                'rotate-180': isOpen,
              })}
            >
              <SelectIcon />
            </span>
          </Button>
          {description && (
            <Text slot="description" className={descriptionClasses}>
              {description}
            </Text>
          )}
          {!isDisabled && (
            <Popover offset={4} data-testid="select-popover">
              <ListBox
                items={items}
                className="w-[--trigger-width] bg-white py-2 rounded-md shadow-lg border border-slate-200 animate-in fade-in duration-200 focus:outline-none"
              >
                {children}
              </ListBox>
            </Popover>
          )}
        </>
      )}
    </RASelect>
  );
}
