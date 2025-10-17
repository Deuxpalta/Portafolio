import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../components/atoms/Image';

describe('Image Atom', () => {
  it('renderiza una imagen con src y alt', () => {
  render(<Image src="https://imagenes.elpais.com/resizer/v2/IPXGUVIQ4ZDUTJW6UU365SR2T4.png?auth=fb4b376c123642b9aeabd05e7bcefec052d0e11fa246df8668bee2de38fa6c77&width=1200" alt="Test Image" className="img-class" />);
    const img = screen.getByRole('img', { name: 'Test Image' });
    expect(img).toBeTruthy();
  expect(img.getAttribute('src')).toBe('https://imagenes.elpais.com/resizer/v2/IPXGUVIQ4ZDUTJW6UU365SR2T4.png?auth=fb4b376c123642b9aeabd05e7bcefec052d0e11fa246df8668bee2de38fa6c77&width=1200');
    expect(img.className).toContain('img-class');
  });
});
