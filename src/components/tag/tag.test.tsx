import { render } from '@testing-library/react';
import Tag from './tag';
import { MdSearch } from 'react-icons/md';

const tagRender = ({
  leftIcon,
  rightIcon,
}: { leftIcon?: React.ReactNode; rightIcon?: React.ReactNode } = {}) =>
  render(
    <Tag leftIcon={leftIcon} rightIcon={rightIcon}>
      Tag
    </Tag>,
  );

describe('Tag', () => {
  it('should render the Tag component', () => {
    const { container } = tagRender();
    expect(container).toBeInTheDocument();
  });

  it('should render its children', () => {
    const { getByText } = tagRender();

    expect(getByText(/Tag/i)).toBeInTheDocument();
  });

  it('should render left icon when is present', () => {
    const { container } = tagRender({ leftIcon: <MdSearch /> });
    const leftIcon = container.querySelector('svg');

    expect(leftIcon).toBeInTheDocument();
  });

  it('should render right icon when is present', () => {
    const { container } = tagRender({ rightIcon: <MdSearch /> });
    const rightIcon = container.querySelector('svg');

    expect(rightIcon).toBeInTheDocument();
  });

  it('should render left and right icons when are present', () => {
    const { container } = tagRender({ leftIcon: <MdSearch />, rightIcon: <MdSearch /> });
    const leftIcon = container.querySelector('svg');
    const rightIcon = container.querySelectorAll('svg')[1];

    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
  });
});
