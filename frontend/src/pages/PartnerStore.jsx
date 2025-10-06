import React from "react";
import { useDispatch } from "react-redux";
import { asyncPartnerLogout } from "../reduxToolKit/Actions/partner.action";
import { useNavigate } from "react-router-dom";


const PartnerStore = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        dispatch(asyncPartnerLogout())
        navigate("/")
    }
  return (
    <div>
      <button
      onClick={logoutHandler}
       className="bg-red-400 p-2 rounded m-3">logout</button>
    </div>
  );
};

export default PartnerStore;
