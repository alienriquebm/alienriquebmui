import { TextArea } from 'react-aria-components';
import { ITextarea } from './textarea.interfaces';
import cn from '../../helpers/cn';

export function Textarea({ fullWidth, className, disabled, ...props }: ITextarea) {
  const textareaClasses = cn(
    'p-4 overflow-hidden bg-white text-base text-slate-500 rounded-md font-regular active:outline-none focus:outline-none focus-visible:outline-none resize-none',
    fullWidth && 'w-full',
    disabled && 'cursor-not-allowed opacity-50 pointer-events-none select-none',
    className,
  );

  return <TextArea role="textbox" className={textareaClasses} disabled={disabled} {...props} />;
}
