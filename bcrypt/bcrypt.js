const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const Schema=require("./Schema")
mongoose.connect('mongodb://127.0.0.1:27017/Bcrypt')
.then(()=>{
    console.log("database is connecetd");
})
.catch(()=>{
    console.log("database is not connecetd");
})
//middleware
app.use(express.urlencoded({extended:false}))

// signup the password in bcrypt
app.post('/Signup',async(req,res)=>{
    const details =new Schema({
        ...req.body,
        password:bcrypt.hashSync(req.body.password,10)  // hasing the password
    })
 const{email}=req.body
 const existing=await Schema.findOne({email})  
 if(existing){
    return res.json("Email already Exist")
 } 
 await details.save()
 .then(()=>{
    console.log("details Saved");
})
.catch(()=>{
    console.log("!details Saved");
})
//  res.json('Signup Sucessfully')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    
})
// app.post('/Login',async(req,res)=>{
//     const {email,Password}=req.body   // nama kudukura email via postman
//      const exist=await Schema.findOne({email})   //idhu vanthu already signup la kudutha email
//      if(!exist){
//         res.json("Email is Invalid")
//      }
//      const verifyPassword=await Schema.findOne({Password})

// })


app.listen(1001,()=>{
    console.log("Server is running:1001");
})