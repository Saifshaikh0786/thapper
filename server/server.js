


const express=require("express");
const app=express();
const port=4000;
const router=require('./router/auth-router');
const { json } = require("body-parser");
const connectDb=require("./utils/db");
const validate=require("./middleware/validate-middleware-zod");
const errormiddleware = require("./middleware/error-middleware");
const signinSchema=require("./validator/signin-zod");

app.use(express.json());

app.use("/api/auth",router);

app.use(errormiddleware);


connectDb().then(()=>{
    
    app.listen(port,()=>{
        console.log(`hello my serever is runing at port: ${port}`);
    });

});


