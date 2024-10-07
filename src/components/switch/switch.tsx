import { Switch as RASwitch, SwitchProps } from 'react-aria-components';
import cn from '../../helpers/cn';

export function Switch({ className, ...restProps }: SwitchProps) {
  const raSwitchClasses = cn('cursor-pointer flex items-center gap-2', className);

  return (
    <RASwitch className={raSwitchClasses} {...restProps}>
      {({ isSelected }) => {
        return (
          <div className="w-7 h-4 relative">
            <div
              className={`w-7 h-4 left-0 top-0 absolute rounded-full transition-all duration-200 ${isSelected ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
            <div
              className={`w-3 h-3 my-[2px] mx-auto absolute bg-white rounded-[100px] shadow transition-all duration-200 ${isSelected ? 'right-[0px]' : 'left-[0px]'}`}
            />
          </div>
        );
      }}
    </RASwitch>
  );
}
