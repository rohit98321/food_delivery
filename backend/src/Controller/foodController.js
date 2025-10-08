const foodModel=require("../Models/food")
const uploadFile = require("../services/storage.service")
const {v4:uuid} =require("uuid")

const createFood=async (req,res)=>{
    const foodPartner=req.foodPartner

    const {title,description,price,currency}=req.body



    const poster=req.files["poster"][0];
    const video=req.files["video"][0];

    if(!poster || !video){
        res.status(404).json({
            message:"please files"
        })
    }
    console.log("poster -->",poster);
    console.log("video -->",video);
   

    const videoData= await uploadFile(video.buffer,uuid())
    const posterData= await uploadFile(poster.buffer,uuid())
    
    try {
        const food=await foodModel.create({
            title,
            description,
            price,
            currency,
            poster:posterData.url,
            video:videoData.url,
            foodpartner:foodPartner._id
        })
        res.status(201).json({
            message:"created",
            food
        })
        
    } catch (error) {
        res.status(404).json({
            message:"something is wrong",
            error
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

const getFoodById=async(req,res)=>{

    const {id}=req.params
    console.log(id)

    try {
        const fooditems=await foodModel.find({foodpartner:id})
    res.status(200).json({
        message:"fetch food itmes",
        fooditems
    })
    } catch (error) {
        
        res.status(404).json({
            message:"something is wrong",
            error
        })
    }
    
}


const getPartnerFoods=async(req,res)=>{

    const foodpartner=req.foodPartner
    console.log(foodpartner);
    
    
    
    try {
        const fooditems=await foodModel.find({foodpartner:foodpartner._id})
        res.status(200).json({message:"fetch all data",fooditems})
    } catch (error) {
        res.status(404).json({message:"somethng is wrong"})
    }
}


module.exports={
    createFood,
    getFood,
    getFoodById,
    getPartnerFoods
}