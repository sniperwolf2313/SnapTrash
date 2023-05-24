import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer text correctly', () => {
    const { getByText } = render(<Footer />);
    
    // Test footer text
    expect(getByText('SnapTrash')).toBeInTheDocument();
    expect(getByText('Descripción')).toBeInTheDocument();
    expect(getByText('Inicio')).toBeInTheDocument();
    expect(getByText('Iniciar Sesión')).toBeInTheDocument();
    expect(getByText('Registrarse')).toBeInTheDocument();
    expect(getByText('Ayuda')).toBeInTheDocument();
    expect(getByText('Nueva Solicitud')).toBeInTheDocument();
    expect(getByText('Contacto')).toBeInTheDocument();
    expect(getByText('snaptrash@dominio.com')).toBeInTheDocument();
    expect(getByText('Teléfono: 265 98 32')).toBeInTheDocument();
    expect(getByText('Celular: 300 702 46 70')).toBeInTheDocument();
    expect(getByText('Calle 43 # 45-96')).toBeInTheDocument();
    expect(getByText('Copyright 2023 © All rights reserved by:'));
    expect(getByText('SnapTrash')).toBeInTheDocument();
  });

  // Add more test cases if needed
});
