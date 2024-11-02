

const errormiddleware=(err,req,res,next)=>{
    const status= err.status || 500;
    const message=err.message || "BACKEND ERROR";
    const extradetail=err.extradetail || "BACKEND ERROR";
     
    return res.json({message,extradetail});


};

module.exports=errormiddleware;