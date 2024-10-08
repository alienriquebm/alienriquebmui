import { render } from '@testing-library/react';
import { Card } from './card';

const cardRender = ({
  title,
  children,
  bordered,
  transparent,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
  bordered?: boolean;
  transparent?: boolean;
} = {}) =>
  render(
    <Card title={title} bordered={bordered} transparent={transparent}>
      {children}
    </Card>,
  );

describe('Card', () => {
  it('should render the Card', () => {
    const { container } = cardRender({ children: 'Card' });
    expect(container).toBeInTheDocument();
  });

  it('should render title when prop is present', () => {
    const { getByText } = cardRender({ children: 'Card', title: 'Card title' });
    const cardTitle = getByText(/Card Title/i);

    expect(cardTitle).toBeInTheDocument();
  });

  it('should apply the bordered classes', () => {
    const { getByRole } = cardRender({
      title: 'Card title',
      bordered: true,
    });
    const card = getByRole('region');
    expect(card).toHaveClass('!border-slate-200');
  });

  it('should apply transparent background classes', () => {
    const { getByRole } = cardRender({
      title: 'Card title',
      transparent: true,
    });
    const card = getByRole('region');
    expect(card).toHaveClass('!bg-transparent');
  });
});
