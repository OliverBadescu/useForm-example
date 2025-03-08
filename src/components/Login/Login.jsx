import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css"; 
import { login } from "../../service/userService";
import { useNavigate, Link } from 'react-router-dom';

export default function Login(){

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const onSubmit =async (data) =>{

        const request = await login(data);

        if(request.success){
            alert("Logged in succesfully");
            reset();
        }

    }

    return(

        <>

<div className="form-container">
      <h1>Login</h1>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register    ("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <Link to={'/'}>Register</Link>
        <button type="submit">Register</button>
      </form>
    </div>
        </>
    );

}