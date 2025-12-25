const foodPartnerModel = require("../Models/foodPartner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const foodPartnerRegisterController = async (req, res) => {
  const {
    shopName,
    ownerName,
    email,
    password,
    street,
    city,
    state,
    zipCode,
    phone,
  } = req.body;

  console.log("foodPartnerRegisterController -->", req.body);

  try {
    const isEmailExist = await foodPartnerModel.findOne({ email });
    if (isEmailExist) {
      return res.status(404).json({
        message: "email alredy exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await foodPartnerModel.create({
      shopName,
      ownerName,
      email,
      password: hashPassword,
      address: {
        street,
        city,
        state,
        zipCode,
        phone,
      },
    });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token);

    res.status(201).json({
      message: "food partner register successfully",
      user,
    });
  } catch (error) {
    res.status(404).json({
      message: "something is wrong",
      error,
    });
  }
};

const foodPartnerLoginController = async (req, res) => {
  const { email, password } = req.body;
  console.log("foodPartnerLoginController -->", req.body);

  const isEmailExist = await foodPartnerModel.findOne({ email });
  if (!isEmailExist) {
    return res.status(404).json({
      message: "invalid email id",
    });
  }

  const bcryptPassword = bcrypt.compare(password, isEmailExist.password);
  if (!bcryptPassword) {
    return res.status(404).json({
      message: "invalid password",
    });
  }

  try {
    const token = jwt.sign({ id: isEmailExist._id }, process.env.SECRET_KEY);
    res.cookie("token", token);

    res.status(201).json({
      message: "food partner logged in successfully",
      foodPartner: {
        name: isEmailExist.name,
        email: isEmailExist.email,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: "something is wrong",
    });
  }
};

const foodPartnerLogoutController = async (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "user logged out successfully",
  });
};
const foodPartnerGetController = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json(404).json({ message: "token not created" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const foodPartner = await foodPartnerModel.findById(decoded.id);
    res.status(200).json({ message: "fetch data from token", foodPartner });
  } catch (error) {
    res.status(404).json({ message: "something is wrong here", error });
  }
};

module.exports = {
  foodPartnerRegisterController,
  foodPartnerLoginController,
  foodPartnerLogoutController,
  foodPartnerGetController,
};
