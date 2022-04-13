import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import './Purchas.css'

const Purchase = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const item = product.find((pd) => pd.id == id);
  console.log(item);

  const onSubmit = (data) => {
    data.orderName = item.name;
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <img style={{width: "auto"}} src={item?.img} alt="" />
          <h2 className="p-2">Name: {item?.name}</h2>
          <p>Id: {item?._id}</p>

            </div>

        <div className="col-xs-12 col-sm-12 col-md-6">
            <h2>Give Details</h2>
          <form className="order-from" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mb-3 input-btn shadow-sm p-2 rounded"
              {...register("name")}
              placeholder="Write your name"
            />
            <input
              className="mb-3 input-btn shadow-sm p-2 rounded"
              {...register("email")}
              placeholder="Write your email"
            />
            <input
              className="mb-3 input-btn shadow-sm p-2 rounded"
              {...register("address")}
              placeholder="Write your address"
            />
            <input
              className="mb-3 input-btn shadow-sm p-2 rounded"
              {...register("number")}
              placeholder="Write your phone number"
            />

            <input
              className="btn-submit input-btn shadow-sm rounded-pill bg-primary text-white p-2"
              type="submit"
              value="Please Orders Products"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
