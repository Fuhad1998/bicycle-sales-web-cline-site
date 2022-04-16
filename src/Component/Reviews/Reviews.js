import React, { useEffect, useState } from "react";

import Review from "./Review";
import ReviewInput from "./ReviewInput";


import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    fetch('https://hidden-refuge-86930.herokuapp.com/reviews')
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
          reviews.map(review => <Review
          key={review?.id}
          review={review}
          ></Review>)
        }
        
        
        

        
        
      </div>
      
    </div>
    <ReviewInput></ReviewInput>
   </div>


    
  );
};

export default Reviews;
