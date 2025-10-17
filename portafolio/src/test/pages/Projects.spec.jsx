import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../../pages/Projects';

describe('Projects Page', () => {
  it('renderiza el título de Proyectos', () => {
    render(<Projects />);
    expect(screen.getByText('Proyectos')).toBeTruthy();
  });
});
