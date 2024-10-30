

const express=require("express");
const router=express.Router();
const authcontrollers=require("../controllers/auth-controllers");





router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.registration);


router.route("/signup").get(authcontrollers.signup);

router.route("/signin").get(authcontrollers.signin);

router.route("/contact").get(authcontrollers.contact);


module.exports=router;