import { fireEvent, render } from '@testing-library/react';
import { Avatar } from './avatar';

const avatarRender = ({ url }: { url?: string } = {}) => render(<Avatar url={url} />);

describe('Avatar', () => {
  it('should render the Avatar component', () => {
    const { container } = avatarRender();
    expect(container).toBeInTheDocument();
  });

  it('should render the img', () => {
    const { getByRole } = avatarRender();
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('should render the default avatar img', () => {
    const { getByRole } = avatarRender();
    const img = getByRole('img');

    expect(img).toHaveAttribute('src', 'test-file-stub');
  });

  it('should render the img with the url', () => {
    const url = 'https://avatars.githubusercontent.com/u/12345678';
    const { getByRole } = avatarRender({ url });
    const img = getByRole('img');

    expect(img).toHaveAttribute('src', url);
  });

  it('should set the default avatar on image error', () => {
    const { getByRole } = avatarRender();
    const img = getByRole('img');
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', 'test-file-stub');
  });
});
