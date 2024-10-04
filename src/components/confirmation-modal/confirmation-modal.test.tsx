import { ButtonProps } from 'react-aria-components';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { ConfirmationModal } from './confirmation-modal';

interface IConfirmationModal {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  title?: string;
  onClickOk?: ButtonProps['onPress'];
}

const modalRender = ({ children, trigger, title, onClickOk }: IConfirmationModal = {}) =>
  render(
    <ConfirmationModal title={title} trigger={trigger} onClickOk={onClickOk}>
      {children}
    </ConfirmationModal>,
  );

describe('Confirmation Modal', () => {
  it('should render the Confirmation Modal', async () => {
    const { getByRole } = modalRender({ children: 'Do you confirm?', trigger: <div>Open</div> });
    const button = getByRole('button');
    fireEvent.click(button);
    await waitFor(() => {
      const dialog = getByRole('alertdialog');
      expect(dialog).toBeInTheDocument();
    });
  });

  it('should render the trigger element', () => {
    const { getByRole } = modalRender({ children: 'Do you confirm?', trigger: <span>🧺</span> });
    const trigger = getByRole('button');
    expect(trigger).toBeInTheDocument();
  });

  it('should display modal when trigger is clicked', () => {
    const { getByRole, getByText } = modalRender({
      children: 'Do you confirm?',
      title: 'Please, confirm',
      trigger: <span>🧺</span>,
    });
    const trigger = getByRole('button');
    fireEvent.click(trigger);
    const dialog = getByRole('alertdialog');
    expect(dialog).toBeInTheDocument();
    const dialogTitle = getByText(/Please, confirm/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  it('should close when Ok button is clicked', () => {
    const onClickOk = jest.fn();
    const { getByRole, getByTestId } = modalRender({
      children: 'Do you confirm?',
      trigger: <span>🧺</span>,
      onClickOk,
    });
    const trigger = getByRole('button');
    fireEvent.click(trigger);
    const dialog = getByRole('alertdialog');
    const okButton = getByTestId('ok-button');
    fireEvent.click(okButton);
    expect(onClickOk).toHaveBeenCalled();
    expect(dialog).not.toBeInTheDocument();
  });

  it('should close when Cancel button is clicked', () => {
    const { getByRole, getByTestId } = modalRender({
      children: 'Do you confirm?',
      trigger: <span>🧺</span>,
    });
    const trigger = getByRole('button');
    fireEvent.click(trigger);
    const dialog = getByRole('alertdialog');
    const cancelButton = getByTestId('cancel-button');
    fireEvent.click(cancelButton);
    expect(dialog).not.toBeInTheDocument();
  });
});
