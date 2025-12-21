// src/pages/PartnerRegister.jsx
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Animation from "../../wrapers/Animation.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncPartnerRegister } from "../../reduxToolKit/Actions/partner.action.jsx";

const PartnerRegister = () => {
  const { reset, register, handleSubmit } = useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const onSubmit = (data) => {

    console.log(data);
    dispatch(asyncPartnerRegister(data))
    reset()
     navigate("/partner/login")

    

  };

  return (
    <Animation title="Food Partner Register">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Restaurant Name" className="w-full border p-2 rounded" />
        <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="w-full border p-2 rounded" />
        
        <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account? <Link to="/partner/login" className="text-purple-500">Login</Link>
      </p>
    </Animation>
  );
};

export default PartnerRegister;
