import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/User Management App/i);
  expect(titleElement).toBeInTheDocument();
});
