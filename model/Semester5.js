const mongoose=require('mongoose');
const Semester5Schema=new mongoose.Schema({
        regNum:{type:String,required:true},
        subject1:{type:Boolean,required:true},
        subject2:{type:Boolean,required:true},
        subject3:{type:Boolean,required:true},
        subject4:{type:Boolean,required:true},
        subject5:{type:Boolean,required:true},
        subject6:{type:Boolean,required:true},
        subject7:{type:Boolean,required:true},
        subject8:{type:Boolean,required:true},
        subject9:{type:Boolean,required:true}
    }
);
module.exports=mongoose.model('Semester5',Semester5Schema);