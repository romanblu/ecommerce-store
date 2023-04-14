import React from 'react'
import Button from './utils/Button';
import Input from './utils/Input';
import Wrapper from '../assets/wrappers/PaymentForm'

export default function PaymentForm() {
    return (
        <Wrapper>
            <div className="payment-form">
                <h1 className="title">Payment Details</h1>
                <Input label="Cardholder's Name" type="text" name="name" />
                <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
                <div className="column">
                    <Input label="Expiration Date" type="month" name="exp_date" />
                    <Input label="CVV" type="number" name="cvv" />
                </div>
                <i class="fab fa-cc-paypal paypal-icon"></i>
                <p className="total-payment">Total amount + shipping: $50.60</p>
                <Button type="payment" text="CONFIRM PAYMENT"></Button>
            </div>
        </Wrapper>
    )
}
