import React from "react";
import { Card } from "react-bootstrap";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="bg-white container">
      <div className="row">
        <h1 className="pt-5">What Happy Customer</h1>
        <h4>Say About Us</h4>

        <Card className="col-md-4 col-xs-12 col-sm-12 review-container m-4" style={{ width: "20rem" }}>
          
          <Card.Body className="p-3"> 
          
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
            
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            deserunt quisquam similique voluptates voluptas nesciunt omnis
            laboriosam eaque, ut neque? Ut culpa unde illo dignissimos cum quis
            tempore dolores nam?
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className="col-md-4 col-xs-12 col-sm-12 review-container m-4 " style={{ width: "20rem" }}>
          
          <Card.Body className="p-3">
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            deserunt quisquam similique voluptates voluptas nesciunt omnis
            laboriosam eaque, ut neque? Ut culpa unde illo dignissimos cum quis
            tempore dolores nam?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-md-4 col-xs-12 col-sm-12 review-container m-4" style={{ width: "20rem" }}>
          
          <Card.Body className="p-3">
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            deserunt quisquam similique voluptates voluptas nesciunt omnis
            laboriosam eaque, ut neque? Ut culpa unde illo dignissimos cum quis
            tempore dolores nam?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-md-4 col-xs-12 col-sm-12 review-container m-4" style={{ width: "20rem" }}>
          
          <Card.Body className="p-3">
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            deserunt quisquam similique voluptates voluptas nesciunt omnis
            laboriosam eaque, ut neque? Ut culpa unde illo dignissimos cum quis
            tempore dolores nam?
            </Card.Text>
          </Card.Body>
        </Card>

        
        {/* <div className="col-md-4 col-xs-12 col-sm-12 review-container p-2">
          <h2 className="">talk</h2>
          <h6 className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            deserunt quisquam similique voluptates voluptas nesciunt omnis
            laboriosam eaque, ut neque? Ut culpa unde illo dignissimos cum quis
            tempore dolores nam?
          </h6>
        </div> */}
      </div>
    </div>
  );
};

export default Reviews;