

const home= async (req,res)=>{
    try {
        res.send("hello this the home page is load by router called to  controller  ");
        
    } 
    catch (error) {
        res.send({msg:"home page is not found"});
    }
}

const registration=async(req,res)=>{
        try {
            res.send("this is the regitration page called by router to controller");

        } catch (error) {
            res.send({msg:"registration page not found "});
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