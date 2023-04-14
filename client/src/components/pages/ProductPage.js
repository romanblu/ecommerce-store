import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../Gallery';
import Button from '../utils/Button';


export default function ProductPage(props) {
    const [product, setProduct] = useState({});

    const id = useParams().id; // get id from url

    useEffect(() => {
        axios.get(`/products/${id}`,  { headers: {"authorization" : localStorage.getItem('jwt')} })
        .then(product => {
            setProduct(product.data);

        }).catch(err => console.log(err.response.data));
    }, [id]);
    
    let price = product.price;
    if(product.discount) {
        price -= product.discount;
    }

    const productDetails = (
        <div className="product-content">
            <h1 className="title">{product.title}</h1>
           
            {
                product.discount ? 
                    <p className='regular-price crossed light-gray'> ${product.price}</p>
                : 
                    ''
            }
            
            <p className="product-price">${price}</p>
            <p className="product-description">{product.description}</p>
            {product.brand ? <p className="product-description">Brand: {product.brand}</p> : ''}
            {product.size ? <p className="product-description">SIZE: {product.size}</p> : ''}
            {product.color ? <p className="product-description">Color: {product.color}</p> : ''}
            <Button text="Add To Cart"></Button>

        </div>
    );
    return (
        <div className="container">
            <div className="product-page">
                {
                    product.images ? <Gallery images={product.images} /> : ''
                }
                
                {productDetails}
                
            </div>
        </div>
    )
}
