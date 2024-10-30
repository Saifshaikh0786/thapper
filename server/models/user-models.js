
const mongoose=require("mongoose");
const { Schema, string, boolean } = require("zod");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phonenumber:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:boolean,
        default:false
    },
});

const User=new mongoose.model("User",UserSchema);

module.exports=User;