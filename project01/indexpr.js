const fs = require("fs");

const express = require("express");

const app = express();
const path = require("path");

const mongoose = require("mongoose");




const user = require("./data.json");

//Connection

mongoose
  .connect("mongodb://127.0.0.1:27017/ShivamApp1")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo Error", err));

//schema

const userSchema = new mongoose.Schema({
  firstName: {type: String,required: true,
  },
  lastName: {type: String,required :false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobtitle: {
    type: String,
  },

  gender: {
    type: String,
  },
});
const User = mongoose.model("user", userSchema);

app.post("/api/users",async(req,res)=>{
  const body = req.body;
  if(!body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title 
  ){
    return res.status(400).json({msg:"All fields are req..."})
  }

  const result = await User.create({
    firstName:body.first_name,
    lastName : body.last_name,
    Email:body.email,
    gender:body.gender,
    jobTitle:body.job_title

  });

  console.log(result);

  return res.status(201).json({msg:"success"})

})

const port = 8001;
app.listen(port, () => {
  console.log("Hey there local host of", port);
});



// const logFilePath = path.join(__dirname, "log.txt");
// app.use(express.urlencoded({ extended: false }));
// app.get("/api/user", (req, res) => {
//   res.setHeader("X-Name", "Shivam Tiwari");
//   return res.status(201).json(user);
// });

// app.use((req, res, next) => {
//   fs.appendFile(logFilePath, `${Date.now()}:${req.method()}:`, (err) => {
//     if (err) {
//       console.log("Error h yha", err);
//     }
//   });
//   next();
// });


// app.post("/api/users",async(req,res)=>{
//   const body = req.body;
//   if(!body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title 
//   ){
//     return res.status(400).json({msg:"All fields are req..."})
//   }

//   const result = await User.create({
//     firstName:body.first_name,
//     lastName : body.last_name,
//     Email:body.email,
//     gender:body.gender,
//     jobTitle:body.job_title

//   });

//   console.log(result);

//   return res.status(201).json({msg:"success"})

// })