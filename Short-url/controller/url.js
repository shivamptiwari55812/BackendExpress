const shortid=require('shortid');

const URL = require("../models/url")

async function handleGenerateNewShortURL(req,res){
const body = req.body;
if(!body.url){
    return res.status(404).json({error:"URL IS REQUIRED"})
}
    const shortID = shortid();
    await URL.create({
        shortID:shortID,
        redirectURL: body.url,
        visitHistory:[],
    });
    
    return res.render("home",{
        id:shortID,
    });
    
    // console.log(req.body);
    // return res.json({id:shortID});

}
module.exports ={handleGenerateNewShortURL,};