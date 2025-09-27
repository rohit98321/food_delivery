require("dotenv").config()
const app =require("./src/app")

const connectDb=require("./src/db/db")

connectDb()



    app.get("/" ,(req,res)=>{
        res.send("hello world")
    })


app.listen(3000, ()=>{
    console.log("server running on port 3000");
})



