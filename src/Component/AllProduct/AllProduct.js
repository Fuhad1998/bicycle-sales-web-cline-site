
import React from 'react';
import { Button, Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllProduct.css'

const AllProduct = ({allProduct}) => {
    const {img, price, name, id} = allProduct;
    return (
        <CardGroup className='col-md-4 col-xs-12 col-sm-12 py-2'>
        <Card className='p-2 border-0'>
          <Card.Img variant="top" src={img} />
          <Card.Body className='p-4'>
            <Link className='link-name' to={`/productDetale/${id}`}><Card.Title>Name: {name}</Card.Title></Link>
            <Card.Text>
              Price: {price}
            </Card.Text>
            <Button><Link className='text-white buy-now-btn' to={`/purchase/${id}`}>Buy Now</Link></Button>
          </Card.Body>
          
        </Card>
        
       
        
      </CardGroup>
    );
};

export default AllProduct;