import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

beforeEach(cleanup);

test('App Component render correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Available Users/i);
  expect(linkElement).toBeInTheDocument();
});