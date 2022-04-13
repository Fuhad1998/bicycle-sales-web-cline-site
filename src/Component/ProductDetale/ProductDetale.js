import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './ProductDetale.css'

const ProductDetale = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const item = product.find((pd) => pd.id == id);
//   console.log(item);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <Card style={{ width: "28rem" }}>
            <Card.Img variant="top" src={item?.img} />
            
          </Card>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <h1 className="text-detale">Name: {item?.name}</h1>
          <h4 className="text-detale">Price: {item?.price}</h4>
          <p className="text-detale">Description: {item?.description}</p>
          <Button><Link className=' detale-btn text-white buy-now-btn' to={`/purchase/${id}`}>Buy Now</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetale;
