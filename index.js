const express = require('express');
const path =require('path');
const app=express();
const port=8016;
const db=require('./config/mongoose');

// importing the models for remaining and completed division 
const Todo=require('./models/todo');
const Todo_completed=require('./models/todo_completed');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('views'));
app.use(express.urlencoded({
    extended:true
}));

// using the routes to get the various functions associated in the app
app.use('/',require('./routes'));






app.listen(port,function(err){
    if(err)
    {
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
});