const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/TODOapp_db');
const db = mongoose.connection;
db.on('error',console.error.bind("Error on connecting"));
db.once('open',function(){
    
    console.log("Successfully connected to server mongodb")
});
