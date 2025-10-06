import {Routes, Route } from "react-router-dom";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import PartnerLogin from "../pages/PartnerLogin";
import PartnerRegister from "../pages/PartnerRegister";
import Notfound from "../pages/Notfound";
import Home from "../pages/Home";
import PartnerStore from "../pages/PartnerStore";
import UserProfile from "../pages/UserProfile";
import UserAuth from "./UserAuth";

const Mainroutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}/>

           {/* USER routes */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/profile" element={<UserAuth><UserProfile/></UserAuth>} />

           {/* partner routes */}
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/partner/store" element={<PartnerStore/>} />


          {/* PAGE NOT FOUND */}
        <Route path="*" element={<Notfound/>} />



      </Routes>
   
  )
}

export default Mainroutes