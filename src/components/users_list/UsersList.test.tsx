import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import UsersList from './UsersList';

beforeEach(cleanup);

test('UsersList Component render correctly', () => {
  render(<UsersList />);
  const linkElement = screen.getByText(/Available Users/i);
  expect(linkElement).toBeInTheDocument();
});