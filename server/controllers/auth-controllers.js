const User=require("../models/user-models");
const bcrypt=require("bcryptjs");
const signinSchema=require("../validator/signin-zod");


// everything will be done here   

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
            const hash_password=await bcrypt.hash(password,10);

            const usercreated=await User.create({
                username,
                email,
                phone,
                password:hash_password,
            });
            
            res.json({
                message:"registration succesfull",
                token:await  usercreated.generateToken(),
                userId:usercreated._id.toString(),
            });


        } 
        catch (error) {
            next(error);
            // res.json({msg:"registration page not found server issue "});
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
       const {email,password}=req.body;
       const userExist=await User.findOne({email});

       if(userExist){
        const ismatch=await bcrypt.compare(password,userExist.password);
                if(ismatch){
                    res.json({message:"login successfulyy"});
                        }
               else{
                    res.json({message:"invalid passowrd"});
                        }
    }
    
    else{
        res.json({message:"user does not exist"});
    }
    } 
    catch (error) {
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