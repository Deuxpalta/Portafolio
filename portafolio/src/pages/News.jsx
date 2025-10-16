import { Container, Row, Col } from 'react-bootstrap';
import newsItems from '../data/News';
import NewsCard from '../components/organisms/NewsCard';


function News() {
 return (
   <Container className="my-5">
     <h1>Noticias</h1>
    <Row className="justify-content-center">
      {newsItems.map((newsItem) => (
        <Col key={newsItem.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <NewsCard newsItem={newsItem} />
        </Col>
      ))}
    </Row>
   </Container>
 );
}


export default News;