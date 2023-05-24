import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders loading message when loading is true', () => {
    const { container } = render(<Login />);
    // Simulate loading state
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(container.querySelector('form')).toBeNull();
  });

  test('renders login form when loading is false', () => {
    const { container } = render(<Login />);
    // Simulate non-loading state
    expect(screen.queryByText('Cargando...')).toBeNull();
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  test('submits form with user credentials', () => {
    const { container } = render(<Login />);
    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');
    const submitButton = container.querySelector('button[type="submit"]');

    // Fill in form inputs
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Assert that the form submission is handled correctly (e.g., authentication)

    // Add assertions based on your expected behavior
  });

  test('performs Google login', () => {
    const { container } = render(<Login />);
    const googleButton = container.querySelector('button[aria-label="Login with Google"]');

    // Simulate Google login button click
    fireEvent.click(googleButton);

    // Assert that the Google login is handled correctly (e.g., authentication)

    // Add assertions based on your expected behavior
  });

  // Add more test cases to cover different scenarios of the Login component
});
