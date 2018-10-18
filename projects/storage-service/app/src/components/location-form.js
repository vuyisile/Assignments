import React, { Component } from 'react';
import axios from 'axios';


class RegisterLocation extends Component {
  constructor() {
    super();
    this.state = {
      addressLine1: '',
      addressLine2: '',
      zipCode:'',
      cityOrTown: ''
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
  submitData(){
    axios.post('http://localhost:3001/business-details',this.state)
  }
  gotoNext(e) {
        // window.location.set('/register-blocks')
  }
//   id serial PRIMARY KEY,
//   address_line1 VARCHAR(255) NOT NULL,
//   address_line2 VARCHAR(255) NOT NULL,
//   city/town VARCHAR(255) NOT NULL,
//   zip_code VARCHAR(255) NOT NULL, 
//   provider_id INT REFERENCES unit_providers(id) NOT NULL
  render() {
    return (<div className={'color form-pos'}>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Location</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Address Line 1
            </td>
            <td>
              <input type='text' name='addressLine1' onChange={this.handleInput} value={this.state.addressLine1} />
            </td>
          </tr>
          <tr>
            <td>
            Address Line 2
            </td>
            <td>
              <input type='text' name='addressLine2' onChange={this.handleInput} value={this.state.addressLine2} />
            </td>
          </tr>
          <tr>
            <td>
              City/Town
            </td>
            <td>
              <input type='telephone' name='cityOrTown' onChange={this.handleInput} value={this.state.cityOrTown} />
            </td>
          </tr>
          <tr>
            <td>
              Zip Code
            </td>
            <td>
              <input type='email' name='zipCode' onChange={this.handleInput} value={this.state.zipCode} />
            </td>
          </tr>
          <tr>
            <td>
              <button className={'btn-margin'}>Cancel</button>
            </td>
            <td>
              <button className={'btn-margin pos'} onClick={this.submitData}>Next</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default RegisterLocation;