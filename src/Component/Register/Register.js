import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    
        
        const { register, handleSubmit } = useForm();
        const onSubmit = (data) => {
          
          alert("Register success");
        };
    return (
        <div className="container bg-white  Register-container my-5 shadow-lg">
      <form className="login-from" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="p-2 ">Please Register</h1>
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
          value="Register"
        />
      
        <br />

        <Link className="p-3" to="/login">
          <button
            className="border-0 bg-success bg-opacity-25"
            style={{ fontWeight: 600 }}
          >
            ALREADY REGISTERED? PLEASE LOG-IN
          </button>
        </Link>
      </form>
    </div>
    );
};

export default Register;