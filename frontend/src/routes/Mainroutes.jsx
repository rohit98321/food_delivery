import {Routes, Route } from "react-router-dom";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import PartnerLogin from "../pages/foodPartner/PartnerLogin";
import PartnerRegister from "../pages/foodPartner/PartnerRegister";
import Notfound from "../pages/Notfound";
import Home from "../pages/Home";
import PartnerStore from "../pages/foodPartner/PartnerStore";
import UserProfile from "../pages/UserProfile";
import UserAuth from "./UserAuth";
import CreateFood from "../pages/foodPartner/CreateFood";
import ProductVideo from "../pages/ProductVideo";
import SingleFood from "../pages/foodPartner/SingleFood";

const Mainroutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}/>

           {/* USER routes */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/productvideo" element={<ProductVideo/>} />

        <Route path="/user/profile" element={<UserAuth><UserProfile/></UserAuth>} />

           {/* partner routes */}
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/partner/store" element={<PartnerStore/>} />
        <Route path="/partner/create/food" element={<CreateFood/>} />

         {/* partner routes */}
        <Route path="/food/singlefood/:id" element={<SingleFood/>} />


          {/* PAGE NOT FOUND */}
        <Route path="*" element={<Notfound/>} />



      </Routes>
   
  )
}

export default Mainroutes