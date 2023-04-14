import React from 'react'
import PaymentForm from '../PaymentForm';
import ShippingForm from '../ShippingForm';
import Wrapper from '../../assets/wrappers/Checkout'

export default function Checkout() {
    return (
        <Wrapper>
            <div className="checkout">
                <ShippingForm />           
                <PaymentForm />
            </div>
        </Wrapper>
    )
}
