

const mongoose=require("mongoose");
const URI="mongodb+srv://bokaisnotboka12345:UtJzRNtKNHFIhRt1@cluster0.n1nsw.mongodb.net/thapper_mern_admin?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URI);

const connectDb = async(req,res)=>{
    try {
        await mongoose.connect(URI);
        console.log("connected successfully to database");

    } catch (error) {
        res.send("eroor while connecting to the databse");
        process.exit(0);
    }
}

module.exports=connectDb;

