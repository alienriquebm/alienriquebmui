import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from './checkbox';
import { CheckboxProps } from 'react-aria-components';

type ICheckbox = CheckboxProps & { error?: string; disabled?: boolean };

const checkboxRender = ({ onChange, isDisabled, defaultSelected, error, disabled }: ICheckbox) =>
  render(
    <Checkbox
      defaultSelected={defaultSelected}
      disabled={disabled}
      error={error}
      isDisabled={isDisabled}
      onChange={onChange}
    />,
  );

describe('Checkbox', () => {
  it('should renders the Checkbox', () => {
    const { getByRole } = checkboxRender({} as CheckboxProps);
    const checkboxElement = getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  it('should call onChange function when user clicks the Checkbox', () => {
    const onChange = jest.fn();
    const { getByRole } = checkboxRender({
      onChange,
    });
    const checkboxElement = getByRole('checkbox');
    fireEvent.click(checkboxElement);
    expect(onChange).toHaveBeenCalled();
  });

  it('should disable the checkbox when isDisabled prop is true', () => {
    const { getByRole } = checkboxRender({
      isDisabled: true,
    } as CheckboxProps);

    const checkboxElement = getByRole('checkbox');
    expect(checkboxElement).toBeDisabled();
  });

  it('should render the checkbox selected by default', () => {
    const { getByRole } = checkboxRender({
      defaultSelected: true,
    } as CheckboxProps);

    const checkboxElement = getByRole('checkbox');
    expect(checkboxElement).toBeChecked();
    fireEvent.click(checkboxElement);
    expect(checkboxElement).not.toBeChecked();
  });

  it('should show an error message when error is present', () => {
    const { getByText } = checkboxRender({
      error: 'There is an error',
    } as ICheckbox);

    expect(getByText(/There is an error/i)).toBeInTheDocument();
  });

  it('should add red border classes to checkbox when error is present', () => {
    const { getByTestId } = checkboxRender({
      error: 'There is an error',
    } as ICheckbox);

    const checkboxWrapper = getByTestId('checkbox-wrapper');

    expect(checkboxWrapper).toHaveClass('border-red-500');
  });

  it('should render disabled-related classes when disabled is true', () => {
    const { getByTestId } = checkboxRender({
      disabled: true,
    } as ICheckbox);

    const checkboxWrapper = getByTestId('checkbox-wrapper');

    expect(checkboxWrapper).toHaveClass(
      'border-slate-400 group-selected:bg-slate-400 group-selected:border-slate-400 group-selected:bg-slate-400 group-selected:border-slate-400',
    );
  });
});
