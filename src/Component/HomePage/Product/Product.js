
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name, img, price, id} = product;
    return (
      
        <CardGroup className='col-md-4 col-xs-12 col-sm-12 py-2 '>
          <Link className='link-name' to={`/productDetale/${id}`}>
        <Card className='p-2 border-0'>
          <Card.Img className='img-box' variant="top" src={img} />
          <Card.Body className='p-4'>
            <Card.Title> {name}</Card.Title>
            <Card.Text className='fs-5 text-danger'>
              Price: {price}
            </Card.Text>
            <Button><Link className='text-white buy-now-btn px-3' to={`/purchase/${id}`}>Buy Now</Link></Button>
          </Card.Body>
          
        </Card>
        
        </Link>
        
      </CardGroup>
      

     
    );
};

export default Product;