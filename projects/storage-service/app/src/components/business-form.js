import React, { Component } from 'react';
import axios from 'axios';


class BusinessForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      companyName: '',
      contactPersonName: '',
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
  submitData() {
    axios.post('http://localhost:3001/business-details', this.state);
    setTimeout(() => {
      this.setState({
        email: '',
        companyName: '',
        contactPersonName: '',
        telephone: ''
      })
    }, 1000);
  }
  gotoNext(e) {
    // window.location.set('/register-blocks')
  }
  render() {
    return (<div className={'color form-pos'}>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Unit Provider Details</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Company Name
            </td>
            <td>
              <input type='text' name='companyName' onChange={this.handleInput} value={this.state.companyName} />
            </td>
          </tr>
          <tr>
            <td>
              Contact Person Name
            </td>
            <td>
              <input type='text' name='contactPersonName' onChange={this.handleInput} value={this.state.contactPersonName} />
            </td>
          </tr>
          <tr>
            <td>
              Telephone
            </td>
            <td>
              <input type='telephone' name='telephone' onChange={this.handleInput} value={this.state.telephone} />
            </td>
          </tr>
          <tr>
            <td>
              Email
            </td>
            <td>
              <input type='email' name='email' onChange={this.handleInput} value={this.state.email} />
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

export default BusinessForm;