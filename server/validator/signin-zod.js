
const {z}=require("zod");

const signinSchema=z.object({
    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({email:"fill the email correctly"}),

    password:z
    .string({required_error:"please fill the password"})
    .trim()
    .min(7,{message:"passowrd must be min of 7 chars"})
    .max(1024,{message:"password max length must be of 1024 chars"}),

});

module.exports=signinSchema;