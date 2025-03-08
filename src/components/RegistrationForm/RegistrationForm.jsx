import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css"; 
import { useNavigate, Link } from 'react-router-dom';
import { registerRequest } from "../../service/userService";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {

    const userRequest = {
      "fullName": data.name,
      "email": data.email,
      "password": data.password,
      "phone": "1234567890",
      "country": "ro",
      "billingAddress": "test",
      "shippingAddress": "testshipping"
    }
    
    try{
      const request= await registerRequest(userRequest);

      if(request.status === 409){
        alert("User with this email already exists, please try a different one");
      }else{
        alert("Succesfully registred");
        reset();
      }

    }catch(err){
      alert(err);
    }
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>


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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <Link to={'/login'}>Login</Link>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

