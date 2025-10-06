import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { asyncGetUser } from "../reduxToolKit/Actions/user.actoin";

const Nav = () => {
  const partnerdata = useSelector((state) => state.foodPartner.foodPartner);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  console.log(partnerdata);


  return (
    <nav className="flex justify-center gap-4 bg-[#1A3636] text-2xl text-[#F4F6FF] items-center">
      <NavLink className={(e) => e.isActive && "text-[#3E7B27]"} to={"/"}>
        Home
      </NavLink>

      {partnerdata && (
        <NavLink
          className={(e) => e.isActive && "text-[#3E7B27]"}
          to={"/partner/store"}
        >
          store
        </NavLink>
      )}

      {user && (
        <NavLink
          className={(e) => e.isActive && "text-[#3E7B27]"}
          to={"/user/profile"}
        >
          profile
        </NavLink>
      )}

      {!user && !partnerdata && (
        <>
        <NavLink
          className={(e) => e.isActive && "text-[#3E7B27]"}
          to={"/user/register"}
          >
          user
        </NavLink>

        <NavLink
          className={(e) => e.isActive && "text-[#3E7B27]"}
          to={"/partner/register"}
          >
          foodpartner
        </NavLink>


          </>
      )}
    </nav>
  );
};

export default Nav;
