/* eslint-disable react/require-default-props */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import useOptionallyControlledState from '../index';

(global as any).__DEV__ = true;

interface TestProps {
  show?: boolean;
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
}

const mockText = 'Some value';

const TestComponent = ({ show: controlledValue, initialValue, onChange }: TestProps) => {
  const [isShow, setIsShow] = useOptionallyControlledState({
    controlledValue,
    initialValue,
    onChange,
  });

  return (
    <>
      <button onClick={() => setIsShow(!isShow)} type="button">
        Toggle
      </button>
      {isShow && <p>{mockText}</p>}
    </>
  );
};

describe('useOptionallyControlledState', () => {
  it('supports a controlled mode', () => {
    const onChange = jest.fn();
    const { rerender } = render(<TestComponent show onChange={onChange} />);
    screen.getByText(mockText);
    fireEvent.click(screen.getByText('Toggle'));
    expect(onChange).toHaveBeenLastCalledWith(false);
    rerender(<TestComponent show={false} onChange={onChange} />);
    expect(screen.queryByText(mockText)).toBe(null);
    fireEvent.click(screen.getByText('Toggle'));
    expect(onChange).toHaveBeenLastCalledWith(true);
    rerender(<TestComponent show />);
    screen.getByText(mockText);
  });

  it('supports an uncontrolled mode', () => {
    const onChange = jest.fn();
    render(<TestComponent initialValue onChange={onChange} />);
    screen.getByText(mockText);
    fireEvent.click(screen.getByText('Toggle'));
    expect(onChange).toHaveBeenLastCalledWith(false);
    expect(screen.queryByText(mockText)).toBe(null);
    fireEvent.click(screen.getByText('Toggle'));
    expect(onChange).toHaveBeenLastCalledWith(true);
    screen.getByText(mockText);
  });

  it('throws when neither a controlled nor an initial value is provided', () => {
    expect(() => render(<TestComponent />)).toThrow(
      'Either an initial or a controlled value should be provided.'
    );
  });

  it('throws when switching from uncontrolled to controlled mode', () => {
    const { rerender } = render(<TestComponent initialValue />);
    expect(() => rerender(<TestComponent show />)).toThrow(
      /Can not change from uncontrolled to controlled mode./
    );
  });

  it('throws when switching from controlled to uncontrolled mode', () => {
    const { rerender } = render(<TestComponent show />);
    expect(() => rerender(<TestComponent initialValue />)).toThrow(
      /Can not change from controlled to uncontrolled mode./
    );
  });
});
