import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('renders the calculator sliders with their initial values', () => {
  render(<Home />);

  expect(screen.getByRole('slider', { name: /aperture/i })).toBeInTheDocument();
  expect(screen.getByRole('slider', { name: /shutter speed/i })).toBeInTheDocument();
  expect(screen.getByRole('slider', { name: /^iso$/i })).toBeInTheDocument();
  expect(screen.getAllByText('F 11').length).toBeGreaterThan(0);
  expect(screen.getAllByText('1/250 s').length).toBeGreaterThan(0);
  expect(screen.getAllByText('800').length).toBeGreaterThan(0);
});
