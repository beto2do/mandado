import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GeneralError } from './general-error'

const mockCallback = jest.fn(() =>{});

test('GeneralError: displays for global error', () => {
  render(<GeneralError error={new Error('Something was wrong')} reset={mockCallback} />);
  const buttons = screen.getAllByRole('button');
  buttons[0].click();
  expect(screen.getByRole('heading')).toHaveTextContent('Something went wrong!');
  expect(buttons[0]).toHaveTextContent('Try again');
  expect(mockCallback.mock.calls).toHaveLength(1);
})
