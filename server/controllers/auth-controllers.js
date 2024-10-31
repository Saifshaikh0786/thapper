const User=require("../models/user-models");
const bcrypt=require("bcryptjs");



const home= async (req,res)=>{
    try {
        res.send("hello this the home page is load by router called to  controller  ");
        
    } 
    catch (error) {
        res.send({msg:"home page is not found"});
    }
}

const registration=async (req,res)=>{
    
        try {
            const {username,email,phone,password}=req.body;

            const userExist= await User.findOne({email});

            if(userExist){
                return res.json({message:"email already exist "});
            }

            // hashimg password
            const saltRound=10;
            const hash_password=await bcrypt.hash(password,saltRound);

            const usercreated=await User.create({
                username,
                email,
                phone,
                password:hash_password,
            });
            
            res.json({message:usercreated,token:await  usercreated.generateToken(),
                userId:usercreated._id.toString(),
            });


        } 
        catch (error) {
            res.json({msg:"registration page not found server issue "});
        }
    
}

const signup=async(req,res)=>{
    try {
        res.send("this is the sogn up page called by router to controller ")
    } catch (error) {
        res.send({msg:"sign up not found "});
    }
}

const signin=async(req,res)=>{
    try {
        res.send("this is the sign in page caleed by router to the controller ");
    } catch (error) {
        res.send({msg:"signin page not found"});
    }
}

const contact=async(req,res)=>{
    try {
        res.send("this is the contact [page called by router to the controlllers");
    } catch (error) {
        res.send("contact page not found ");
    }
}

module.exports={home,registration,signup,signin,contact};