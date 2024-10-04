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

export function Select<T extends object>({
  description,
  children,
  items,
  isDisabled,
  dataCy,
  ariaLabel,
  ...restProps
}: ISelect<T>) {
  const inputClasses = cn(
    'flex w-full py-1 px-4 justify-between items-center rounded-md text-base text-slate-500 border-slate-500 bg-white font-regular placeholder-gray-400 bg-white [&[data-focus-visible]]:border-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow duration-200 ease-in-out',
    isDisabled && '!bg-slate-100 !text-slate-400 cursor-not-allowed',
  );

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
              className={cn('transition-transform duration-200 ease-in-out flex-shrink-0', {
                'rotate-45': isOpen,
              })}
            >
              ▼
            </span>
          </Button>
          {description && <Text slot="description">{description}</Text>}
          {!isDisabled && (
            <Popover offset={2} data-testid="select-popover">
              <ListBox
                items={items}
                className="w-[--trigger-width] bg-white py-2 rounded-md shadow-2xl animate-in fade-in duration-200 [&[data-focus-visible]]:border-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
