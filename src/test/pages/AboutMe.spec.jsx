import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../../pages/AboutMe';

describe('AboutMe Page', () => {
  it('renderiza el título de la página', () => {
    render(<AboutMe />);
    expect(screen.getByText('Sobre mí')).toBeTruthy();
  });
});
