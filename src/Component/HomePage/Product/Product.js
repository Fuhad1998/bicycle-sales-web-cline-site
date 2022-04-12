
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name, img, price} = product;
    return (
        <CardGroup className='col-md-4 col-xs-12 col-sm-12 py-2'>
        <Card className='p-2'>
          <Card.Img variant="top" src={img} />
          <Card.Body className='p-4'>
            <Link to="/productDetale"><Card.Title>Name: {name}</Card.Title></Link>
            <Card.Text>
              Price: {price}
            </Card.Text>
            <Button>Add To Cart</Button>
          </Card.Body>
          
        </Card>
        
       
        
      </CardGroup>

     
    );
};

export default Product;