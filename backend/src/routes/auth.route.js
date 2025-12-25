const express = require("express");
const authController = require("../Controller/AuthController");
const authMiddleware = require("../Middlewares/authMiddleware");

const router = express.Router();

//user Authentications
router.post("/user/register", authController.registerController);
router.post(
  "/user/address",
  authMiddleware.userauthMiddleware,
  authController.addressController
);
router.get("/user/address/:id", authController.getAddressController);


router.patch(
  "/user/address/:id",
  authMiddleware.userauthMiddleware,
  authController.updateAddressController
);
router.delete("/user/address/:id",
 authMiddleware.userauthMiddleware,
 authController.deleteAddressController);
router.post("/user/login", authController.loginController);
router.post("/user/logout", authController.logoutController);
router.get("/user/get", authController.getController);

//foodpartner Authentications


module.exports = router;
