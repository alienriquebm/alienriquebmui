import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  Button as PlainButton,
  PressEvent,
} from 'react-aria-components';

import cn from '../../helpers/cn';
import { IConfirmationModal } from './confirmation-modal.interfaces';
import { Button } from '../button';

export function ConfirmationModal({
  cancelButtonText = 'Cancel',
  children,
  className,
  okButtonText = 'OK',
  okButtonType = 'primary',
  onClickOk,
  title,
  titleClasses,
  trigger,
  triggerClasses,
  disabled,
}: IConfirmationModal) {
  const bodyClasses = cn('pb-3', className);
  const headingClasses = cn('text-xxl font-semibold leading-6 pb-4 text-slate-700', titleClasses);

  return (
    <DialogTrigger>
      {trigger && <PlainButton className={triggerClasses}>{trigger}</PlainButton>}
      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? 'animate-in fade-in duration-300 ease-out' : ''}
          ${isExiting ? 'animate-out fade-out duration-200 ease-in' : ''}
        `}
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-lg bg-white p-10 text-left align-middle shadow-xl
            ${isEntering ? 'animate-in zoom-in-95 ease-out duration-300' : ''}
            ${isExiting ? 'animate-out zoom-out-95 ease-in duration-200' : ''}
          `}
        >
          <Dialog role="alertdialog" className="outline-none relative">
            {({ close }) => {
              const handleConfirm = (e: PressEvent) => {
                if (onClickOk) onClickOk(e);
                close();
              };

              return (
                <section>
                  {title && (
                    <Heading slot="title" className={headingClasses}>
                      {title}
                    </Heading>
                  )}
                  <div className={bodyClasses}>{children}</div>
                  <div className="mt-4 flex gap-3">
                    <Button
                      buttonType="normal"
                      className="flex-1"
                      disabled={disabled}
                      onPress={close}
                      size="small"
                      data-testid="cancel-button"
                    >
                      <span data-cy="cancel">{cancelButtonText}</span>
                    </Button>
                    <Button
                      buttonType={okButtonType}
                      className="flex-1"
                      disabled={disabled}
                      onPress={handleConfirm}
                      size="small"
                      data-testid="ok-button"
                    >
                      <span data-cy="ok">{okButtonText}</span>
                    </Button>
                  </div>
                </section>
              );
            }}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
