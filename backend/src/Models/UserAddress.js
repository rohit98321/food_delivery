const mongoose=require("mongoose");



const userAddressSchema=new mongoose.Schema({
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
    isDefault:{
        type:Boolean,
        default:false,
    }


},{timestamps:true});

const userAddressSchemaModel=mongoose.model("userAddress",userAddressSchema);

module.exports=userAddressSchemaModel;