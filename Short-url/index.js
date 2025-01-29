const express = require("express");
const {connectToMongoDB}= require("./connect")
const urlRoute = require("./routers/url")
const path = require("path")
const port = 7860;
const Url = require("./data.json");
const UFR = require("./models/url")
const app = express();
const staticRoute = require('./routers/staticRouter')
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine',"ejs");
app.set('views',path.resolve("./views"));

connectToMongoDB('mongodb://127.0.0.1:27017/shorturl1').then(()=>{
    console.log("Connected to mongoDB");
}).catch((err)=>{
    console.log(`error h yha ${err}`);
})

app.get("/test",async (req,res)=>{
    const allUrls=await UFR.find({});
    return res.render('home',{
        urls:allUrls,
    });
});

app.get("/url/:shortID",async (req,res)=>{
    const shortID = req.params.shortID;

    await URL.findOneAndUpdate({
        shortID,
    },
// {
//     $push:{
//         visitHistory: {
//             timestamp:Date.now(),
//         }
//     },
// }
)

res.redirect(entry.redirectURL)
});
app.use("/url",urlRoute);
app.use("/",staticRoute);
app.listen(port,()=>{
    console.log("Jay Shree Ram ", port);
});

