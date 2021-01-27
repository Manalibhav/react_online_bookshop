const { request, response } = require('express')
const express=require('express');
const { Mongoose } = require('mongoose');
const router=express.Router()
const signUpTemplateCopy=require('../Models/signupmodels')

router.post('/signup',(request,response)=>{
   const signedUpuser=new signUpTemplateCopy({
       userName:request.body.userName,
       emailid:request.body.emailid,
       mobileno:request.body.mobileno,
       password:request.body.password
   })        
   signedUpuser.save().then(data=>{
    response.json(data)
}).catch(error=>{
    response.json(error)
})
})
router.get('/api', (req, res) => {

    signUpTemplateCopy.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});
module.exports=router


module.exports=router

