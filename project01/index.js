const express = require("express");
const users = require("./data.json");

const app = express(); 

const port =8000;
const fs =require('fs');


//middleware plugin (used to insert data in the database)
app.use(express.urlencoded({extended:false}));

//Routes

app.get('/api/users', (req,res)=>{
    return res.json(users);
});

app.use((req,res,next)=>{

   fs.appendFile(("log.txt",`${Date.now()}: ${req.method()}:\n`,(err)=>{if(err){
    console.log("Error writing a log file:",err);
   }
}))
next();
})
// app.get("/users/first_name",(req,res)=>{
//     const html = `
//     <ul>
//         ${users.map((users)=>`<li>${users.first_name}</li>`)}
//     </ul>
// `;
//     res.send(html);
// })

// app.get('/users/id',(req,res)=>{
//     const html1 =`
//     <ul> 
//     ${users.map((users)=>`<li>${users.id}</li>`)}
//     `;

//     res.send(html1);
// });

// app.get('/api/users/:id',(req,res)=>{
// const id = req.params.id;
// const user =users.find((user)=> user.id === id);
// return res.json(user);
// });



// //POST request

// app.post('/api/users/:id',(req,res)=>{
//     const body = req.body;
//     users.push({id:users.length+1,...body});
//     fs.writeFile('./data.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status:"Success",id:users.length+1});
//     })

//     return res.json({status:"pending"})
// });

// app.patch('/api/users/:id',(req,res)=>{
//     return res.json({status:"pending"})
// })

// app.delete('/api/users/:id',(req,res)=>{
//     return res.json({status:"pending"})
// })

app.listen(port,()=>{
    console.log("Hey there");
});





// app.route("/api/users/:id").get((req,res)=>{}).post((req,res)=>{}).patch((req,res)=>{}).delete((req,res)=>{

//     return res.json({status:"Pending"})
// });