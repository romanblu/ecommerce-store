import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const productSchema = new Schema({
   
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    size:{
        type: String
    },
    color:{
        type: String
    },
    images:{
        type:[String],
        required:true
    },
    discount :{ 
        type: Number
    }
    
}, {timestamps: true});

const Product = mongoose.model('product', productSchema);

export default Product;