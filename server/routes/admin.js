import express from 'express'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'
import Product from '../models/Product.js'

import verifyToken from '../auth/verifyJWT.js'

const router = express.Router();


// get all users and their carts
router.get('/dashboard', verifyToken, async (req, res) => {
    if(req.user.role === 'admin'){
        try{
            const users = await User.find({role:'customer'});
            res.send(users);
        }catch(err){
            res.status(500).send(err);
        }
        
    }else{
        res.status(403).send({error: 'Unauthorized'})
    }
})


export default router;