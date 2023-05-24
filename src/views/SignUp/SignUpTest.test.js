import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignUp from './SignUp';
import { AuthProvider } from '../../context/authContext';

describe('SignUp component', () => {
  it('renders correctly', () => {
    render(
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    );

    expect(screen.getByText('Registrarse')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo Electronico')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button',await waitFor(() => expect(container.querySelector { name: 'Registrarse' })).toBeInTheDocument()));
  });

  it('renders the email and password input fields', () => {
    render(<SignUp />);
    expect(screen.getByLabelText('Correo Electronico')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
  });

  it('submits the form with valid inputs', async () => {
    const { container } = render(
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Correo Electronico');
    const passwordInput = screen.getByLabelText('Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(container.querySelector('.Alert')).not.toBeInTheDocument());
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('displays an error message for invalid email input', async () => {
    const { container } = render(
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Correo Electronico');
    const passwordInput = screen.getByLabelText('Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(container.querySelector('.Alert')).toBeInTheDocument());
    expect(screen.getByText('Correo Invalido')).toBeInTheDocument();
  });

  it('displays an error message for weak password input', async () => {
    const { container } = render(
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Correo Electronico');
    const passwordInput = screen.getByLabelText('Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'weak' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(container.querySelector('.Alert')).toBeInTheDocument());
    expect(screen.getByText('La Contraseña Debe Tener Almenos 6 Caracteres')).toBeInTheDocument();
  });

  it('updates the user state when input fields change', () => {
    render(<SignUp />);
    fireEvent.change(screen.getByLabelText('Correo Electronico'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: 'password' },
    });
    expect(screen.getByLabelText('Correo Electronico')).toHaveValue(
      'test@example.com'
    );
    expect(screen.getByLabelText('Contraseña')).toHaveValue('password');
  });

  it('submits the form and calls the signup function when submit button is clicked', async () => {
    const signupMock = jest.fn();
    jest.mock('../../context/authContext', () => ({
      useAuth: () => ({ signup: signupMock }),
    }));
    render(<SignUp />);
    fireEvent.change(screen.getByLabelText('Correo Electronico'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: 'password' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }));
    await waitFor(() => {
      expect(signupMock).toHaveBeenCalledWith('test@example.com', 'password');
    });
  });

  it('displays an error message for email already in use', async () => {
    const { container } = render(
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Correo Electronico');
    const passwordInput = screen.getByLabelText('Contraseña');
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    fireEvent.change(emailInput, { target: { value: 'alreadyused@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(container.querySelector('.error-message')).not.toBeNull());
  });

  it('shows an error message when signup fails with an invalid email error', async () => {
    const signupMock = jest.fn().mockRejectedValue({
      code: 'auth/invalid-email',
    });
    jest.mock('../../context/authContext', () => ({
      useAuth: () => ({ signup: signupMock }),
    }));
    render(<SignUp />);
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }));
    await waitFor(() => {
      expect(
        screen.getByText('Correo Invalido')
      ).toBeInTheDocument();
    });
  });

  it('shows an error message when signup fails with an email already in use error', async () => {
    const signupMock = jest.fn().mockRejectedValue({
      code: 'auth/email-already-in-use',
    });
    jest.mock('../../context/authContext', () => ({
      useAuth: () => ({ signup: signupMock }),
    }));
    render(<SignUp />);
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }));
    await waitFor(() => {
      expect(screen.getByText('Correo Ya existe')).toBeInTheDocument();
    });
  });

  it('calls the loginGoogle function when the Google button is clicked', async () => {
    const { container } = render(
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    );

    const googleButton = screen.getByRole('button', { name: 'Iniciar sesión con Google' });

    fireEvent.click(googleButton);

    expect(loginGoogle).toHaveBeenCalled();
  });

});
