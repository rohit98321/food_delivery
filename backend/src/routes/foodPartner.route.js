const express =require("express")
const foodPartnerController =require("../Controller/foodPartnerController")
const authMiddleware=require("../Middlewares/authMiddleware")
const router=express.Router()






router.post(
    "/register",
    foodPartnerController.foodPartnerRegisterController
  );
  router.post("/login",foodPartnerController.foodPartnerLoginController);
  router.post("/logout",foodPartnerController.foodPartnerLogoutController);
  router.get("/get",authMiddleware.partnerauthMiddleware, foodPartnerController.foodPartnerGetController);

module.exports=router