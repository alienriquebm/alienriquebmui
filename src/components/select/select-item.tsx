import clsx from 'clsx';
import { ListBoxItem } from 'react-aria-components';
import type { ListBoxItemProps } from 'react-aria-components';

export function SelectItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        clsx(
          'px-4 py-2 min-h-12 flex items-center cursor-pointer [&[data-focus-visible]]::border-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow duration-200 ease-in-out rounded-sm',
          {
            'bg-primary-100 relative z-10': isFocused,
            'text-slate-800 bg-primary-100 font-semibold': isSelected,
          },
        )
      }
    />
  );
}
