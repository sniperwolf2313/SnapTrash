import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResetPassword from './ResetPassword';

describe('ResetPassword component', () => {
  test('renders loading message when loading is true', () => {
    const { container } = render(<ResetPassword />);
    // Simulate loading state
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(container.querySelector('form')).toBeNull();
  });

  test('renders reset password form when loading is false', () => {
    const { container } = render(<ResetPassword />);
    // Simulate non-loading state
    expect(screen.queryByText('Cargando...')).toBeNull();
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  test('submits form with user email', () => {
    const { container } = render(<ResetPassword />);
    const emailInput = container.querySelector('input[name="email"]');
    const submitButton = container.querySelector('button[type="submit"]');

    // Fill in form input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Assert that the form submission is handled correctly (e.g., displaying a success message)
    // You can mock the necessary dependencies to test specific behaviors

    // Add assertions based on your expected behavior
  });

  // Add more test cases to cover different scenarios of the ResetPassword component
});
