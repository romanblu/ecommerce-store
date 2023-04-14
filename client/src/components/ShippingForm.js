import React from 'react'
import Input from './utils/Input';
import Wrapper from '../assets/wrappers/ShippingForm'

export default function ShippingForm(props) {
    return (
        <Wrapper> 
            <div className="order-details">
                <h1 className="title">Shipping Details</h1>
                <div className="order-details-name">
                    <Input label="First Name" name="first_name"/>
                    <Input label="Last Name" name="last_name"/>    
                </div>       
                <Input label="Email (Optional)" name="email"/>
                <Input label="Address" name="address"/>
                <Input label="Address 2" name="address2"/>
                <div className="order-details-country">
                    <Input label="Country" name="country"/>
                    <Input label="State" name="state"/>
                    <Input label="ZIP Code" name="zip"/>
                </div>
                <p className="shipping-cost">Total Shipping and handling: $0.00</p>
            </div>
        </Wrapper>
    )
}
