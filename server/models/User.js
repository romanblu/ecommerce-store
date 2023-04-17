import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productId:{
        type:String
    },
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
    
});



const userSchema = new Schema({
   
    name:{
        type: String,
        required: [true, 'Please add a name']
    },
    username: {
        type: String,
        required: [true, 'Please add username'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please add password'],
        minlength: 6
    },
    cart : {
        products:[String]
    },
    role: {
        type: String,
        default: 'customer'
    },
    loginHistory: [Date],
    logoutHistory: [Date],
    size: String,
}, {timestamps: true});

const User = mongoose.model('user', userSchema);

export default User;