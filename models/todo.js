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
const Todo=mongoose.model('Todo',todoschema);
module.exports=Todo;