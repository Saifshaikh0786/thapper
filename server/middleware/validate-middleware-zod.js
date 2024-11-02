const { Schema } = require("zod");


const validate=(Schema)=>async(req,res,next)=>{
    try {
        const parseBody=await Schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (error) {
        res.json({message:"please fill the feilds correctly with rerquired data"})
    }
}

module.exports=validate;