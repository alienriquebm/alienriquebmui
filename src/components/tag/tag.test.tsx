import { render } from '@testing-library/react';
import Tag from './tag';

const tagRender = ({
	leftIcon,
	rightIcon,
}: { leftIcon?: React.ReactNode; rightIcon?: React.ReactNode } = {}) =>
	render(
		<Tag leftIcon={leftIcon} rightIcon={rightIcon}>
			Tag
		</Tag>
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
		const { container } = tagRender({ leftIcon: '🔎' });
		const leftIcon = container.querySelector('span');

		expect(leftIcon).toBeInTheDocument();
	});

	it('should render right icon when is present', () => {
		const { container } = tagRender({ rightIcon: '🔎' });
		const rightIcon = container.querySelector('span');

		expect(rightIcon).toBeInTheDocument();
	});

	it('should render left and right icons when are present', () => {
		const { container } = tagRender({ leftIcon: '🔎', rightIcon: '🔎' });
		const leftIcon = container.querySelector('span');
		const rightIcon = container.querySelectorAll('span')[1];

		expect(leftIcon).toBeInTheDocument();
		expect(rightIcon).toBeInTheDocument();
	});
});
