const mongoose =require("mongoose");

const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
       
    
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        enum:["Admin", "User"],
        default: "User"
    }
},{
    timestamps:true
})

const UserModel = mongoose.model("Registrations",UserSchema)

module.exports = {UserModel};