import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './textarea';

describe('Textarea Component', () => {
  it('should render the textarea component', () => {
    render(<Textarea />);
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();
  });

  it('should apply the fullWidth class when fullWidth is true', () => {
    render(<Textarea fullWidth />);
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toHaveClass('w-full');
  });

  it('should not allow typing when disabled', async () => {
    render(<Textarea disabled />);
    const textareaElement = screen.getByRole('textbox');

    await userEvent.type(textareaElement, 'Testing text');
    expect(textareaElement).toHaveValue('');
  });

  it('should allow typing when enabled', async () => {
    render(<Textarea />);
    const textareaElement = screen.getByRole('textbox');

    await userEvent.type(textareaElement, 'Testing text');
    expect(textareaElement).toHaveValue('Testing text');
  });

  it('should apply the correct number of rows when rows prop is passed', () => {
    render(<Textarea rows={5} />);
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toHaveAttribute('rows', '5');
  });

  it('should apply custom className correctly', () => {
    const customClass = 'custom-class';
    const { container } = render(<Textarea className={customClass} />);
    const textareaElement = container.querySelector('textarea');
    expect(textareaElement).toHaveClass(customClass);
  });
});
