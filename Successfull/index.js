const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/userRoutes");
const port =8000;

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/MyServer").then(()=>{console.log("Server connected to MOngoDb")}).catch(err=>{
    console.log('error occured ',err)
});



app.use(userRoute);





app.listen(port,()=>{
    console.log(`Server started at ${port}`)
});