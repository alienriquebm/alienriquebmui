import clsx from 'clsx';
import { useState, ReactNode } from 'react';
import { ChevronIcon } from './chevron-icon';

interface ICollapsible {
  children: ReactNode;
  className?: HTMLElement['className'];
}

export function Collapsible({ children, className }: ICollapsible) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const sectionClasses = clsx('w-full border border-slate-300 rounded-lg', className);

  return (
    <section className={sectionClasses}>
      <div className="flex items-center justify-between gap-4 p-4">
        <div
          role="region"
          className={`flex-1 ${!isOpen ? 'max-h-20 overflow-hidden' : 'max-h-full'}`}
        >
          <span className="flex-1 text-sm font-light leading-none text-pretty">{children}</span>
        </div>
        <ChevronIcon isOpen={isOpen} onClick={toggleOpen} />
      </div>
    </section>
  );
}
