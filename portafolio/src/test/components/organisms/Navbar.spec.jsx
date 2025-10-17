import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../../components/organisms/Navbar';

describe('NavBar Component', () => {
  it('renderiza enlaces principales', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Proyectos')).toBeTruthy();
    expect(screen.getByText('Noticias')).toBeTruthy();
    expect(screen.getByText('Sobre Mí')).toBeTruthy();
  });
});
