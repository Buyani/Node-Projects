const express=require("express");
const bcrypt=require("bcrypt");
const route=express.Router();
const Account=require("../models/Account");



route.post('/',(req,res)=>
{
    try{
        if(!req.body) return res.status(400).json({message:"account body can not be null"})

        bcrypt.genSalt().then(salt=>{
            bcrypt.hash(req.body.password,salt).then(hash=>{
    
                const account={
                    email:req.body.email,
                    password:hash
                };
                Account.save(account)
    
            })
        })
        res.status(200).json({message:"account has been created and protected"})
    }
    catch(err){
        return res.status(200).json({message:"account has been created and protected"})
    }
})


module.exports=route;