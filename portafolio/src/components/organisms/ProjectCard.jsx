import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';



function ProjectCard({ project }) {



 return (
   <Card style={{ width: '18rem' }} className="m-2">
     <Image src={project.image} alt={project.name} className="card-img-top" />
      <Card.Body>
      <CardBody
        title={project.name}
        description={project.description}
      />
       <Button variant="primary" onClick={() => window.open(`${project.projecturl}`, '_blank')}>
         ira si vamo' a ver lo' proyecto'
       </Button>
     </Card.Body>
   </Card>
 );
}


export default ProjectCard;