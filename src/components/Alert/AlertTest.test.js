import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

describe('Alert Component', () => {
  test('renders alert message correctly', () => {
    const message = 'This is an error message';
    const { getByText } = render(<Alert message={message} />);
    
    // Test alert message
    expect(getByText(message)).toBeInTheDocument();
  });

  // Add more test cases if needed
});
