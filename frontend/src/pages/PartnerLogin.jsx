// src/pages/PartnerLogin.jsx
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Animation from "../wrapers/Animation.jsx";
import { useDispatch } from "react-redux";
import { asyncPartnerLogin } from "../reduxToolKit/Actions/partner.action.jsx";

const PartnerLogin = () => {
  const {reset, register, handleSubmit } = useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const onSubmit = (data) => {
    dispatch(asyncPartnerLogin(data))
    reset()
    navigate("/")
  };

  return (
    <Animation title="Food Partner Login">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="w-full border p-2 rounded" />
        
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don’t have an account? <Link to="/partner/register" className="text-red-500">Register</Link>
      </p>
    </Animation>    
  );
};

export default PartnerLogin;
