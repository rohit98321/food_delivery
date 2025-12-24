import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncUserLogout,
  asyncGetUser,
} from "../reduxToolKit/Actions/user.actoin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddAddress from "../components/AddAddress";
import { useForm } from "react-hook-form";
import { asyncgetUserAddress } from "../reduxToolKit/Actions/userAddress.action";
import UpdateUserAddress from "../components/UpdateUserAddress";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user=useSelector((state)=>state.user.user)
  const userAddresses = useSelector((state) => state.user.user.addresses);
  console.log("user details from profile", userAddresses);
  
  
 


  const [check, setcheck] = useState(false);

  const logouthandler = () => {
    dispatch(asyncUserLogout());
    navigate("/");
  };
  console.log("UserProfile mount --> ", user._id);

  const onOff = () => {
    setcheck(!check);
  };

  console.log(check);

  const updateAddressHandler = (addressdata) => {
    console.log(addressdata);
  };

  return (
    <div>
      <h1 className="text-4xl">{user.fullname}</h1>
      <h2>{user.email}</h2>

      <button
        onClick={onOff}
        className="bg-neutral-800 rounded p-3 text-white m-2"
      >
        Add Address
      </button>

      {check && <AddAddress />}

      
    {userAddresses.map((address)=>{
     return  <UpdateUserAddress key={address._id} address={address} />
    })}



      <button
        className="bg-neutral-800 rounded p-3 text-white m-2"
        onClick={logouthandler}
      >
        logout
      </button>
    </div>
  );
};

export default UserProfile;
