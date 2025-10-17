import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('CardBody Molecule', () => {
  it('renderiza título y descripción', () => {
    render(<CardBody title="Test Title" description="Test Desc" />);
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Desc')).toBeTruthy();
  });

  it('muestra enlace cuando recibe url', () => {
    render(<CardBody title="T" description="D" url="https://example.com" />);
    const link = screen.getByText('Ver más');
    expect(link).toBeTruthy();
    expect(link.closest('a').getAttribute('href')).toBe('https://example.com');
  });
});
