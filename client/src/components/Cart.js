import React from 'react'
import CartItem from './CartItem';
import Wrapper from '../assets/wrappers/Cart'

export default function Cart(props) {
    console.log("PRODUCTS",props.products);
    let CartItems = props.products.map(product => {
        return (
            <CartItem {...product}/>
                
            )
    });
    return (
        <Wrapper>
            <div>
                <div className="cart-items">
                    {CartItems}
                </div>        
            </div>
        </Wrapper>
    )
}
