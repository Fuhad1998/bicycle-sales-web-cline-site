import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ReviewInput from "./ReviewInput";

import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])
 
  return (
   <div className="bg-light">
      <div className="bg-light container">
      
        
      <div className="row">
        <h1 className="pt-5">What Happy Customer</h1>
        <h4 className="pt-2">Say About Us</h4>

        {
          reviews.map(review => <Card 
            key={review.id}
            review={review}
          className="col-md-4 col-xs-12 col-sm-12 review-container m-4" style={{ width: "20rem" }}>
        
          <Card.Body className="p-3"> 
          
            <Card.Title>Name: {review?.name}</Card.Title>
            <Card.Text>
              {review?.text}
            </Card.Text>
            
          </Card.Body>
        </Card>)
        }
        
        
        

        
        
      </div>
      
    </div>
    <ReviewInput></ReviewInput>
   </div>


    
  );
};

export default Reviews;
