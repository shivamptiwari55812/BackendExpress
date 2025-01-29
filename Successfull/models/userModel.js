const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    first_name: {
        type:String,

    },

    email:{
        type:String,
        required : true,
    },

 },
  {timestamps:true}
);

const User = mongoose.model('User',userSchema)

module.exports=(User);
