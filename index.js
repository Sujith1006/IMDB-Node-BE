var app=require('express')()
var cors=require('cors')
var bodyparser=require('body-parser')
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.listen(8000,console.log("Node Started"))
app.use('/user',require('./Router/Accountroutes'))

