import cn from '../../helpers/cn';
import { ITag } from './tag.interfaces';

export function Tag({ children, className, dataCy, leftIcon, rightIcon }: ITag) {
  const tagClasses = cn(
    'text-sm border border-slate-500 px-4 py-2 rounded-lg flex-inline items-center gap-2',
    className,
  );
  return (
    <span data-cy={dataCy} className={tagClasses}>
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </span>
  );
}
