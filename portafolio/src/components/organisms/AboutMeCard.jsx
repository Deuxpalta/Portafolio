import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import CardBody from '../molecules/CardBody';



function AboutMeCard({ aboutMeItem }) {



 return (
   <Card style={{ width: '18rem' }} className="m-2">
     <Image src={aboutMeItem.image} alt={aboutMeItem.title} className="card-img-top" />
     <Card.Body>
       <CardBody
         title={aboutMeItem.title}
         description={aboutMeItem.content}

       />
     </Card.Body>
   </Card>
 );
}


export default AboutMeCard;