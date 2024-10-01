import { fireEvent, render } from '@testing-library/react';
import { IButton } from './button.interfaces';
import { Button } from './button';

const onPress = jest.fn();

const buttonRender = ({
  children,
  leftIcon,
  rightIcon,
  fullWidth,
  disabled,
  size,
  buttonType,
  className,
}: IButton = {}) =>
  render(
    <Button
      onPress={onPress}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      fullWidth={fullWidth}
      disabled={disabled}
      size={size}
      buttonType={buttonType}
      className={className}
    >
      {children}
    </Button>,
  );

describe('Button', () => {
  it('should render the component', () => {
    const { getByRole } = buttonRender();
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('call onPress when clicked', () => {
    const { getByRole } = buttonRender();
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onPress).toHaveBeenCalled();
  });

  it('should render children', () => {
    const { getByText } = buttonRender({
      children: 'Click me',
    });
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should render left icon', () => {
    const { getByTestId } = buttonRender({
      leftIcon: <div data-testid="left-icon" />,
    });
    expect(getByTestId('left-icon')).toBeInTheDocument();
  });

  it('should render right icon', () => {
    const { getByTestId } = buttonRender({
      rightIcon: <div data-testid="right-icon" />,
    });
    expect(getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should render fullWidth', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      fullWidth: true,
    });
    const button = getByRole('button');
    expect(button).toHaveClass('w-full');
  });

  it('should disable the button', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      disabled: true,
    });
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should apply the small size', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      size: 'small',
    });
    const button = getByRole('button');
    expect(button).toHaveClass('py-2 text-xs leading-none');
  });

  it('should apply the normal button type', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      buttonType: 'normal',
    });
    const button = getByRole('button');
    expect(button).toHaveClass(
      'border-slate-500 text-slate-500 bg-transparent hover:bg-slate-100 hover:border-slate-400 active:bg-slate-300 active:border-slate-300',
    );
  });

  it('should apply the dangerOutlined button type', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      buttonType: 'dangerOutlined',
    });
    const button = getByRole('button');
    expect(button).toHaveClass(
      'border-red-500 text-red-500 bg-transparent hover:bg-red-100 hover:border-red-400 active:bg-red-300 active:border-red-300',
    );
  });

  it('should apply the secondary button type', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      buttonType: 'secondary',
    });
    const button = getByRole('button');
    expect(button).toHaveClass(
      'border-slate-600 bg-slate-500 hover:bg-slate-400 hover:border-slate-400 active:bg-slate-300 active:border-slate-300',
    );
  });

  it('should not call onPress when disabled', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      disabled: true,
    });
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should apply custom className', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      className: 'custom-class',
    });
    const button = getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should render without left or right icons', () => {
    const { getByRole } = buttonRender({
      children: 'Click me',
      leftIcon: null,
      rightIcon: null,
    });
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
