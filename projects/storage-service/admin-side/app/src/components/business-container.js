import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import { userInfo } from 'os';
import jwt from "jsonwebtoken"



class BusinessContainer extends Component {
  constructor() {
    super();
    this.state = { user: {} }
    this.gotoNext = this.gotoNext.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.submitData = this.submitData.bind(this)
  }
  getUser(){
    if(this.state.user.userType === 'tanent'){
      var user = await axios.get('http://localhost:3001/units')

    }
  }
  componentDidMount() {
    var auth = JSON.parse(sessionStorage.getItem('auth'))
    if (auth !== null) {
      var user = jwt.decode(auth.token);
      this.setState({ user:user })
    }

    console.log('bsc', user)
  }
  handleInput(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  gotoNext() {
    if (window.location.pathname === '/') {
      window.location.pathname = '/location';
    }
  }
  submitData() { axios.post('http://localhost:3001/business', this.state); }

  render() {
    return (
      < div >
        {/* {console.log(this.props.userInfo())} */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">{this.state.user.userName}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}

export default BusinessContainer;