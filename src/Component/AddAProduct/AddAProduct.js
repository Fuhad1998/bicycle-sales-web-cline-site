import React from "react";
import { useForm } from "react-hook-form";
import './AddAProduct.css'

const AddAProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      fetch("https://hidden-refuge-86930.herokuapp.com/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              alert("successful Add A Product");
            }
          });
  };
  return (
    <div>
      <h1 className="text-center p-3">Add-A-Product</h1>
      <form className="product-from" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-btn p-2"
          {...register("name")}
          placeholder="Write product name"
          type="name"
        />
        <br />
        <input
          className="input-btn p-2"
          {...register("text")}
          placeholder="Write description"
          type="text"
        />
        <br />
        <input
          className="input-btn p-2"
          {...register("img")}
          placeholder="Write imgUrl"
          type="text"
        />
        <br />
        <input
          className="input-btn"
          {...register("number")}
          placeholder="Write product price p-2"
          type="number"
        />
        <br />
        <input
          className="btn-submit mb-4 input-btn p-2 rounded-pill bg-primary border border-secondary text-white fs-5"
          type="submit"
          value="Please Add product"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
