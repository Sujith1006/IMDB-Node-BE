var express = require('express')
var app = express.Router();
var model=require('../models')
app.post('/',(req,res)=>{
    console.log(req.body)
    model.userinfo.findOne({where:{Email:req.body.email,password:req.body.password}})
        .then((result) => {
            // console.log(result)  
        if(result==null)
        {
        res.send("Error")
        }
        else {
            res.send(result)
            }
          
})
})
module.exports=app;