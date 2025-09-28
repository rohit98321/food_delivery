const express = require("express")
const authRouter =require("./routes/auth.route")
const foodRouter=require("./routes/food.route")
const cookie_parser=require("cookie-parser")


const app=express();
app.use(cookie_parser())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/food",foodRouter)



module.exports=app