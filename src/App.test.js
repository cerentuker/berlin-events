import { render, screen } from '@testing-library/react';
import App from './App';

test('renders show events link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Show Me Some Events/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * possible test cases 
 * 1- show results button displayed on page
 *  */
