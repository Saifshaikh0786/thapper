
const mongoose=require("mongoose");
const { Schema, string, boolean } = require("zod");
const jwt=require("jsonwebtoken");
const JWT_KEY="saifsidkmlxmxkdique";


const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
});

UserSchema.methods.generateToken= async function(){
        try {
          return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
          },
          process.JWT_KEY,{
            expiresIn:"30d"
          }
        ); 

        }
        catch (error) {
            console.log(error);
        }
}

const User=new mongoose.model("User",UserSchema);

module.exports=User;