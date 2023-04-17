import React from 'react'
import Wrapper from '../assets/wrappers/Header'
import Navbar from './Navbar';

export default function Header(props) {
    return (
        <Wrapper>
            <div>
                <div className="header head-bar-copy">
                    <div className="header-top">
                        <div  className="schpilly-title">
                            <a href="/">SCH<span className="text-style-1">P</span>ILLY's</a>
                        </div>
                        
                    </div>
                    <Navbar user={props.user} logoutUser={props.logoutUser} loginUser={props.loginUser}/>
                </div>
            </div>
        </Wrapper>
    )
}
