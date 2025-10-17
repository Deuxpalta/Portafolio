import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMeCard from '../../../components/organisms/AboutMeCard';

const mockItem = { id: 1, title: 'Sobre Mí', content: 'Contenido' };

describe('AboutMeCard Component', () => {
  it('renderiza título y contenido del item', () => {
    render(<AboutMeCard item={mockItem} />);
    expect(screen.getByText(mockItem.title)).toBeTruthy();
    expect(screen.getByText(mockItem.content)).toBeTruthy();
  });
});
