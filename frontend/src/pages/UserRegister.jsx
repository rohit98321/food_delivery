// src/pages/UserRegister.jsx
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Animation from "../wrapers/Animation.jsx";
import { useDispatch } from "react-redux";
import { asyncUserRegister } from "../reduxToolKit/Actions/user.actoin.jsx";

const UserRegister = () => {
  const { reset,register, handleSubmit } = useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    dispatch(asyncUserRegister(data))
    navigate("/user/profile")
    
  };

  return (
    <Animation title="User Register">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("fullname")} placeholder="Full Name" className="w-full border p-2 rounded" />
        <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="w-full border p-2 rounded" />
        
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account? <Link to="/user/login" className="text-blue-500">Login</Link>
      </p>
    </Animation>
  );
};

export default UserRegister;
