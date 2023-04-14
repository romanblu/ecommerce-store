import React from 'react'
import Wrapper from '../../assets/wrappers/Shipping'

export default function Shipping() {
    return (
        <Wrapper>
        <div className="shipping">
            <div className="shipping-rates-details">
                <h2 className="title">Shipping Rates</h2>
                <p>All packages are shipped through UPS.</p>
                <p>All packages will be shipping to billing addresses only.</p>
                <p>Special releases are subject to different shipping rates.</p>
                <p>Domestic shipping (UPS Ground) 3-5 business days from date shipped</p>
            </div>
            <h2>Domestic Shipping</h2>
            <div className="rates">
                <p>First pair</p>
                <p>$15.00</p>
            </div>
            <div className="rates">
                <p>Second pair</p>
                <p>$6.50</p>
            </div>
            <h2>International Shipping</h2>
            <div className="rates">
                <p>First pair</p>
                <p>$18.00</p>
            </div>
        </div>
        </Wrapper>
    )
}
