
const Todo=require('../models/todo')
const Todo_completed=require('../models/todo_completed')

var todo;var todo1;

// this is to render the home page n fetch the contents of the databases
module.exports.home=function(req,res){
    
        Todo.find({},function(err,c){
            if(err){
                console.log("lol");
                return;
            }
            Todo_completed.find({},function(err,r){
                if(err){
                    return;
                }
                todo=c;
                todo1=r;
                return res.render('home',{title:"",Todo_database:c,Todo_completed_database:r,success:""});
            })
            
    
    
        })
        
    };
// this function adds to the todo database i.e. remaining section
 module.exports.add=function(req,res){
        
        console.log(req.body);
        if(req.body.description=="" || req.body.dropdown=="" || req.body.date=="" )
        {
            console.log("entered");
           return res.redirect('/');
        }
        Todo.create({
            task:req.body.description,
            status:true,
            category:req.body.dropdown,
            date:req.body.date
        },function(err,newtodo){
            if(err)
            {
               throw err;
    
            }
            console.log('********',newtodo);
           
            return res.render('home',{title:"",Todo_database:todo,Todo_completed_database:todo1,success:"Added successfully"});
            
            
        })
    };
// this function for deleting from the todo database and adding it to the completed database
module.exports.delete=function(req,res){
        let c = req.query.checkbox;
        if(c==undefined){
            return res.render('home',{title:"",Todo_database:todo,Todo_completed_database:todo1,success:"select to delete"});
        }
        
      //console.log(Object.keys(req.query.checkbox).length);
     Todo.findOne({_id:c},function(err,result){
         if(err){
             return;
         }
         else{
            Todo_completed.create({
                task:result.task,
            status:true,
            category:result.category,
            date:result.date
        },function(err,newtodo){
            if(err)
            {
                console.log("error in creating contact")
                return;
    
            }
            console.log('********',newtodo);
            
        })

            
         }

     });
     
      if(typeof c ==="object"){
          console.log("yes");

          for(let i =0;i<c.length;i++)
          {
              Todo.findByIdAndDelete(c[i],function(err){
                  if(err)
                  {
                     return;
                  }
                  
              })
          }
        }
        else{
        Todo.findByIdAndDelete(c,function(err){
            if(err)
            {
               return;
            }
            
        })
    }
return res.render('home',{title:"",Todo_database:todo,Todo_completed_database:todo1,success:"deleted"});
};
// this function is for ok button ans it redirects back to homepage where one can see the changes
module.exports.ok=function(req,res)
{
    
 return res.redirect('/');
}

