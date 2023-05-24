import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './your-firebase-config-file'; // Replace with the correct path

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
}));

describe('Firebase Authentication', () => {
  test('createUserWithEmailAndPassword calls the Firebase SDK function', async () => {
    const email = 'test@example.com';
    const password = 'password';

    await createUserWithEmailAndPassword(email, password);

    expect(getAuth).toHaveBeenCalled();
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  test('signInWithEmailAndPassword calls the Firebase SDK function', async () => {
    const email = 'test@example.com';
    const password = 'password';

    await signInWithEmailAndPassword(email, password);

    expect(getAuth).toHaveBeenCalled();
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  test('signOut calls the Firebase SDK function', async () => {
    await signOut();

    expect(getAuth).toHaveBeenCalled();
    expect(signOut).toHaveBeenCalledWith(auth);
  });

  test('sendPasswordResetEmail calls the Firebase SDK function', async () => {
    const email = 'test@example.com';

    await sendPasswordResetEmail(email);

    expect(getAuth).toHaveBeenCalled();
    expect(sendPasswordResetEmail).toHaveBeenCalledWith(auth, email);
  });
});
