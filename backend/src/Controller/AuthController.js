const userModel = require("../Models/user.model");
const foodPartnerModel = require("../Models/foodPartner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const { fullname, email, password } = req.body;

  const existEmail = await userModel.findOne({ email });
  if (existEmail) {
    return res.json({
      message: "email already exist",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const user = await userModel.create({
      fullname,
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token);
    res.json({
      message: "registered successfully",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    res.json({
      message: "something is wrong",
    });
  }
};


const addressController = async(req,res)=>{
  const {area,city,phone,pincode,street,state,houseNo}=req.body;

  
}

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const isEmailExist = await userModel.findOne({ email });

  if (!isEmailExist) {
    return res.json({
      message: "email not exist",
    });
  }
  const bcryptPassword = await bcrypt.compare(password, isEmailExist.password);
  if (!bcryptPassword) {
    return res.json({
      message: "wrong password",
    });
  }

  try {
    const token = jwt.sign({ id: isEmailExist._id }, process.env.SECRET_KEY);
    res.cookie("token", token);
    res.json({
      message: "user logged in successfully",
    });
  } catch (error) {
    res.json({
      message: "somethng is wrong",
    });
  }
};

const logoutController = async (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "user logged out successfully",
  });
};

const getController=async(req,res)=>{

    const token =req.cookies.token;
    if(!token) return res.status(404).json({message:"token invalid"})
      try {
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        const user=await userModel.findById(decoded.id)

        res.status(200).json({message:"authenticated user",user})
      } catch (error) {
        res.status(404).json({message:"something is wrong"})
      }
    


}

const foodPartnerRegisterController = async (req, res) => {
  const { name, email, password } = req.body;
  const isEmailExist=await foodPartnerModel.findOne({email})
  if(isEmailExist){
    return res.status(404).json({
        message:"email alredy exist"
    })
  }

  const hashPassword=await bcrypt.hash(password,10)

  try {

    const user=await foodPartnerModel.create({
        name,
        email,
        password:hashPassword
    })

    const token=jwt.sign({id:user._id},process.env.SECRET_KEY)
    res.cookie("token",token)

    res.status(201).json({
        message:"food partner register successfully",
        user
    })
    
  } catch (error) {
    
    res.status(404).json({
        message:"something is wrong",
        error
       
    })

  }

};

const  foodPartnerLoginController = async(req,res)=>{

        const {email,password}=req.body

        const isEmailExist=await foodPartnerModel.findOne({email})
        if(!isEmailExist){
            return res.status(404).json({
                message:"invalid email id"
            })
        }

        const bcryptPassword=await bcrypt.compare(password,isEmailExist.password)
        if(!bcryptPassword){
            return res.status(404).json({
                message:"invalid password"
            })
        }

        try {
          
          const token =jwt.sign({id:isEmailExist._id},process.env.SECRET_KEY)
          res.cookie("token",token)
            
            res.status(201).json({
                message:"food partner logged in successfully",
                foodPartner:{
                    name:isEmailExist.name,
                    email:isEmailExist.email,

                }
            })

        } catch (error) {
            res.status(404).json({
                message:"something is wrong"
            })
        }

}

const foodPartnerLogoutController=async(req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"user logged out successfully"
    })
}
const foodPartnerGetController= async (req,res)=>{
    const token =req.cookies.token;
    if(!token) return res.json(404).json({message:"token not created"})


      try {
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        const foodPartner=await foodPartnerModel.findById(decoded.id)
        res.status(200).json({message:"fetch data from token",foodPartner})
      } catch (error) {
        res.status(404).json({message:"something is wrong here",error})
        
      }

}

module.exports = {
  registerController,
  loginController,
  logoutController,
  foodPartnerRegisterController,
  foodPartnerLoginController,
  foodPartnerLogoutController,
  getController,
  foodPartnerGetController,
  addressController
};
