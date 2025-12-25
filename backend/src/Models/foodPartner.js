const mongoose = require("mongoose");




const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipCode: Number,
    phone:Number
}, { _id: false }); 


const foodPartnerSchema = new mongoose.Schema({
    shopName:{
        type:String,
        requiere:true
    },
    ownerName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String
    },
    address:addressSchema
},{timestamps:true})

const foodPartnerModel=mongoose.model("foodPartner",foodPartnerSchema)
module.exports=foodPartnerModel