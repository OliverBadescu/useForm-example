import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css"; 

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
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

        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

