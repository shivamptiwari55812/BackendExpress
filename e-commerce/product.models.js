import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
 
    productID:{
        type:String,
        required:true
    },
    description:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    productImage :{
        type:String
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Catsch",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{timestamps:true})

export const ProdctSch = mongoose.model("ProdctSch",productSchema)