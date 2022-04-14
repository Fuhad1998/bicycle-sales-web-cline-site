import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import CircularProgress from '@mui/material/CircularProgress'
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const {loginUser, isloding} = useAuth();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
    alert("Register success");
  };
  return (
    <div className="container bg-white  login-container my-5 shadow-lg">
      { ! isloding && <form className="login-from" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="p-2 ">Please Log in</h1>
        <input
          className="input-btn p-2 rounded"
          {...register("email")}
          placeholder="Write your email"
          type="email"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          {...register("password")}
          placeholder="Write your password"
          type="password"
        />
        <br />
        <input
          className="btn-submit input-btn btn btn-primary login-bac-color text-white fs-5 rounded"
          type="submit"
          value="Login"
        />
        <br />
        <button  className="btn-submit input-btn btn btn-primary login-bac-color text-white fs-5 rounded ">
          Google Sign-in
        </button>
        <br />

        <Link className="p-3" to="/register">
          <button
            className="border-0 bg-success bg-opacity-25"
            style={{ fontWeight: 600 }}
          >
            NEW USER? PLEASE REGISTER
          </button>
        </Link>
      </form>}
      {isloding && <CircularProgress />}
    </div>
    
  );
};

export default Login;
