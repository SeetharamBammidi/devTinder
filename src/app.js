const express = require("express");

const app=express();


//This will handle only GET call to /user
// app.get("/user", (req,res)=>{
//     res.send({firstName:"Ram",lastName:"Bammidi"});
// });

//Saving data to DB
// app.post("/user",(req,res)=>{
//     res.send("Data saved Successfully to Database");
// });

// app.delete("/user",(req,res)=>{
//     res.send("Deleted Successfully!!");
// });

// app.get("/hello",(req,res)=> {
//     res.send("Hello hello hello..!");
// });

// app.get("/test",(req,res)=> {
//     res.send("Hello From the Test Server..!");
// });

// app.get("/",(req,res)=> {
//     res.send("Hello from the Dashboard..!");
    
// });


app.use("/user",(req,res,next)=>{
    console.log("1st Route handler!");
   next();
},
(req,res,next)=>{
    console.log("2nd Route handler!");
   next();
},

(req,res,next)=>{
    console.log("3rd Route handler!");
   next();
},
(req,res,next)=>{
    console.log("4th Route handler!");
   next();
},
    (req,res)=>{
        console.log("5th Route handler!");
        res.send("5th Response");
    }
)


app.listen(3000,()=>{
    console.log("Server is Succussfully listening on port 3000");
})