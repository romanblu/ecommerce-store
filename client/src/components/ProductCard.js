import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddToCart from '../Api/AddToCart';
import Wrapper from '../assets/wrappers/ProductCard'


export default function ProductCard(props) {
    const history = useNavigate();

    const handleAddToCart = (e) => {
        var element = e.target
        AddToCart(props._id)
        .then(res => {
            // remove the cart icon 
            element.remove()

        });
    }

    const redirectToProductPage = () =>{
        history.push(`/products/${props._id}`);
    }
    return (
        <Wrapper>
        <>
            <div className="product-listing">
                <div className="product-image" onClick={redirectToProductPage}>
                    {props.discount ? <div className="special-offer"><p>Special Offer</p></div> : ""}
                    
                    <img src={props.images[0]} alt={props.title} />
                </div>

                <p className="product-title" onClick={redirectToProductPage}>{props.brand.toUpperCase()} {props.title}</p>
                <div className="product-price">
                    {
                        props.discount ? 
                            <p className='regular-price crossed light-gray'><span>${props.price}</span></p>
                        : 
                            ''
                    }
                    
                    <p className='regular-price'>${props.price - (props.discount || 0)}</p>
                    <div className="add-to-cart" onClick={handleAddToCart}><i className="fad fa-cart-plus"></i></div>

                </div>

            </div>
        </>
        </Wrapper>
    )
}
