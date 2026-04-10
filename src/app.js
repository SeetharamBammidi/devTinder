const express = require("express");

const connectDB=require("./config/database");
const UserModel=require("./models/user");

const app=express();

app.post("/signup", async(req, res)=>{
    const user= new UserModel({
        firstName:"Raghava",
        lastName:"Bammidi",
        emailId:"raghu@gmail.com",
        password:"raghu@1992"
    });
    try{
         await user.save();
         res.send("User Added Successfully!!!");
    } catch(err){
        res.status(400).send("Error saving the user"+ err.message);
    }
   
})





connectDB()
.then(() => {
    console.log("Database Connection estableshed..!");
    app.listen(3000, () => {
        console.log("Server is Succussfully listening on port 3000");
    }); 
})
.catch((err) => {
    console.log(err.message);
});

//mongodb+srv://seetharamcse:ram1992@namastenode.loc3x9y.mongodb.net/
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


// app.use("/user",(req,res,next)=>{
//     console.log("1st Route handler!");
//    next();
// },
// (req,res,next)=>{
//     console.log("2nd Route handler!");
//    next();
// },

// (req,res,next)=>{
//     console.log("3rd Route handler!");
//    next();
// },
// (req,res,next)=>{
//     console.log("4th Route handler!");
//    next();
// },
//     (req,res)=>{
//         console.log("5th Route handler!");
//         res.send("5th Response");
//     }
// )

//const {adminAuth}=require("./middlewares/auth");
// app.use("/admin",(req,res,next)=>{
//     const token="xyz";
//     const isAdminAuth=token ==="xyz";
//     if(!isAdminAuth){
//         res.status(401).send("Unauthorized User..!");
//     } else {
//         console.log("Admin Auth")
//        next();
//     }
// })

// app.use("/admin",adminAuth);
// app.use("/admin",(req,res,next)=>{
//      console.log("Admin Auth Checking...!");
//     next();
//     }
// )

// app.use("/admin",adminAuth,(req,res,next)=>{
//     console.log("Admin Auth Checking...!");
//     next();
// })

// app.get("/admin/getAllData",(req,res,next)=>{
//     console.log("getALLData")
//      res.send("All Data Sent");
// });

// app.get("/admin/deleteData", (req,res)=>{
//     console.log("get Delete data")
//     res.send("Deleted record..!");
// })





// app.listen(3000,()=>{
//     console.log("Server is Succussfully listening on port 3000");
// })