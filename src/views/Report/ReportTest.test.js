import React from 'react';
import { render, screen } from '@testing-library/react';
import Report from './Report';

describe('Report component', () => {
  test('renders loading message when loading is true', () => {
    const { container } = render(<Report />);
    // Simulate loading state
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(container.querySelector('form')).toBeNull();
  });

  test('renders report form when loading is false', () => {
    const { container } = render(<Report />);
    // Simulate non-loading state
    expect(screen.queryByText('Cargando...')).toBeNull();
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  // Add more test cases to cover different scenarios of the Report component
});
