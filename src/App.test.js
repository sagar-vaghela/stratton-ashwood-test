import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Cards from './Cards/Cards';

afterEach(cleanup);

const setup = () => {
  const utils = render(<Cards />)
  const input = utils.getByRole('textbox')
  return {
    input,
    ...utils,
  }
}

test('It should keep a 5 in front of the input', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '5' } })
  expect(input.value).toBe('5')
})

test('It should not allow inputted -(minues)', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '-1' } })
  expect(input.value).toBe('-1') //empty after
})

test('It should not allow empty', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '' } })
  expect(input.value).toBe('') //empty after
})

test('Number of people span or div', () => {
  const { getByText } = render(<Cards />);
  const textElement = getByText(/Number of people/i);
  expect(textElement).toBeInTheDocument();
});

test('Having textbox', () => {
  render(<Cards />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('Having button', () => {
  render(<Cards />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});