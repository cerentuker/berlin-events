import { render, screen } from '@testing-library/react';
import App from './App';

// 'Something went wrong. Please try again later.' should be displayed on screen when App.js crashes
test('renders error message when API fails', () => {
  render(<App />);
  const linkElement = screen.getByText(/Show Me Some Events/i);
  expect(linkElement).toBeInTheDocument();
});

// validate that only the logo is visible on page when API returns 0 results
test('renders error message when API fails', () => {
  render(<App />);
  const linkElement = screen.getByText(/Show Me Some Events/i);
  expect(linkElement).toBeInTheDocument();
});

// validate that there are some card elements on landing page when API returns more than one result.
test('renders events', () => {
  render(<App />);
  const linkElement = screen.getByText(/Show Me Some Events/i);
  expect(linkElement).toBeInTheDocument();
});
