import React, { useEffect } from "react";


const Home = () => {
  console.log("Home mount");

 

 
 

  return(
    <div className="bg-[#1A3636] flex justify-center items-center h-screen">
      <p className="text-5xl font-semibold">
        Must be login!{" "}
        <span className="text-pink-800">only for user</span>
      </p>
    </div>
  );
};

export default Home;
