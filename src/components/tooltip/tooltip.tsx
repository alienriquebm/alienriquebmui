import { useState } from 'react';
import { MdInfo } from 'react-icons/md';
import { Tooltip as RATooltip, TooltipTrigger, Button } from 'react-aria-components';

import { ITooltip } from './tooltip.interfaces';
import cn from '../../helpers/cn';

export function Tooltip({
  children,
  placement = 'top',
  delay = 0,
  closeDelay = 500,
  isOpen: controlledIsOpen,
  onOpenChange,
  dataCy,
  ...props
}: ITooltip) {
  const [isOpen, setIsOpen] = useState(controlledIsOpen ?? false);

  const arrowClasses = cn(
    'absolute w-3 h-3 bg-slate-200 rotate-45 shadow-[1px_1px_20px_2px_slate-300]',
    placement === 'top' && '-bottom-3 left-1/2 transform translate-x-[-50%] -translate-y-1/2',
    placement === 'bottom' && '-top-1 left-1/2 transform translate-x-[-50%]',
  );

  const helpClasses = cn(
    'relative p-4 bg-slate-200 shadow-md rounded-md transition-opacity duration-200 ease-in-out w-40 h-auto text-slate-700 text-xs text-pretty',
    placement === 'top' && 'mb-2',
    placement === 'bottom' && 'mt-2',
  );

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  return (
    <TooltipTrigger
      delay={delay}
      closeDelay={closeDelay}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Button
        data-cy={dataCy}
        className="outline-none"
        aria-describedby="tooltip-content"
        aria-label="Information"
      >
        <MdInfo className="text-slate-300" />
      </Button>
      <RATooltip {...props} placement={placement}>
        <div className={helpClasses}>
          <div className={arrowClasses} />
          {children}
        </div>
      </RATooltip>
    </TooltipTrigger>
  );
}
