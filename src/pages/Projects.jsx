import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projects from '../data/Projects';
import ProjectCard from '../components/organisms/ProjectCard';
import ErrorBoundary from '../ErrorBoundary';


function Projects() {
 return (
   <ErrorBoundary>
     <Container className="my-5">
       <h1>Proyectos</h1>
      <Row className="justify-content-center">
        {projects.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
     </Container>
   </ErrorBoundary>
 );
}


export default Projects;