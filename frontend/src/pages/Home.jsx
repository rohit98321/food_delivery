import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReelsPage from "./ReelsPage";

const Home = () => {
  console.log("Home mount");

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
 

  return user ? (
    <div className="bg-[#1A3636] h-screen w-full">
      <ReelsPage />
    </div>
  ) : (
    <div className="bg-[#1A3636] flex justify-center items-center h-screen">
      <p className="text-5xl font-semibold">
        Must be login!{" "}
        <span className="text-pink-800">only for user</span>
      </p>
    </div>
  );
};

export default Home;
