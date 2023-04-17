import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import User from '../models/User.js'
import Product from '../models/Product.js'

import verifyToken from '../auth/verifyJWT.js'

const router = express.Router();


router.post('/',  (req, res) => {
    User.findOne({$or: [{email: req.body.email},{username: req.body.username}]})
    .then(async user =>  {
        if(user){
            return res.status(400).json({email: 'Email or username already exists'})
        }else{
            const newUser = new User({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            });
            try{
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(newUser.password, salt);
                newUser.password = hashedPassword;
                newUser.save()
                .then(user => res.status(201).json(user))
                .catch(err => res.status(500).json(err));
            }catch{
                res.sendStatus(400);
            }
            
        }
    })
    
});

router.get('/' , verifyToken, async (req, res) => {
    try{
        const customers = await User.find({role: 'customer'})
        res.send(customers);
    }catch(err){
        res.status(500).send('Could not get the customers. Error: ', err);
    }
})

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // find username in database
    const user = await User.findOne({username})
    if(!user){
        return res.status(401).json({email:'User not found'});
    }

    const match = await bcrypt.compare(password, user.password)
    
    if(match){
        const payload = { id: user.id, name: user.name, email: user.email, role:user.role } // create jwt payload 

        //sign token
        jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) console.log('Error ' + err);
            res.json({
                success: true,
                token: 'Bearer ' + token,
                id: user.id,
                name: user.name, 
                username: user.username, 
                email: user.email,
                role:user.role
            });
        });
        
    }else{
        return res.status(400).json({password: 'Password is incorrect'});
    }


    
})

router.post('/logout', verifyToken, (req, res) => {
    // optionally sign a new jwt token and dont send it to the user
    // we remove the token on the browser
});

router.post('/add-to-cart', verifyToken, async (req,res) => {

    let user = await User.findOne({_id: req.user.id});
   
    const updatedUser =  await User.findOneAndUpdate({_id: req.user.id},{
        cart: {
            products:[...user.cart.products, req.body.productId]
        }
    });
    res.send(updatedUser);
});


router.get('/current', verifyToken, async (req, res) => {
    const user = await User.findById(req.user.id);
    return res.send(user);
});


router.get('/search/:query', verifyToken, async (req, res) => {
    try{
        const users = await User.find({$and:[
            {username: {$regex: req.params.query , $options: 'i'}},
            {role: 'customer'}
        ]});

        return res.send(users);
    }catch(err){
        res.status(404).send(err);
    }
    
});

router.get('/current/cart', verifyToken, (req, res) => {

})



export default router;