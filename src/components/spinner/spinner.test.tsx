import { render } from '@testing-library/react';
import { Spinner } from './spinner';

const spinnerRender = () => render(<Spinner />);

describe('Spinner', () => {
  it('should render the Spinner component', () => {
    const { container } = spinnerRender();
    expect(container).toBeInTheDocument();
  });

  it('should render the animated svg Spinner', () => {
    const { container } = spinnerRender();
    const spinner = container.querySelector('svg');

    expect(spinner).toBeInTheDocument();
  });

  it('should render the Spinner with custom className', () => {
    const { container } = spinnerRender();
    const spinner = container.querySelector('svg');

    expect(spinner).toHaveClass(
      'size-6 inline-block flex-shrink-0 text-gray-200 fill-slate-500 animate-spin',
    );
  });
});
