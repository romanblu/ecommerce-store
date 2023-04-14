import React, { useState, useEffect} from 'react'
import Cart from '../Cart';
import CartCheckout from '../CartCheckout';
import GetAllCartProducts from '../../Api/GetAllCartProducts';
import Wrapper from '../../assets/wrappers/CartPage'

export default function CartPage() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        GetAllCartProducts().then(res => setProducts(res.data));
       
    }, []);

    return (
        <Wrapper>
            <div className="container">
                <div className="cart-page">
                    <div></div>
                    <Cart products={products}/>
                    <CartCheckout products={products}/>
                </div>
                
            </div>
        </Wrapper>
    )
}
