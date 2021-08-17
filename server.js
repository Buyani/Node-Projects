const express=require("express");
const DbConnection=require("./database/connection");
const router=require("./routes/hashroute");
const app=express();


DbConnection();

app.listen(4000,()=>{
    console.log("Server started !!!");
})
app.use('/',router);
