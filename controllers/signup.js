var express = require('express')
var app = express.Router();
var model=require('../models')
app.post('/',(req,res)=>{
    // console.log(req.body)
    model.userinfo.create({username:req.body.username,Email:req.body.email,password:req.body.password})
    .then((data)=>{
        res.send(true)
    })
    .catch((err)=>{
        res.send(false)
    })

})

module.exports=app