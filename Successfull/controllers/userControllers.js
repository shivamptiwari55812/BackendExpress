const User = require("../models/userModel");

const createUser=async (req,res)=>{
   
    const {first_name,email}=req.body;

    try{console.log(req.body);
        const user = new User({first_name,email});
        await user.save();
          
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(404).json({msg:'User not been fetched to the server',error})
    }
    // console.log(req.body);  
}

const getAll = async (req,res)=>{
    try{console.log(req.body);
        const user = await User.find();
        
        return res.status(200).json({user})

}
catch(error){
    return res.status(404).json({msg:'Error occured in finding the users',error});
// } console.log(req.body);
}
}

module.exports={createUser,getAll};