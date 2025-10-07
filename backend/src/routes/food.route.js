const express=require("express")
const authMiddleware=require("../Middlewares/authMiddleware")
const foodController=require("../Controller/foodController")
const multer=require("multer")


const router=express.Router()
const upload = multer({storage:multer.memoryStorage()});

router.post("/create",authMiddleware.partnerauthMiddleware, upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "video" ,  maxCount: 1},
  ]),foodController.createFood)

router.get("/getall",authMiddleware.userauthMiddleware,foodController.getFood)


module.exports=router