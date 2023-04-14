import React from 'react'

import Wrapper from '../../../assets/wrappers/Input'

export default function Input(props) {
    return (
      <Wrapper>
        <div className="input">
          <label>{props.label}</label>
          <div className="input-field">
            <input type={props.type} value={props.value} onChange={props.onChange} name={props.name} />
            <img src={props.imgSrc} alt={props.imgSrc}/>
          </div>
        </div>
      </Wrapper>
    )
}
