const mongoose=require('mongoose');
const bcrypt=require("bcrypt");
const validator=require("validator");
 


const Schema=mongoose.Schema;


const userSchema=new Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

});


userSchema.statics.signup= async function(email,password){


    if(!email || !password)
    {
        throw Error("All fields are required");
    }

    if(!validator.isEmail(email))
    {
        throw Error("Email is not valid")
    }

    if(!validator.isStrongPassword(password))
    {
        throw Error("Password not strong enough")
    }

    const exists=await this.findOne({email});

    if(exists) 
    {
        throw Error("Email Already Exists")
    }

    const salt=await bcrypt.genSalt(10);

    const hash=await bcrypt.hash(password,salt);

    const user=await this.create({email,password:hash})

    return user;


}



userSchema.statics.login=async function(email,password){

    if(!email || !password)
    {
        throw Error("All fields are required");
    }

    const currUser=await this.findOne({email});

    if(!currUser)
    {
        throw Error("User Not Found !");
    } 
     
    const match=await bcrypt.compare(password,currUser.password)
    
    if(!match)
    {
        throw Error("Incorrect Password");
    }

    return currUser;

}
 
module.exports=mongoose.model("user",userSchema);
