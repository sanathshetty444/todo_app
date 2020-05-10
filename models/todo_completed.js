const mongoose=require('mongoose');
const todoschema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true

    }
});
//model is for making collections
const Todo_completed=mongoose.model('Todo_completed',todoschema);
module.exports=Todo_completed;