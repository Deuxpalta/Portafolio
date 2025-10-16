import Text from '../atoms/Text';


function CardBody({ title, description, url }) {
 return (
   <>
     <Text variant="h5">{title}</Text>
     <Text variant="p">{description}</Text>
     <Text variant="span" className="text-muted">
       <a href={url} target="_blank" rel="noopener noreferrer">
       </a>
     </Text>
   </>
 );
}


export default CardBody;