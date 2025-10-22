import React from 'react';
import { Card } from 'react-bootstrap';
import CardBody from '../molecules/CardBody';

function AboutMeCard({ item }) {
  return (
    <Card id={`about-me-${item.id}`} style={{ width: '18rem' }} className="m-2">
      <Card.Body>
        <CardBody
          title={item.title}
          description={item.content}
        />
      </Card.Body>
    </Card>
  );
}


export default AboutMeCard;