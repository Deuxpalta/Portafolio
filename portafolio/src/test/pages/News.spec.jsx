import React from 'react';
import { render, screen } from '@testing-library/react';
import News from '../../pages/News';

describe('News Page', () => {
  it('renderiza el título de Noticias', () => {
    render(<News />);
    expect(screen.getByText('Noticias')).toBeTruthy();
  });
});
