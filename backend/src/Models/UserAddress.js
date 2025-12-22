const mongoose=require("mongoose");



const userAddressSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    },
    houseNo:{
        type:String
    },
    street:{
        type:String,
        
    },
    area:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    pincode:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },


},{timestamps:true});

const userAddressSchemaModel=mongoose.model("userAddress",userAddressSchema);

module.exports=userAddressSchemaModel;