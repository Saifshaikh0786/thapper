


const express=require("express");
const app=express();
const port=4000;
const router=require('./router/auth-router');

app.use("/api/auth",router);





app.listen(port,()=>{
    console.log(`hello my serever is runing at port: ${port}`);
});


