import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
// import { connect } from 'react-redux';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    handleInput(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    submitData() {
        axios.post('http://localhost:3001/login', this.state).then((res)=>console.log('token',res.data));
    }
    render() {
        return (<div className={'color container form-pos'}>
            <h3 style={{ marginRight: 5.3 + 'em' }}>Login</h3>
            <form>
                <div>
                    <input placeholder={'email'} type='text' name='email' onChange={this.handleInput} value={this.state.username} /><br />
                    <input placeholder={'password'} type='text' name='password' onChange={this.handleInput} value={this.state.password} /><br />
                </div>
            </form>
            <button onClick={this.submitData}>Login</button>
        </div>
        );
    }
}



export default Login;