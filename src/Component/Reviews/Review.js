import React from 'react';
import { Card } from 'react-bootstrap';


const Review = ({review}) => {

    return (
       
        <Card className="col-md-4 col-xs-12 col-sm-12 review-container m-4" style={{ width: "20rem" }}>
        
          <Card.Body className="p-3"> 
          
            <Card.Title>Name: {review?.name}</Card.Title>
            <Card.Text>
              {review?.text}
            </Card.Text>
            
          </Card.Body>
        </Card>
       
    );
};

export default Review;