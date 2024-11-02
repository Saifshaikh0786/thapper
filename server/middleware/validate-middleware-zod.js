const { Schema } = require("zod");


const validate=(Schema)=>async(req,res,next)=>{
    try {
        const parseBody=await Schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const message=err.errors[0].message;
        res.json({msg:message})
    }
}

module.exports=validate;