import React from 'react'
import Wrapper from '../assets/wrappers/Cart'
import Button from './utils/Button';
import { useNavigate } from 'react-router'; 

export default function CartCheckout(props) {
    let total = 0;
    let totalDiscounts = 0;
    const history = useNavigate();

    const orderDetails = props.products.map(product => (
        (
            <li className="product-detail-list-item">
                <p>{product.brand} - {product.title}</p>
                <p>${product.price} {product.discount ? ` - $${product.discount}` : ''}</p>
            </li>
        )
    ));

    props.products.map(product => {
        total += product.price;
        if(product.discount){
            total -= product.discount;
            totalDiscounts += product.discount;
        }
    })

    const handleSubmit = () => {
        history.push('/checkout');
    }

    return (
        <Wrapper>
        <div className="cart-checkout">
            <h1>Cart Content</h1>

            <div className="order-details">
                <div className="order-details-list">
                    {orderDetails}
                </div>
            </div>
            <p className="total-amount">Total amount:  ${total}</p>
            {totalDiscounts > 0 ? <p className="total-saved">Total amount saved:  ${totalDiscounts}</p> : ''}
            <Button onClick={handleSubmit} text="Checkout" type="checkout"></Button>
        </div>
        </Wrapper>
    )
}
