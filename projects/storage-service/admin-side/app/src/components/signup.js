import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      telephone: ''
    }
    this.gotoNext = this.gotoNext.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.submitData = this.submitData.bind(this)
  }
  handleInput(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  gotoNext() {
    if (window.location.pathname === '/') {
      window.location.pathname = '/units';
    }
  }
  submitData(e) {
    e.preventDefault();
    var email = this.state.email;
    var username = this.state.username;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;
    var telephone = this.state.telephone;
    var testPassword = RegExp(password).test(this.state.confirmPassword)
    if (email.length > 0 && username.length > 0 && password.length > 0 && telephone.length > 0 && confirmPassword.length > 0) {
      if (testPassword === true) {
        axios.post('http://localhost:3001/signup', this.state);
      } else {
        document.getElementById('error').innerText = 'please enter correct password'
      }
    } else {
      document.getElementById('error').innerText = 'please complete the form'
    }
  }

  render() {
    return (<div className={'color container form-pos'}>
      <h3>Sign Up</h3>
      <p id={'error'}></p>
      <form className={'signup-form'}>
        <label>
          Username
          </label>
        <input placeholder='enter username' type='text' name='username' onChange={this.handleInput} value={this.state.username} />

        <label>
          Telephone
          </label>
        <input placeholder='phone number' type='telephone' name='telephone' onChange={this.handleInput} value={this.state.telephone} />

        <label>
          Email
          </label>
        <input placeholder='email' type='email' name='email' onChange={this.handleInput} value={this.state.email} />

        <label>
          password
         </label>
        <input placeholder="password" type='text' name='password' onChange={this.handleInput} value={this.state.password} />

        <label>
          confirm password
         </label>
        <input placeholder="confirm password" type='text' name='confirmPassword' onChange={this.handleInput} value={this.state.confirmPassword} />

      </form>
      <div className={'btn-setting'}>
        <button className={'btn-margin'}>Cancel</button>
        <button className={'btn-margin pos'} onClick={this.submitData}>Next</button>
      </div>



    </div>
    );
  }
}

export default SignUp;