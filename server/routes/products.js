import express from 'express'
import Product from '../models/Product.js'
import verifyToken from '../auth/verifyJWT.js'
const router = express.Router();

router.post('/add-product', verifyToken, (req, res) => {
    
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        brand: req.body.brand,
        discount: req.body.discount
    })

    product.save()
    .then(result => res.send(result))
    .catch((err) => console.log(err));
})


router.get('/search/:query', verifyToken, async (req, res) => {    
    const products = await Product.find(
        {$or:[
        {title: {$regex: req.params.query , $options: 'i'}},
        {brand: {$regex: req.params.query, $options: 'i'}}
        ]})
    res.send(products);
})

router.get('/:id', verifyToken, (req, res) => {
    Product.findById(req.params.id)
    .then((result) => {
        res.send(result);
    }).catch(err => res.sendStatus(404))
})



router.get('/',verifyToken, (req, res) => {
    Product.find().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
})


export default router;