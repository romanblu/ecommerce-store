import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'

import products from './routes/products.js'
import users from './routes/users.js'
import cart from './routes/cart.js'
import admin from './routes/admin.js'

import Product from './models/Product.js'

// Load config
dotenv.config({path: './config/config.env'});

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// middlewares 
app.use(express.json());

// cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  });


// routes 
app.use('/products', products);
app.use('/users', users);
app.use('/cart', cart);
app.use('/admin', admin);

const port = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(port, console.log("Server running on port " + port + " in " + process.env.NODE_ENV + " mode"));
});


