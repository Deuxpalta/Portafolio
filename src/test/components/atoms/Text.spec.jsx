import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Atom', () => {
  it('renderiza diferentes variantes de texto', () => {
    render(<Text variant="h3" className="title">Titulo</Text>);
    expect(screen.getByText('Titulo')).toBeTruthy();

    render(<Text variant="p" className="paragraph">Parrafo</Text>);
    expect(screen.getByText('Parrafo')).toBeTruthy();
  });
});
