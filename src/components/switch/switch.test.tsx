import { SwitchProps } from 'react-aria-components';
import { fireEvent, render } from '@testing-library/react';

import { Switch } from './switch';

const switchRender = ({ onChange, isDisabled, defaultSelected }: SwitchProps) =>
  render(<Switch onChange={onChange} isDisabled={isDisabled} defaultSelected={defaultSelected} />);

describe('Switch', () => {
  it('should renders the switch', () => {
    const { getByRole } = switchRender({} as SwitchProps);
    const switchElement = getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('should call onChange function when user clicks the switch', () => {
    const onChange = jest.fn();
    const { getByRole } = switchRender({
      onChange,
    });
    const switchElement = getByRole('switch');
    fireEvent.click(switchElement);
    expect(onChange).toHaveBeenCalled();
  });

  it('should disable the switch when isDisabled prop is true', () => {
    const { getByRole } = switchRender({
      isDisabled: true,
    } as SwitchProps);

    const switchElement = getByRole('switch');
    expect(switchElement).toBeDisabled();
  });

  it('should render the switch with state true', () => {
    const { getByRole } = switchRender({
      defaultSelected: true,
    } as SwitchProps);

    const switchElement = getByRole('switch');
    expect(switchElement).toBeChecked();
    fireEvent.click(switchElement);
    expect(switchElement).not.toBeChecked();
  });
});
