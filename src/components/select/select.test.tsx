import { render, screen } from '@testing-library/react';
import { Select } from './select';

const mockItems = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' },
  { id: '3', name: 'Option 3' },
];

describe('Select Component', () => {
  it('renders Select component as disabled', () => {
    render(
      <Select items={mockItems} isDisabled dataCy="test-select" ariaLabel="Test Select">
        {item => <div>{item.name}</div>}
      </Select>,
    );
    const selectButton = screen.getByRole('button');
    expect(selectButton).toBeDisabled();
    expect(selectButton).toHaveAttribute('aria-label', 'Test Select');
  });

  it('renders Select component with description', () => {
    const description = 'This is a test description';
    render(
      <Select
        items={mockItems}
        description={description}
        dataCy="test-select"
        ariaLabel="Test Select"
      >
        {item => <div>{item.name}</div>}
      </Select>,
    );
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('displays placeholder when no option is selected', () => {
    render(
      <Select items={mockItems} dataCy="test-select" ariaLabel="Test Select">
        {item => <div>{item.name}</div>}
      </Select>,
    );
    const selectButton = screen.getByRole('button');
    expect(selectButton).toHaveTextContent('Select an option');
  });
});
