import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './your-auth-provider'; // Replace with the correct paths

// Mock Firebase auth methods
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  onAuthStateChanged: jest.fn(),
}));

describe('AuthProvider', () => {
  test('signup calls createUserWithEmailAndPassword', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { signup } = result.current;
    await signup('test@example.com', 'password');

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), 'test@example.com', 'password');
  });

  test('login calls signInWithEmailAndPassword', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { login } = result.current;
    await login('test@example.com', 'password');

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), 'test@example.com', 'password');
  });

  test('logout calls signOut', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { logout } = result.current;
    await logout();

    expect(signOut).toHaveBeenCalledWith(expect.any(Object));
  });

  test('loginGoogle calls signInWithPopup', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { loginGoogle } = result.current;
    await loginGoogle();

    expect(signInWithPopup).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
  });

  test('resetPassword calls sendPasswordResetEmail', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { resetPassword } = result.current;
    await resetPassword('test@example.com');

    expect(sendPasswordResetEmail).toHaveBeenCalledWith(expect.any(Object), 'test@example.com');
  });

  test('useAuth returns the correct values', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { user, loading } = result.current;

    expect(user).toBeNull();
    expect(loading).toBe(true);
  });
});
