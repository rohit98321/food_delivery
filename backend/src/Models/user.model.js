const mongoose = require("mongoose");

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




const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
  },
  addresses: [userAddressSchema],
},{timestamps:true});

const userModel=mongoose.model("user",userSchema)
module.exports=userModel
