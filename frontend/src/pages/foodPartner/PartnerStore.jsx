import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPartnerLogout } from "../../reduxToolKit/Actions/partner.action";
import { Links, NavLink, useNavigate } from "react-router-dom";
import { asyncGetPatnerAllFood } from "../../reduxToolKit/Actions/food.action";
import FoodCard from "../../components/FoodCard";



const PartnerStore = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        dispatch(asyncPartnerLogout())
        navigate("/")
    }

    useEffect(() => {
  
      dispatch(asyncGetPatnerAllFood())
      
    }, [])

    const user=useSelector((state)=>state.user.user)
    const {partnerFoods}=useSelector((state)=>state.food)
    console.log("partner foods",partnerFoods);

    const render=partnerFoods?.map((food)=>(
      <div key={food._id} ><FoodCard food={food}  /> </div>
    ))
    
    


    
  return (
    <div className="">
      { !user && <div>
     <button
      onClick={logoutHandler}
      className="bg-red-400 p-2 rounded m-3">logout</button>
      
      <NavLink className="bg-green-400 p-2 rounded m-3" to={"/partner/create/food"} >create</NavLink>
     </div>}




      <h1 className="text-3xl text-green-800 uppercase">products</h1>
      <div className="flex gap-3 p-3">
      {render}

      </div>


    </div>
  );
};

export default PartnerStore;
