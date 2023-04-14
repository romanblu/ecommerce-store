import React from 'react'
import Wrapper from '../assets/wrappers/Cart'

export default function CartItem(props) {
    return (
        <Wrapper>
        <div className="product-listing">
                <div className="product-image">
                    {props.discount ? <div className="special-offer"><p>Special Offer</p></div> : ""}
                    <i className="remove-item fas fa-trash"></i>                    
                    <img src={props.images[0]} alt={props.title} />
                </div>

                <p className="product-title">{props.brand.toUpperCase()} {props.title}</p>
                <div className="product-price">
                    {
                        props.discount ? 
                            <p className='regular-price crossed light-gray'><span>${props.price}</span></p>
                        : 
                            ''
                    }
                    
                    <p className='regular-price'>${props.price - (props.discount || 0)}</p>
                    
                </div>
                
                {
                    props.size ? <p className='product-description'>Size: {props.size}</p> : ''
                }
                {
                    props.color ? <p className='product-description'>Color: {props.color}</p> : ''
                }
            </div>
        </Wrapper>
    )
}
