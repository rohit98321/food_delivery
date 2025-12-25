const jwt=require("jsonwebtoken");
const foodpartner = require("../Models/foodPartner");
const userModel=require("../Models/user.model")


const partnerauthMiddleware=async (req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        res.json({
            message:"first you have to login"
        })
    }

    try {
        const decode=jwt.verify(token,process.env.SECRET_KEY)
        console.log(decode.id);
        const foodPartner=await foodpartner.findOne({_id:decode.id})
        req.foodPartner=foodPartner
        next()
    } catch (error) {
        return res.json({
            message:"token does not match"
        })
    }
   
}


const userauthMiddleware =async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.json({
            message:"please login first"
        })
    }

    try {
       
        const decode=jwt.verify(token,process.env.SECRET_KEY)
        const user=await userModel.findById(decode.id)
        req.user=user;
        next()
    } catch (error) {
        return res.json({
            message:"token does not match"
        })
    }


}

module.exports={
    partnerauthMiddleware,
    userauthMiddleware
}