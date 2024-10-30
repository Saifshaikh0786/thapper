

const home= async (req,res)=>{
    try {
        res.send("hello this the home page is load by router called to  controller  ");
        
    } 
    catch (error) {
        res.send({msg:"home page is not found"});
    }
}

const registration=async (req,res)=>{
    console.log("hiii");
    console.log(req.body);
        try {
            res.json({message:req.body});

        } catch (error) {
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