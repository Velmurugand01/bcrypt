const mongoose=require('mongoose')

const validation=new mongoose.Schema({
    email:String,
    Password:String
})
mongoose.model("bcrypt",validation)