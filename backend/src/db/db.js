const mongoose =require("mongoose")

const connectDb = ()=>{
    console.log("process env",process.env.MONGODB_URL);
    mongoose.connect(process.env.MONGODB_URL).then(()=>{

        console.log("database connected successfully");
    }).catch((error)=>{
        console.log("connection failed", error.message);
    })
} 

module.exports=connectDb