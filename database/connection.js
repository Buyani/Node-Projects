const mongoose=require("mongoose");

const DbConnection=async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/Hashdata",{
            useNewUrlParser:true,
            useUnifiedTopology: true 
        });
        console.log("Connection established sucesfully");
    }
    catch(err){
        console.log(err+" occured while trying to establish connection to database");
        process.exit(1);
    }
}

module.exports=DbConnection;