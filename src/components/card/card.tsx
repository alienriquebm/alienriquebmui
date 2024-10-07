import clsx from 'clsx';
import { ICard } from './card.interfaces';

export function Card({
  bordered,
  children,
  className,
  dataCy,
  title,
  titleClassName,
  transparent,
}: ICard) {
  const titleClasses = clsx(
    'text-slate-900 font-bold text-xs uppercase border-b pb-3 mb-4',
    titleClassName,
  );

  const cardClasses = clsx(
    'bg-white border border-white rounded-md p-6',
    bordered && '!border-slate-200',
    transparent && '!bg-transparent',
    className,
  );

  return (
    <div className={cardClasses} data-cy={dataCy} role="region">
      {title && <div className={titleClasses}>{title}</div>}
      {children}
    </div>
  );
}
