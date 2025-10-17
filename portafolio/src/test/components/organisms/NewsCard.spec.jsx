import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsCard from '../../../components/organisms/NewsCard';

const mockNews = {
  id: 2,
  title: 'Microsoft inaugura su primera Región de Datacenters en Chile',
  description: 'Microsoft ha inaugurado su primera región de datacenters en Chile, con el objetivo de acelerar la innovación y el desarrollo económico local mediante servicios en la nube.',
  image: 'https://imagenes.elpais.com/resizer/v2/IPXGUVIQ4ZDUTJW6UU365SR2T4.png?auth=fb4b376c123642b9aeabd05e7bcefec052d0e11fa246df8668bee2de38fa6c77&width=1200',
  url: 'https://elpais.com/chile/branded/2025-06-25/microsoft-inaugura-su-primera-region-de-datacenters-en-chile-para-acelerar-la-innovacion-y-el-desarrollo-economico-local.html'
};

describe('NewsCard Component', () => {
  it('renderiza título, descripción e imagen', () => {
    render(<NewsCard newsItem={mockNews} />);
    expect(screen.getByText(mockNews.title)).toBeTruthy();
    expect(screen.getByText(mockNews.description)).toBeTruthy();
    const img = screen.getByRole('img', { name: mockNews.title });
    expect(img.getAttribute('src')).toBe(mockNews.image);
  });

  it('abre la url en nueva pestaña al click del botón', () => {
    render(<NewsCard newsItem={mockNews} />);
    const spy = spyOn(window, 'open');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(spy).toHaveBeenCalledWith(mockNews.url, '_blank');
  });
});
