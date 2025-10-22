import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from '../../../components/organisms/ProjectCard';


describe('ProjectCard Component', () => {
 const mockProject = {
   name: 'Microsoft inaugura su primera Región de Datacenters en Chile',
   description: 'Microsoft ha inaugurado su primera región de datacenters en Chile, con el objetivo de acelerar la innovación y el desarrollo económico local mediante servicios en la nube.',
   image: 'https://imagenes.elpais.com/resizer/v2/IPXGUVIQ4ZDUTJW6UU365SR2T4.png?auth=fb4b376c123642b9aeabd05e7bcefec052d0e11fa246df8668bee2de38fa6c77&width=1200',
   projecturl: 'https://elpais.com/chile/branded/2025-06-25/microsoft-inaugura-su-primera-region-de-datacenters-en-chile-para-acelerar-la-innovacion-y-el-desarrollo-economico-local.html',
 };


 it('renderiza el título del proyecto', () => {
   render(<ProjectCard project={mockProject} />);
   expect(screen.getByText(mockProject.name)).toBeTruthy();
 });


 it('renderiza la descripción del proyecto', () => {
   render(<ProjectCard project={mockProject} />);
   expect(screen.getByText(mockProject.description)).toBeTruthy();
 });


 it('renderiza la imagen del proyecto con el alt correcto', () => {
   render(<ProjectCard project={mockProject} />);
   const image = screen.getByRole('img', { name: mockProject.name });
   expect(image).toBeTruthy();
   expect(image.getAttribute('src')).toBe(mockProject.image);
 });


 it('renderiza el botón de ver proyecto y abre la url en nueva pestaña al click', () => {
   render(<ProjectCard project={mockProject} />);
   const button = screen.getByRole('button');
   expect(button).toBeTruthy();
   expect(button).toHaveClass('btn-primary');
   // mockear window.open
   const spy = spyOn(window, 'open');
   fireEvent.click(button);
   expect(spy).toHaveBeenCalledWith(mockProject.projecturl, '_blank');
 });
});