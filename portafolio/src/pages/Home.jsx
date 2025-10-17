import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ErrorBoundary from '../ErrorBoundary';


function Home() {
  return (
    <ErrorBoundary>
      <Container className="my-5 text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <h1>Página de Inicio</h1>
            <p>no me gustan las fotos, pongame el 1.</p>
            <p>Bienvenidos a mi portafolio.</p>
          </Col>
        </Row>
      </Container>
    </ErrorBoundary>
  );
}


export default Home;