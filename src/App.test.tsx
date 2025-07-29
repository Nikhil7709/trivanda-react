import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
 
test('renders Trivanda Home page', () => {
  render(<App />);
  expect(screen.getByText(/Trivanda/i)).toBeInTheDocument();
}); 