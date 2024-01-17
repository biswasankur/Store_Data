const mongoose=require('mongoose');
const Schema=mongoose.Schema
const ProductSchema=new Schema({

    photo:{
        type:String,
        required:true,
    },
    product_name:{
        type:String,
        required:true,
    },
  
    price: {
        type:Number,
        required:true,
    },
    quantity: {
        type:Number,
        required:true,
    },
    unit: {
        type:String,
        required:true,
    },
    size: {
        type:String,
        required:true,
        enum:[
            'small', 'medium', 'large', 
        ]
    },
    packaging_type: {
        type:String,
        required:true,
    },
})
const ProductModel= new mongoose.model('Product',ProductSchema)
module.exports=ProductModel