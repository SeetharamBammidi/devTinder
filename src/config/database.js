const mongoose=require("mongoose");

const connectDB = async ()=> {
   // await mongoose.connect("mongodb+srv://seetharamcse:ram1992@namastenode.loc3x9y.mongodb.net/admin");
await mongoose.connect("mongodb://seetharamcse:ram1992@ac-kb62tvv-shard-00-00.loc3x9y.mongodb.net:27017,ac-kb62tvv-shard-00-01.loc3x9y.mongodb.net:27017,ac-kb62tvv-shard-00-02.loc3x9y.mongodb.net:27017/?ssl=true&replicaSet=atlas-ts1yxn-shard-0&authSource=admin&appName=NamasteNode");
};

module.exports=connectDB;