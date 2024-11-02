

const express=require("express");
const router=express.Router();
const authcontrollers=require("../controllers/auth-controllers");
const signupSchema=require("../validator/zod-auth");
const validate=require("../middleware/validate-middleware-zod");
const signinSchema=require("../validator/signin-zod");





router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(signupSchema),authcontrollers.registration);


router.route("/signup").get(authcontrollers.signup);

router.route("/signin").post(validate(signinSchema),authcontrollers.signin);

router.route("/contact").get(authcontrollers.contact);


module.exports=router;