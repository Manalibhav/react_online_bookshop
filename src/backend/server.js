const express=require('express')
const app=express();
const mongoose=require('mongoose')
const routeUrls=require('./routes/routes')
const cors=require('cors')


mongoose.connect('mongodb://localhost:27017/user', function(err, response){
    if(err){ console.log('Failed to connect to '); }
    else{ console.log('Connected to db '); }
 });

 app.use(express.json())
 app.use(cors())
 app.use('/app',routeUrls)
app.listen(4000,()=>console.log("SERVER IS RUNNING"))