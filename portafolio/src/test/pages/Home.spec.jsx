import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';


describe('Home Page', () => {
 it('renderiza el título de la página de inicio', () => {
   render(<Home />);
   const title = screen.getByText('Página de Inicio');
   expect(title).toBeTruthy();
 });


 it('renderiza el párrafo de bienvenida', () => {
  render(<Home />);
  const paragraph = screen.getByText('Bienvenidos a mi portafolio.');
  expect(paragraph).toBeTruthy();
 });


 it('renderiza el contenedor de Bootstrap', () => {
  render(<Home />);
  // Buscar el ancestro con la clase "container" para seleccionar el contenedor correcto
  const container = screen.getByText('Página de Inicio').closest('.container');
  expect(container).toBeTruthy();
  expect(container).toHaveClass('container'); // Verifica la clase de Bootstrap
  expect(container).toHaveClass('my-5'); // Verifica la clase my-5
 });
});