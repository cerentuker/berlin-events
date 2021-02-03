import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'

test('renders header logo', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/Berlin Logo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders header', () => {
  render(<App />);
  const bannerElement = screen.getByRole('banner');
  expect(bannerElement).toBeInTheDocument();
});
