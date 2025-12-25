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

// router.get("/getall",authMiddleware.userauthMiddleware,foodController.getFood)
// router.get("/getall/:id",authMiddleware.userauthMiddleware,foodController.getAllFoodById)

router.get("/singleProduct/:id",authMiddleware.partnerauthMiddleware,foodController.singleFood)
router.get("/getbyId",authMiddleware.partnerauthMiddleware,foodController.getPartnerFoods)
router.patch("/update/:id",authMiddleware.partnerauthMiddleware,foodController.updateFood)



module.exports=router