import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { Tooltip } from './tooltip';
import { ITooltip } from './tooltip.interfaces';

const onOpenChangeMock = jest.fn();

const tooltipRender = ({ isOpen, onOpenChange = onOpenChangeMock, placement }: ITooltip = {}) =>
  render(
    <Tooltip isOpen={isOpen} onOpenChange={onOpenChange} placement={placement}>
      Tooltip content
    </Tooltip>,
  );

describe('Tooltip', () => {
  it('renders Tooltip component', () => {
    const { getByRole } = tooltipRender();
    const button = getByRole('button', { name: /Information/i });
    expect(button).toBeInTheDocument();
  });

  it('renders Tooltip when isOpen is true', async () => {
    const { getByText } = tooltipRender({
      isOpen: true,
    });

    await waitFor(() => {
      const tooltipContent = getByText(/Tooltip content/i);
      expect(tooltipContent).toBeInTheDocument();
    });
  });

  it('opens and closes Tooltip on hover', async () => {
    const { getByRole, getByText, queryByText } = tooltipRender();

    const button = getByRole('button', { name: /Information/i });

    await act(async () => {
      button.focus();
      fireEvent.mouseOver(button);
    });

    await waitFor(() => {
      const tooltipContent = getByText(/Tooltip content/i);
      expect(tooltipContent).toBeInTheDocument();
    });

    await act(async () => {
      button.focus();
      fireEvent.mouseLeave(button);
    });

    await waitFor(() => {
      const tooltipContent = queryByText(/Tooltip content/i);
      expect(tooltipContent).not.toBeInTheDocument();
    });
  });

  it('renders Tooltip children after mouseOver', async () => {
    const { getByRole, getByText } = tooltipRender();
    const button = getByRole('button', { name: /Information/i });

    await act(async () => {
      button.focus();
      fireEvent.mouseOver(button);
    });

    await waitFor(() => {
      const content = getByText(/Tooltip content/i);
      expect(content).toBeInTheDocument();
    });
  });

  it('should call the onOpenChange function', async () => {
    const { getByRole } = tooltipRender();
    const button = getByRole('button', { name: /Information/i });

    await act(async () => {
      button.focus();
      fireEvent.mouseOver(button);
    });

    await waitFor(() => {
      expect(onOpenChangeMock).toHaveBeenCalled();
    });
  });

  it('should apply the placement bottom class', async () => {
    const { getByRole } = tooltipRender({ placement: 'bottom' });
    const button = getByRole('button', { name: /Information/i });

    await act(async () => {
      button.focus();
      fireEvent.mouseOver(button);
    });

    await waitFor(() => {
      expect(document.querySelector('.mt-2')).toBeInTheDocument();
    });
  });

  it('should not be open when isOpen is undefined', async () => {
    const { queryByText } = tooltipRender();
    const tooltipContent = queryByText(/Tooltip content/i);
    expect(tooltipContent).not.toBeInTheDocument();
  });
});
