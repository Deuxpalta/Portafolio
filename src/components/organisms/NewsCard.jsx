import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';



function NewsCard({ newsItem }) {
 return (
   <Card style={{ width: '18rem' }} className="m-2">
     <Image src={newsItem.image} alt={newsItem.title} className="card-img-top" />
      <Card.Body>
        <CardBody
          title={newsItem.title}
          description={newsItem.description}
        />
       <div className="d-flex justify-content-center mt-2">
         <Button variant="primary" onClick={() => window.open(`${newsItem.url}`, '_blank')}>
           Leer más
         </Button>
       </div>
     </Card.Body>
   </Card>
 );
}


export default NewsCard;