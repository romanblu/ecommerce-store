
import React, { Component } from 'react'
import {Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../../assets/wrappers/Register'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            error:'',
            userCreated: false
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });

    }

    
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const url = '/users';
        
        axios.post(url, this.state).then(res => {
            
            this.setState({userCreated: true})
            
            
            
        })
        .catch(err => {
            console.log(err);
            this.setState({
                error: Object.values(err.response.data)[0]
            });
        });
    }

    

    render() {
        return (
            <Wrapper>
            <div className="entry-page">
                
                <form >
                    <h2>Sign Up!</h2>
                    <fieldset>
                    <legend>Create Account</legend>
                    <p className="error-message">{this.state.error}</p>
                    <ul>
                        <li>
                        <label for="name">Name:</label>
                        <input type="text" id="name" required onChange={this.handleNameChange} value={this.state.name}/>
                        </li>
                        <li>
                        <label for="name">Username:</label>
                        <input type="text" id="username" required onChange={this.handleUsernameChange} value={this.state.username}/>
                        </li>
                        <li>
                        <label for="email">Email:</label>
                        <input type="email" id="email" required onChange={this.handleEmailChange} value={this.state.email}/>
                        
                        </li>
                        <li>
                        <label for="password">Password:</label>
                        <input type="password" id="password" required onChange={ this.handlePasswordChange} value={this.state.password}/>
                        </li>
                    </ul>
                    </fieldset>
                    <button onClick={ this.handleSubmit}>Submit</button>
                    <Link type="button" to="/login" >Have an Account?</Link>
                </form>
                {this.state.userCreated ? <Navigate to='/login'/> : ''}
            </div>
            </Wrapper>
        )
    }
}
