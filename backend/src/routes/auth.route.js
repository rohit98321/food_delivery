const express=require("express")
const authController=require("../Controller/AuthController")

const router=express.Router()

//user Authentications
router.post("/user/register",authController.registerController)
router.post("/user/address",authController.addressController)
router.patch("/user/address/:id",authController.updateAddressController)
router.delete("/user/address/:id",authController.deleteAddressController)
router.post("/user/login",authController.loginController)
router.post("/user/logout",authController.logoutController)
router.get("/user/get",authController.getController)

//foodpartner Authentications
router.post("/foodpartner/register",authController.foodPartnerRegisterController)
router.post("/foodpartner/login",authController.foodPartnerLoginController)
router.post("/foodpartner/logout",authController.foodPartnerLogoutController)
router.get("/foodpartner/get",authController.foodPartnerGetController)






module.exports=router