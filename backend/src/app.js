const express = require("express")
const authRouter =require("./routes/auth.route")
const foodRouter=require("./routes/food.route")
const foodPartnerRouter=require("./routes/foodPartner.route")

const cookie_parser=require("cookie-parser")
const cors=require("cors")


const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookie_parser())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/food",foodRouter)
app.use("/foodPartner",foodPartnerRouter)



module.exports=app