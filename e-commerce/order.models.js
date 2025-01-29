import mongoose from "mongoose"
const orditemSch = new mongoose.Schema({

    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProdctSch"
    },
    quantity:{
        type:Number,
        required:true
    }
})
const ordSch = new mongoose.Schema({
    orderId:{
        type:Number,
        required:true
    },
    orderPrice:{
        type:Number,
        required:true
    },

    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProdctSch'
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CatSch"
    },
    orderItems:{
        type:[orditemSch]

    },

    address:{
        type:String,
        required:true
    },

    orderState:{
        type:String,
        enum:["Pending","Cancelled","Delivered"],
        default:"Pending"
    }


},{timestamps:true})

export const ordSchs = mongoose.model("OrdSchs",OrdSch)