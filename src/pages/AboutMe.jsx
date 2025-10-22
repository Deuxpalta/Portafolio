
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutMeCard from '../components/organisms/AboutMeCard';
import aboutMeData from '../data/AboutMe';
import ErrorBoundary from '../ErrorBoundary';


function AboutMe() {
  return (
    <ErrorBoundary>
      <Container className="my-5">
        <h1>Sobre mí</h1>
        <Row className="justify-content-center">
          {aboutMeData.map(item => (
            <Col key={item.id} xs={12} sm={8} md={6} lg={5} className="d-flex justify-content-center">
              <AboutMeCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </ErrorBoundary>
  );
}

export default AboutMe;