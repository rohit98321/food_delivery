// src/pages/UserLogin.jsx
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Animation from "../wrapers/Animation.jsx";
import {useDispatch} from "react-redux"
import { asyncUserLogin } from "../reduxToolKit/Actions/user.actoin.jsx";
import { asyncgetUserAddress } from "../reduxToolKit/Actions/userAddress.action.jsx";

const UserLogin = () => {
  const { register, handleSubmit } = useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const onSubmit = (data) => {
    
    dispatch(asyncUserLogin(data))
    dispatch(asyncgetUserAddress())
    navigate("/")
    
  };

  return (
    <Animation title="User Login">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="w-full border p-2 rounded" />
        
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don’t have an account? <Link to="/user/register" className="text-green-500">Register</Link>
      </p>
    </Animation>
  );
};

export default UserLogin;
