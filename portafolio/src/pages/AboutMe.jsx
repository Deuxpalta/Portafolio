import { Container, Row, Col } from 'react-bootstrap';
import aboutMeItems from '../data/AboutMe';
import AboutMeCard from '../components/organisms/NewsCard';


function AboutMe() {
 return (
   <Container className="my-5">
     <h1>Acerca de Mí</h1>
    <Row className="justify-content-center">
      {aboutMeItems.map((aboutMeItem) => (
        <Col key={aboutMeItem.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <AboutMeCard aboutMeItem={aboutMeItem} />
        </Col>
      ))}
    </Row>
   </Container>
 );
}


export default AboutMe;