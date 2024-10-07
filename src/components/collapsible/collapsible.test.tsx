import { fireEvent, render } from '@testing-library/react';
import { Collapsible } from './collapsible';

const collapsibleRender = ({
  children,
}: {
  children?: React.ReactNode;
} = {}) => render(<Collapsible>{children}</Collapsible>);

describe('Collapsible', () => {
  it('should render the Collapsible', () => {
    const { container } = collapsibleRender({ children: 'Collapsible content' });
    expect(container).toBeInTheDocument();
  });

  it('should collapse the content on click icon', () => {
    const { getByRole } = collapsibleRender({ children: 'Collapsible content' });

    const collapseIcon = getByRole('button');
    const collapsibleContent = getByRole('region');
    expect(collapsibleContent).toHaveClass('max-h-20');
    fireEvent.click(collapseIcon);
    expect(collapsibleContent).toHaveClass('max-h-full');
  });
});
