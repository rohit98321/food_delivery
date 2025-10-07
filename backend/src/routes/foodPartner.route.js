const express =require("express")
const foodPartnerController =require("../Controller/foodPartnerController")
const authMiddleware=require("../Middlewares/authMiddleware")
const router=express.Router()




router.get("/:id",authMiddleware.userauthMiddleware,foodPartnerController.getFoodPartner)

module.exports=router