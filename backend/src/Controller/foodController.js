const foodModel=require("../Models/food")
const uploadFile = require("../services/storage.service")
const {v4:uuid} =require("uuid")

const createFood=async (req,res)=>{
    const foodPartner=req.foodPartner

    const {name,description}=req.body

    const file=req.file

    const {url}= await uploadFile(file.buffer,uuid())
    
    try {
        const food=await foodModel.create({
            name,
            description,
            video:url,
            foodpartner:foodPartner._id
        })
        res.status(201).json({
            message:"created",
            food
        })
        
    } catch (error) {
        res.status(404).json({
            message:"something is wrong"
        })
    }
    
    


    
}

const getFood=async(req,res)=>{

    try {
        const fooditems=await foodModel.find()
    res.json({
        message:"fetch food itmes",
        fooditems
    })
    } catch (error) {
        
        res.json({
            message:"something is wrong"
        })
    }
    
}

module.exports={
    createFood,
    getFood
}