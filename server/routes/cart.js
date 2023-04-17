import express from 'express'


import User from '../models/User.js'
import Product from '../models/Product.js'

import verifyToken from '../auth/verifyJWT.js'

const router = express.Router();


// returns all products from the user cart
router.get('/:id', verifyToken, (req, res) => {
    User.findById(req.params.id)
    .then(async user => {
        const productIds = user.cart.products
        try{
            const products = await Product.find().where('_id').in(productIds).exec()
            res.send(products)
            
        }catch(err){
            res.status(500).send({'Error' : 'Could not retrieve data for cart'})
        }
    })
    .catch(err => res.status(500).send(err))
})

// returns all products from the current users cart
router.get('/', verifyToken, (req, res) => {
    User.findById(req.user.id)
    .then(async user => {
        const productIds = user.cart.products
        try{
            const products = await Product.find().where('_id').in(productIds).exec()
            res.send(products)

        }catch(err){
            res.status(500).send({'Error' : 'Could not retrieve data for cart'})
        }
    })
    .catch(err => res.status(500).send(err))
})


export default router;