import React from "react";
import './Reviews.css'
import { useForm } from "react-hook-form";

const ReviewInput = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("successful Add reviews");
        }
      });
  };
  return (
    <div className=" container  review-header">
        <h2>Please Give Your Review</h2>
      <form className="review-from" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 p-2 input-btn shadow"
          {...register("name")}
          placeholder="Write your name"
        />
        <input
          className="input-btn p-2 shadow"
          {...register("email")}
          placeholder="Write your email"
        />
        <textarea
          className="mt-3 input-btn p-2 shadow"
          {...register("text")}
          placeholder="Write your "
        />
        <br />

        <input
          className="btn-submit bg-primary text-white input-btn shadow rounded-pill p-2 fs-5 border border-secondary"
          type="submit"
          value="Please Give Your Review"
        />
      </form>
    </div>
  );
};

export default ReviewInput;
