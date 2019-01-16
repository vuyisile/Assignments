import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import { userInfo } from 'os';
import jwt from "jsonwebtoken"



class BusinessNavbar extends Component {
  constructor() {
    super();
    this.state = { user: {} }
    this.gotoNext = this.gotoNext.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.submitData = this.submitData.bind(this)
  }
  getUser() {
    if (this.state.user.userType === 'tanent') {
      var user = axios.get('http://localhost:3001/units')
      console.log('user :', user);
    }
  }
  componentDidMount() {
    var auth = JSON.parse(sessionStorage.getItem('auth'))
    if (auth !== null) {
      var user = jwt.decode(auth.token);
      this.setState({ user: user })
    }
  }
  handleInput(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  gotoNext() {
    window.location.pathname = '/location';
  }
  submitData() { axios.post('http://localhost:3001/business', this.state); }

  render() {
    return (
      < div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand btn btn-success" href="#">{this.state.user.userName===null?'':this.state.user.userName}</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/location'>Register Unit(s)</a>
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

export default BusinessNavbar;