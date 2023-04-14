import React from 'react'
import Wrapper from '../../assets/wrappers/Button'

export default function Button(props) {
    let button = <button className="btn1">{props.text}</button>;
    if(props.type === 'checkout'){
        button = <button onClick={props.onClick} className="btn1 checkout-btn">{props.text}</button>;
    }
    if(props.type === 'payment'){
        button = <button onClick={props.onClick} className="btn1 payment-btn">{props.text}</button>;
    }

    return (
        <Wrapper>
            {button}
        </Wrapper>
    )
}
