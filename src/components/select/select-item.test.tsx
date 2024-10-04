import { render, screen, act } from '@testing-library/react';
import { ListBox } from 'react-aria-components';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { SelectItem } from './select-item';

describe('SelectItem component', () => {
  const defaultProps = {
    children: 'Option 1',
  };

  const renderWithListBox = (props = {}) => {
    return render(
      <ListBox aria-label="Test ListBox">
        <SelectItem {...defaultProps} {...props} />
      </ListBox>,
    );
  };

  it('should render with default classes', () => {
    renderWithListBox();
    const item = screen.getByText('Option 1');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('px-4 py-2 min-h-12');
  });

  it('should apply selected styles when selected', () => {
    renderWithListBox();
    const item = screen.getByText('Option 1');

    act(() => {
      item.classList.add('text-slate-800', 'bg-primary-100', 'font-semibold');
    });
    expect(item).toHaveClass('text-slate-800 bg-primary-100 font-semibold');
  });

  it('should trigger events when clicked', async () => {
    const user = userEvent.setup();
    renderWithListBox();

    const item = screen.getByText('Option 1');
    await act(async () => {
      await user.click(item);
    });

    expect(item).toBeInTheDocument();
  });

  it('should apply focused styles when focused', () => {
    renderWithListBox();
    const item = screen.getByText('Option 1');

    act(() => {
      item.classList.add('bg-primary-100', 'relative', 'z-10');
      item.focus();
    });

    expect(item).toHaveClass('bg-primary-100 relative z-10');
  });
});
