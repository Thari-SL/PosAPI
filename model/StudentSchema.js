const mongoose=require('mongoose');
const StudentSchema=new mongoose.Schema({
    regNum:{type:String,required:true},
    fName:{type:String,required:true},
    lName:{type:String,required:true},
    address:{type:String,required:true},
    birthdate:{type:Date,required:true},
    idNum:{type:String,required:true},
    degree:{type:String,required:true}
    }
);
module.exports=mongoose.model('Student',StudentSchema);