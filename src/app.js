const express=require("express");

const app=express();

app.get("/",(req,res)=> {
    res.send("Hello from the Dashboard..!");
    
});

app.get("/hello",(req,res)=> {
    res.send("Hello hello hello..!");
});

app.get("/test",(req,res)=> {
    res.send("Hello From the Test Server..!");
});




app.listen(3000,()=>{
    console.log("Server is Succussfully listening on port 3000");
})